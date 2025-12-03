/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SpeakerWaveIcon, StopIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/outline';

export const IntroductionView: React.FC = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(t('intro.text'));

    // Set Chinese voice if available
    u.lang = 'zh-TW';
    u.rate = 0.9;
    u.pitch = 1.0;

    u.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    u.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [t]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      if (utterance) {
        synth.speak(utterance);
        setIsPlaying(true);
        setIsPaused(false);
      }
    }
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    synth.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-orange-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-bold text-orange-900">
              {t('topic.introduction')}
            </h2>
            <SpeakerWaveIcon className="w-8 h-8 text-orange-500" />
          </div>

          {/* Text-to-Speech Controls */}
          <div className="flex gap-3 mb-6 justify-center">
            {!isPlaying && !isPaused && (
              <button
                onClick={handlePlay}
                className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium"
              >
                <PlayIcon className="w-5 h-5" />
                Play Audio
              </button>
            )}

            {isPlaying && (
              <button
                onClick={handlePause}
                className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium"
              >
                <PauseIcon className="w-5 h-5" />
                Pause
              </button>
            )}

            {isPaused && (
              <button
                onClick={handlePlay}
                className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium"
              >
                <PlayIcon className="w-5 h-5" />
                Resume
              </button>
            )}

            {(isPlaying || isPaused) && (
              <button
                onClick={handleStop}
                className="flex items-center gap-2 px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
              >
                <StopIcon className="w-5 h-5" />
                Stop
              </button>
            )}
          </div>

          {/* Introduction Text */}
          <div className="prose prose-orange max-w-none">
            <div className="text-sm leading-relaxed text-gray-800 whitespace-pre-wrap">
              {t('intro.text')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
