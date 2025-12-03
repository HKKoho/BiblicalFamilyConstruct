/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center relative z-10 max-w-3xl mx-auto px-3 sm:px-4 pt-4 sm:pt-6 pb-3 sm:pb-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-orange-900 mb-2 sm:mb-3">
        {t('hero.title')}
      </h1>
      <p className="text-xs sm:text-sm text-orange-700 max-w-xl mx-auto leading-relaxed font-normal">
        {t('hero.subtitle')}
      </p>
    </div>
  );
};