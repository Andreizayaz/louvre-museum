import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { RadioOptionsGroup } from './RadioOptionsGroup';

import { optionsLabels } from './data';

const RadioOptionsGroupContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'buy_tickets' });
  return (
    <RadioOptionsGroup
      heading={t('ticket_type')}
      options={optionsLabels.map(({ translationKey }) => {
        return { label: t(`${translationKey}`) };
      })}
    />
  );
};

export default RadioOptionsGroupContainer;
RadioOptionsGroupContainer.displayName = 'RadioOptionsGroupContainer';
