/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center relative z-10 max-w-4xl mx-auto px-4 pt-8 pb-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-orange-900 mb-4">
        {t('hero.title')}
      </h1>
      <p className="text-sm sm:text-base text-orange-700 max-w-2xl mx-auto leading-relaxed font-normal">
        {t('hero.subtitle')}
      </p>
    </div>
  );
};