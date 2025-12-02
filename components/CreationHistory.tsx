/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { TopicContext } from '../services/gemini';
import { useLanguage } from '../contexts/LanguageContext';

interface TopicRibbonProps {
  topics: TopicContext[];
  activeTopicId: string | null;
  onSelect: (topic: TopicContext) => void;
}

export const TopicRibbon: React.FC<TopicRibbonProps> = ({ topics, activeTopicId, onSelect }) => {
  const { t } = useLanguage();

  return (
    <div className="w-full border-b border-orange-200 bg-white/95 backdrop-blur z-20 sticky top-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto no-scrollbar py-3 px-4 gap-2">
            {topics.map((topic) => {
                const isActive = topic.id === activeTopicId;
                return (
                    <button
                        key={topic.id}
                        onClick={() => onSelect(topic)}
                        className={`
                            whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border
                            ${isActive
                                ? 'bg-orange-100 border-orange-400 text-orange-900'
                                : 'bg-white border-orange-200 text-orange-600 hover:text-orange-900 hover:border-orange-300'
                            }
                        `}
                    >
                        {t(`topic.${topic.id}`)}
                    </button>
                );
            })}
        </div>
      </div>
    </div>
  );
};