/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useLanguage } from '../contexts/LanguageContext';

interface InputAreaProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

export const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, isLoading, placeholder }) => {
  const { t } = useLanguage();
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput("");
      // Reset height
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  return (
    <div className="w-full mx-auto">
      <form
        onSubmit={handleSubmit}
        className="relative flex items-end gap-3 bg-white backdrop-blur-md border-2 border-orange-400 focus-within:border-orange-600 focus-within:shadow-xl rounded-2xl p-3 shadow-lg transition-all duration-300"
      >
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || t('input.placeholder')}
          disabled={isLoading}
          rows={1}
          className="w-full bg-transparent text-orange-950 placeholder-orange-500 text-base sm:text-lg font-medium p-4 focus:outline-none resize-none max-h-[150px] overflow-y-auto scrollbar-hide"
        />

        <button
          type="button"
          onClick={() => handleSubmit()}
          disabled={!input.trim() || isLoading}
          className={`
            p-4 rounded-xl flex-shrink-0 transition-all duration-200
            ${input.trim() && !isLoading
              ? 'bg-orange-600 text-white hover:bg-orange-500 shadow-lg transform hover:scale-105'
              : 'bg-orange-200 text-orange-400 cursor-not-allowed'
            }
          `}
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <PaperAirplaneIcon className="w-6 h-6" />
          )}
        </button>
      </form>
      <div className="text-center mt-3">
         <p className="text-xs text-orange-700 font-medium">⚠️ AI can make mistakes. Please consult a professional for serious medical or mental health concerns.</p>
      </div>
    </div>
  );
};