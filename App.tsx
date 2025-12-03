/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { InputArea } from './components/InputArea';
import { ChatDisplay } from './components/LivePreview';
import { TopicRibbon } from './components/CreationHistory';
import { LanguageToggle } from './components/LanguageToggle';
import { ResourcesSection } from './components/ResourcesSection';
import { IntroductionView } from './components/IntroductionView';
import { useLanguage } from './contexts/LanguageContext';
import { getBiblicalAdvice, ChatMessage, TopicContext } from './services/gemini';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

const TOPICS: TopicContext[] = [
  { id: 'introduction', title: 'Introduction', description: 'Listen to the book introduction with Text-to-Speech.', verses: 'Book Introduction' },
  { id: 'insecurity', title: 'Sacrificial Love', description: 'Living out true love through self-sacrifice in relationships.', verses: '1 Corinthians 13' },
  { id: 'loneliness', title: 'Pre-Marriage', description: 'Understanding God\'s design for relationships before marriage.', verses: 'Genesis 1:27-28, 2:18-25' },
  { id: 'stress', title: 'Covenant Love', description: 'Building marriage on God\'s unbreakable covenant of love.', verses: 'Song of Songs 3:1-11' },
  { id: 'anxiety', title: 'Husband & Wife', description: 'Fulfilling biblical roles in the marriage relationship.', verses: 'Ephesians 5:22-33' },
  { id: 'guilt', title: 'Marital Intimacy', description: 'Cultivating healthy physical intimacy in marriage.', verses: '1 Corinthians 7:1-9' },
  { id: 'anger', title: 'Complementarity', description: 'Embracing how husbands and wives complement each other.', verses: '1 Peter 3:1-9' },
  { id: 'depression', title: 'Family Harmony', description: 'Creating peace and unity within the family.', verses: 'Genesis 50:15-21' },
  { id: 'trauma', title: 'Sexual Purity', description: 'Maintaining purity and faithfulness in marriage.', verses: 'Proverbs 5:1-14, Matthew 5:27-30' },
  { id: 'exhaustion', title: 'Contentment', description: 'Finding satisfaction and joy in God\'s provision.', verses: '1 Samuel 1:1-11' },
  { id: 'sorrow', title: 'Divine Calling', description: 'Understanding marriage and singleness as God\'s calling.', verses: 'Matthew 19:3-12, 1 Corinthians 7:25-35' },
];

const App: React.FC = () => {
  const { t } = useLanguage();
  const [activeTopic, setActiveTopic] = useState<TopicContext | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectTopic = (topic: TopicContext) => {
    setActiveTopic(topic);
    setChatHistory([]); // Start fresh chat
  };

  const handleBack = () => {
    setActiveTopic(null);
    setChatHistory([]);
  };

  const handleSendMessage = async (text: string) => {
    if (!activeTopic) return;

    const newMessage: ChatMessage = { role: 'user', text };
    const updatedHistory = [...chatHistory, newMessage];
    
    setChatHistory(updatedHistory);
    setIsLoading(true);

    try {
      // Call Gemini
      const responseText = await getBiblicalAdvice(updatedHistory, text, activeTopic);
      
      const botMessage: ChatMessage = { role: 'model', text: responseText };
      setChatHistory(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to get advice", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[100dvh] flex flex-col overflow-hidden relative">

      {/* Background Ambience - Warm hopeful glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100/20 rounded-full blur-3xl"></div>
      </div>

      {!activeTopic ? (
        /* HOME VIEW: Topic Grid */
        <div className="flex-1 overflow-y-auto z-10">
          {/* Language Toggle - Top Right */}
          <div className="absolute top-4 right-4 z-20">
            <LanguageToggle />
          </div>

          <Hero />

          <div className="max-w-6xl mx-auto px-3 sm:px-4 pb-6 sm:pb-8">
            {/* Mobile: Grid Layout, Desktop: Pentagon Layout */}
            <div className="hidden md:block">
              <div className="relative min-h-[600px] flex items-center justify-center">
                {/* Pentagon arrangement: Top (1), Row 2 (2), Row 3 (3), Row 4 (3), Bottom (2) */}

              {/* Top Row - 1 card (Introduction) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                {TOPICS.slice(0, 1).map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleSelectTopic(topic)}
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white border border-orange-200 hover:border-orange-400 rounded-xl p-4 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-200/50 w-44"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-orange-400/0 group-hover:bg-orange-500 transition-colors"></div>
                    <div className="absolute top-3 right-3 text-orange-400 group-hover:text-orange-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-serif font-semibold text-orange-900 mb-1.5 group-hover:text-orange-600">
                      {t(`topic.${topic.id}`)}
                    </h3>
                    <p className="text-xs text-orange-700/70 group-hover:text-orange-800 line-clamp-2">
                      {t(`desc.${topic.id}`)}
                    </p>
                    <div className="mt-3 flex items-center text-xs text-orange-500/0 group-hover:text-orange-600 transition-colors">
                      <span>{t('ui.startSession')}</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </button>
                ))}
              </div>

              {/* Row 2 - 2 cards */}
              <div className="absolute top-24 left-1/2 -translate-x-1/2 flex gap-4">
                {TOPICS.slice(1, 3).map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleSelectTopic(topic)}
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white border border-orange-200 hover:border-orange-400 rounded-xl p-4 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-200/50 w-44"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-orange-400/0 group-hover:bg-orange-500 transition-colors"></div>
                    <div className="absolute top-3 right-3 text-orange-400 group-hover:text-orange-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <h3 className="text-base font-serif font-semibold text-orange-900 mb-1.5 group-hover:text-orange-600">
                      {t(`topic.${topic.id}`)}
                    </h3>
                    <p className="text-xs text-orange-700/70 group-hover:text-orange-800 line-clamp-2">
                      {t(`desc.${topic.id}`)}
                    </p>
                    <div className="mt-3 flex items-center text-xs text-orange-500/0 group-hover:text-orange-600 transition-colors">
                      <span>{t('ui.startSession')}</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </button>
                ))}
              </div>

              {/* Row 3 - 3 cards */}
              <div className="absolute top-48 left-1/2 -translate-x-1/2 flex gap-4">
                {TOPICS.slice(3, 6).map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleSelectTopic(topic)}
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white border border-orange-200 hover:border-orange-400 rounded-xl p-4 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-200/50 w-44"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-orange-400/0 group-hover:bg-orange-500 transition-colors"></div>
                    <div className="absolute top-3 right-3 text-orange-400 group-hover:text-orange-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <h3 className="text-base font-serif font-semibold text-orange-900 mb-1.5 group-hover:text-orange-600">
                      {t(`topic.${topic.id}`)}
                    </h3>
                    <p className="text-xs text-orange-700/70 group-hover:text-orange-800 line-clamp-2">
                      {t(`desc.${topic.id}`)}
                    </p>
                    <div className="mt-3 flex items-center text-xs text-orange-500/0 group-hover:text-orange-600 transition-colors">
                      <span>{t('ui.startSession')}</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </button>
                ))}
              </div>

              {/* Row 4 - 3 cards */}
              <div className="absolute top-72 left-1/2 -translate-x-1/2 flex gap-4">
                {TOPICS.slice(6, 9).map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleSelectTopic(topic)}
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white border border-orange-200 hover:border-orange-400 rounded-xl p-4 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-200/50 w-44"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-orange-400/0 group-hover:bg-orange-500 transition-colors"></div>
                    <div className="absolute top-3 right-3 text-orange-400 group-hover:text-orange-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <h3 className="text-base font-serif font-semibold text-orange-900 mb-1.5 group-hover:text-orange-600">
                      {t(`topic.${topic.id}`)}
                    </h3>
                    <p className="text-xs text-orange-700/70 group-hover:text-orange-800 line-clamp-2">
                      {t(`desc.${topic.id}`)}
                    </p>
                    <div className="mt-3 flex items-center text-xs text-orange-500/0 group-hover:text-orange-600 transition-colors">
                      <span>{t('ui.startSession')}</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </button>
                ))}
              </div>

              {/* Bottom Row - 2 cards */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
                {TOPICS.slice(9, 11).map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleSelectTopic(topic)}
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white border border-orange-200 hover:border-orange-400 rounded-xl p-4 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-200/50 w-44"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-orange-400/0 group-hover:bg-orange-500 transition-colors"></div>
                    <div className="absolute top-3 right-3 text-orange-400 group-hover:text-orange-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <h3 className="text-base font-serif font-semibold text-orange-900 mb-1.5 group-hover:text-orange-600">
                      {t(`topic.${topic.id}`)}
                    </h3>
                    <p className="text-xs text-orange-700/70 group-hover:text-orange-800 line-clamp-2">
                      {t(`desc.${topic.id}`)}
                    </p>
                    <div className="mt-3 flex items-center text-xs text-orange-500/0 group-hover:text-orange-600 transition-colors">
                      <span>{t('ui.startSession')}</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </button>
                ))}
              </div>
              </div>
            </div>

            {/* Mobile Grid Layout */}
            <div className="md:hidden grid grid-cols-2 gap-3 max-w-md mx-auto">
              {TOPICS.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => handleSelectTopic(topic)}
                  className="group relative overflow-hidden bg-white/80 backdrop-blur-sm active:bg-white border border-orange-200 active:border-orange-400 rounded-xl p-3 text-left transition-all duration-200 active:scale-95 shadow-sm active:shadow-lg min-h-[120px] flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-orange-400/0 group-active:bg-orange-500 transition-colors"></div>
                  <div className="absolute top-2 right-2 text-orange-400 group-active:text-orange-600 transition-colors">
                    {topic.id === 'introduction' ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-sm font-serif font-semibold text-orange-900 mb-1 pr-6 group-active:text-orange-600">
                    {t(`topic.${topic.id}`)}
                  </h3>
                  <p className="text-[10px] text-orange-700/70 group-active:text-orange-800 line-clamp-3 flex-1">
                    {t(`desc.${topic.id}`)}
                  </p>
                  <div className="mt-2 flex items-center text-[10px] text-orange-500 group-active:text-orange-600 transition-colors">
                    <span>{t('ui.startSession')}</span>
                    <svg className="w-2.5 h-2.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <footer className="text-center py-3 sm:py-4 text-orange-600 text-xs">
            <p>{t('ui.footer')} • {new Date().getFullYear()}</p>
          </footer>
        </div>
      ) : (
        /* CHAT VIEW OR INTRODUCTION VIEW */
        <div className="flex flex-col h-full z-10 animate-in fade-in duration-500">
          {/* Header */}
          <div className="flex-shrink-0 bg-white/90 backdrop-blur-md border-b border-orange-200 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center text-orange-700 active:text-orange-900 transition-colors text-xs sm:text-sm font-medium min-h-[44px] -ml-2 pl-2 pr-3"
            >
              <ChevronLeftIcon className="w-5 h-5 sm:w-5 sm:h-5 mr-0.5 sm:mr-1" />
              <span className="hidden xs:inline">{t('ui.back')}</span>
            </button>
            <span className="text-xs sm:text-sm font-semibold text-orange-900 hidden sm:block truncate max-w-[200px]">{t('ui.sessionTitle')}</span>
            <LanguageToggle />
          </div>

          {/* Quick Topic Switcher */}
          <TopicRibbon topics={TOPICS} activeTopicId={activeTopic.id} onSelect={handleSelectTopic} />

          {activeTopic.id === 'introduction' ? (
            /* Introduction View with Text-to-Speech */
            <IntroductionView />
          ) : (
            <>
              {/* Chat Content */}
              <ChatDisplay
                messages={chatHistory}
                topic={activeTopic}
                isLoading={isLoading}
              />

              {/* Resources Section - Book Extract & Audio Testimony */}
              <div className="flex-shrink-0 border-t border-orange-200 bg-gradient-to-b from-transparent to-orange-50/30">
                <ResourcesSection topic={activeTopic} />
              </div>

              {/* Input Area - Centered and Prominent */}
              <div className="flex-shrink-0 p-4 pb-6 bg-gradient-to-t from-orange-100/80 via-amber-50/50 to-transparent backdrop-blur-sm border-t border-orange-200">
                <div className="max-w-4xl mx-auto">
                  <InputArea onSendMessage={handleSendMessage} isLoading={isLoading} />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;