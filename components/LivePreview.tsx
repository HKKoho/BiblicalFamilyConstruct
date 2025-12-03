/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useEffect, useRef } from 'react';
import { ChatMessage, TopicContext } from '../services/gemini';
import { SparklesIcon, UserCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';

interface ChatDisplayProps {
  messages: ChatMessage[];
  topic: TopicContext;
  isLoading: boolean;
}

// Internal component to render formatted markdown-like text
const FormattedText: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  
  // Helper for bold text
  const renderRichText = (content: string) => {
      return content.split(/(\*\*.*?\*\*)/).map((part, i) =>
          part.startsWith('**') && part.endsWith('**')
              ? <strong key={i} className="font-semibold text-orange-600">{part.slice(2, -2)}</strong>
              : part
      );
  };

  lines.forEach((line, i) => {
      const trimmed = line.trim();
      
      if (!trimmed) {
          elements.push(<div key={i} className="h-2" />);
          return;
      }

      // Blockquote (Scripture)
      if (trimmed.startsWith('>')) {
          elements.push(
              <div key={i} className="relative group my-2">
                  <div className="absolute inset-0 bg-orange-500/10 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex gap-2 bg-gradient-to-r from-orange-50 to-transparent border-l-2 border-orange-400 p-3 rounded-r-lg">
                    <BookOpenIcon className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div className="text-orange-900 italic font-serif leading-relaxed text-xs">
                        {renderRichText(trimmed.replace(/^>\s?/, ''))}
                    </div>
                  </div>
              </div>
          );
          return;
      }

      // List Item (Actionable steps)
      if (trimmed.match(/^[\*\-]\s/) || trimmed.match(/^\d+\.\s/)) {
          const content = trimmed.replace(/^([\*\-]\s|\d+\.\s)/, '');
          elements.push(
              <div key={i} className="flex gap-2 items-start my-1.5 bg-orange-50/50 p-2 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
                  <div className="w-1 h-1 rounded-full bg-orange-500 mt-1.5 flex-shrink-0 shadow-[0_0_6px_rgba(249,115,22,0.6)]" />
                  <span className="text-orange-900 leading-relaxed text-xs">{renderRichText(content)}</span>
              </div>
          );
          return;
      }

      // Header
      if (trimmed.startsWith('#') || (trimmed.endsWith(':') && trimmed.length < 60)) {
          elements.push(
              <h4 key={i} className="text-orange-900 font-semibold mt-3 mb-1.5 text-sm tracking-tight">
                  {renderRichText(trimmed.replace(/^#+\s?/, ''))}
              </h4>
          );
          return;
      }

      // Default Paragraph
      elements.push(
          <p key={i} className="text-orange-800 leading-relaxed mb-1.5 text-xs">
              {renderRichText(trimmed)}
          </p>
      );
  });

  return <div className="space-y-1">{elements}</div>;
};

export const ChatDisplay: React.FC<ChatDisplayProps> = ({ messages, topic, isLoading }) => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-3" ref={scrollRef}>
      <div className="max-w-3xl mx-auto space-y-3">
        
        {/* Welcome / Context Card - Bible Reminder Box */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-300 rounded-xl p-5 mb-4 text-center shadow-lg">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <SparklesIcon className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-serif font-bold text-orange-950 mb-2">{t(`topic.${topic.id}`)}</h3>
            <p className="text-orange-900 text-sm leading-relaxed mb-4 font-medium">{t(`desc.${topic.id}`)}</p>
            <div className="inline-block px-4 py-2 bg-white rounded-lg border-2 border-orange-300 shadow-sm">
                <p className="text-xs text-orange-800 font-semibold italic">📖 "{t(`verses.${topic.id}`)}"</p>
            </div>
        </div>

        {/* Messages */}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {/* Avatar */}
            <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-orange-200' : 'bg-orange-100'}`}>
                {msg.role === 'user' ? (
                    <UserCircleIcon className="w-4 h-4 text-orange-700" />
                ) : (
                    <SparklesIcon className="w-3.5 h-3.5 text-orange-600" />
                )}
            </div>

            {/* Bubble */}
            <div
                className={`
                    max-w-[90%] sm:max-w-[85%] px-4 py-3 rounded-2xl text-xs sm:text-sm shadow-sm
                    ${msg.role === 'user'
                        ? 'bg-orange-100 text-orange-900 rounded-tr-sm whitespace-pre-wrap leading-relaxed'
                        : 'bg-white/90 border border-orange-200 text-orange-900 rounded-tl-sm'
                    }
                `}
            >
                {msg.role === 'model' ? (
                  <FormattedText text={msg.text} />
                ) : (
                  msg.text
                )}
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <SparklesIcon className="w-4 h-4 text-orange-600" />
            </div>
            <div className="bg-white/90 border border-orange-200 rounded-2xl rounded-tl-sm px-5 py-4 flex items-center space-x-1">
                <div className="w-2 h-2 bg-orange-500/70 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-2 h-2 bg-orange-500/70 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                <div className="w-2 h-2 bg-orange-500/70 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
            </div>
          </div>
        )}

        <div className="h-4"></div>
      </div>
    </div>
  );
};