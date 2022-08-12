import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { FormFields } from './FormFields';

import { dataForInput, dataForDateAndTime, dataForSelectField } from './data';

import './FormFields.scss';

const FormFieldsContainer: FC = (): ReactElement => {
  const [t1] = useTranslation('translation', { keyPrefix: 'buy_tickets' });
  const [t2] = useTranslation('translation', {
    keyPrefix: 'buy_tickets.booking_tickets'
  });

  return (
    <FormFields
      inputGroupData={dataForInput.map((item) => {
        return { ...item, placeholder: t2(item.placeholder) };
      })}
      dateAndTimeData={dataForDateAndTime.map((item) => {
        return { ...item, placeholder: t2(item.placeholder) };
      })}
      dataForSelect={{
        placeholder: t1(dataForSelectField.placeholder),
        options: dataForSelectField.options.map((item) => {
          return { ...item, label: t1(item.label) };
        })
      }}
    />
  );
};

export default FormFieldsContainer;
FormFieldsContainer.displayName = 'FormFieldsContainer';
