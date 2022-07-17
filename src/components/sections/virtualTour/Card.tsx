import { FC, ReactElement } from 'react';

type CardPropsTypes = {
  backgroundUrl: string;
  cardHeading: string;
  descriptionHeading: string;
  contentText: string;
};

export const Card: FC<CardPropsTypes> = ({
  backgroundUrl,
  cardHeading,
  descriptionHeading,
  contentText
}): ReactElement => (
  <div className='card'>
    <div
      className='card__img'
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    ></div>
    <div className='card__description description-img'>
      <h3 className='description-img__heading'>{cardHeading}</h3>
      <div className='description-img__content content'>
        <h4 className='content__heading'>{descriptionHeading}</h4>
        <p className='content__text'>{contentText}</p>
      </div>
    </div>
  </div>
);
