import { FC, ReactElement } from 'react';

type VisitImagePropsTypes = {
  imgSrc: string;
  title: string;
};

export const VisitImage: FC<VisitImagePropsTypes> = ({
  imgSrc,
  title
}): ReactElement => (
  <div
    className='visit-image'
    style={{ backgroundImage: `url(${imgSrc})` }}
    title={title}
  ></div>
);
