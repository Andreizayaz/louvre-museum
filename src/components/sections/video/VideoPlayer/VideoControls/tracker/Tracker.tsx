import { ChangeEvent, FC, ReactElement } from 'react';

import './Tracker.scss';

type TrackerPropsTypes = {
  trackerContainerClasses: string;
  value: number;
  valueForBackground: number;
  max?: number;
  step?: number;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Tracker: FC<TrackerPropsTypes> = ({
  trackerContainerClasses,
  value,
  valueForBackground,
  max,
  step,
  handleInputChange
}): ReactElement => (
  <div className={trackerContainerClasses}>
    <input
      type='range'
      min='0'
      max={max ? max : '1'}
      style={{
        background: `linear-gradient(
      to right,
      #710707 0%,
      #710707 ${valueForBackground}%,
      #c4c4c4 ${valueForBackground}%,
      #c4c4c4 100%
    )`
      }}
      value={value}
      step={step ? step : '0.1'}
      className='tracker__progress'
      onChange={handleInputChange}
    />
  </div>
);
