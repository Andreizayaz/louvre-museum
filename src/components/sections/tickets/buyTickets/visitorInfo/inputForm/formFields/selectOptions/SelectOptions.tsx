import { ClickAwayListener } from '@mui/material';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select, { SingleValue } from 'react-select';

import { selectTicket, setTicketInfo, VisitorType } from 'src/store/Tickets';
import {
  selectErrorObject,
  setValidateError,
  ValidateErrorsTypes
} from 'src/store/ValidateError';

import {
  ACTIVE_BORDER_COLOR,
  COMMON_BORDER_COLOR,
  REB_BORDER_COLOR,
  TICKET_TYPE
} from 'src/constants';

import { getTotalPrice } from '../../../../helpers';
import { optionsType } from '../../../../radioOptionsGroup/types';

import { ValidateError } from '../validateError';

import { dataForSelectType } from '../types';

import './SelectOptions.scss';
import { translateSelectedTicketType } from '../../../helpers';

type selectOptionsPropsTypes = {
  dataForSelect: dataForSelectType;
};

export const SelectOptions: FC<selectOptionsPropsTypes> = ({
  dataForSelect: { placeholder, options }
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [borderColor, setBorderColor] = useState(COMMON_BORDER_COLOR);
  const [isValidateError, setIsValidateError] = useState(false);

  const dispatch = useDispatch();

  const visitorData: VisitorType = JSON.parse(
    JSON.stringify(useSelector(selectTicket))
  );

  const errorObject: ValidateErrorsTypes = JSON.parse(
    JSON.stringify(useSelector(selectErrorObject))
  );

  const changeHandler = (data: SingleValue<optionsType>) => {
    console.log(data);
    visitorData[TICKET_TYPE] = data?.value as string;
    visitorData.totalPrice = getTotalPrice(
      visitorData.ticketType,
      visitorData.basicTicketCount,
      visitorData.seniorTicketCount
    );
    dispatch(setTicketInfo(visitorData));
    setIsOpen(!isOpen);
  };

  const awayClickHandler = () => setIsOpen(false);

  useEffect(() => {
    errorObject.dateVisit.isError = isValidateError;
    dispatch(setValidateError(errorObject));
  }, [isValidateError]);

  useEffect(() => {
    if (isOpen) {
      setBorderColor(ACTIVE_BORDER_COLOR);
      isValidateError && setIsValidateError(false);
      return;
    }

    if (isValidateError) {
      setBorderColor(REB_BORDER_COLOR);
      return;
    }

    setBorderColor(COMMON_BORDER_COLOR);
    !visitorData.ticketType.trim().length && setIsValidateError(true);
  }, [isOpen]);

  return (
    <ClickAwayListener onClickAway={awayClickHandler}>
      <div className='select-wrapper'>
        <div
          className='select-wrapper__select-placeholder select-placeholder'
          style={{ borderColor: borderColor }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className='select-placeholder__icon'></div>
          <div className='select-placeholder__text'>
            {visitorData.ticketType.trim().length
              ? translateSelectedTicketType(visitorData.ticketType)
              : placeholder}
          </div>
          <div
            className='select-placeholder__arrow'
            style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
          ></div>
        </div>
        <Select
          options={options}
          menuIsOpen={isOpen}
          onChange={changeHandler}
        />
        {isValidateError && (
          <ValidateError errorText={"ticket type field can't be empty"} />
        )}
      </div>
    </ClickAwayListener>
  );
};
