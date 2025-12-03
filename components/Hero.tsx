/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center relative z-10 max-w-3xl mx-auto px-4 pt-6 pb-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-orange-900 mb-3">
        {t('hero.title')}
      </h1>
      <p className="text-xs sm:text-sm text-orange-700 max-w-xl mx-auto leading-relaxed font-normal">
        {t('hero.subtitle')}
      </p>
    </div>
  );
};