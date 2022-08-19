import { FC, ReactElement } from 'react';

import { overlayClassesTypes, styleTransformTypes } from './types';

type OverlayInputPropsTypes = {
  overlayClasses: overlayClassesTypes;
  styleTransformProps: styleTransformTypes;
  borderColor: string;
  placeholder: string;
  isOpen: boolean;
  clickHandler: () => void;
};

export const OverlayInput: FC<OverlayInputPropsTypes> = ({
  overlayClasses: {
    overlayClasses,
    overlayIconClasses,
    overlayTextClasses,
    overlayArrowClasses
  },
  styleTransformProps: { transitionProps, transformProps },
  borderColor,
  placeholder,
  isOpen,
  clickHandler
}): ReactElement => (
  <div
    className={overlayClasses}
    onClick={clickHandler}
    style={{ borderColor }}
  >
    <div className={overlayIconClasses}></div>
    <div className={overlayTextClasses}>{placeholder}</div>
    <div
      className={overlayArrowClasses}
      style={{
        transition: transitionProps,
        transform: isOpen ? transformProps : 'none'
      }}
    ></div>
  </div>
);
