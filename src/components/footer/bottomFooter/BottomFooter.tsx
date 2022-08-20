import { FC, ReactElement } from 'react';

import {
  APP_NAME,
  PROJECT_AUTHOR,
  PUBLISHED_YEAR,
  GITHUB_LINK
} from 'src/constants';

import './BottomFooter.scss';

export const BottomFooter: FC = (): ReactElement => (
  <div className='bottom-footer'>
    <div className='container'>
      <div className='bottom-footer__content'>
        <div className='content__app-name'>{APP_NAME}</div>
        <div className='content__author'>
          <a
            href={GITHUB_LINK}
            className='author-link'
            target='_blank'
            rel='noreferrer'
          >
            {PROJECT_AUTHOR}
          </a>
        </div>
        <div className='content__published-year'>&copy; {PUBLISHED_YEAR}</div>
      </div>
    </div>
  </div>
);
