/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh-TW';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Hero Section
    'hero.title': 'Find Peace Through Biblical Wisdom',
    'hero.subtitle': 'A safe space for emotional healing guided by Scripture and compassion',
    'hero.cta': 'Begin Your Journey',

    // Topics
    'topic.insecurity': 'Insecurity',
    'topic.loneliness': 'Loneliness',
    'topic.stress': 'Stress',
    'topic.anxiety': 'Anxiety',
    'topic.guilt': 'Guilt & Shame',
    'topic.anger': 'Anger',
    'topic.depression': 'Depression',
    'topic.trauma': 'Trauma',
    'topic.exhaustion': 'Exhaustion',
    'topic.sorrow': 'Sorrow',

    // Topic Descriptions
    'desc.insecurity': 'Find your identity and worth in God, not in worldly standards.',
    'desc.loneliness': 'Experience the presence of the Friend who sticks closer than a brother.',
    'desc.stress': 'Find rest for your soul in His grace amidst the chaos of life.',
    'desc.anxiety': 'Cast your cares on Him, for He cares deeply for you.',
    'desc.guilt': 'Embrace the freedom that comes from His forgiveness.',
    'desc.anger': 'Learn to be slow to speak and slow to become angry.',
    'desc.depression': 'The Lord is close to the brokenhearted and saves the crushed in spirit.',
    'desc.trauma': 'He heals the brokenhearted and binds up their wounds.',
    'desc.exhaustion': 'Those who hope in the Lord will renew their strength.',
    'desc.sorrow': 'Weeping may stay for the night, but rejoicing comes in the morning.',

    // Bible Verses
    'verses.insecurity': 'Psalm 139:14, Ephesians 2:10',
    'verses.loneliness': 'Deuteronomy 31:6, Matthew 28:20',
    'verses.stress': 'Matthew 11:28-30, Philippians 4:6-7',
    'verses.anxiety': '1 Peter 5:7, Isaiah 41:10',
    'verses.guilt': 'Romans 8:1, 1 John 1:9',
    'verses.anger': 'James 1:19-20, Ephesians 4:26',
    'verses.depression': 'Psalm 34:18, Psalm 42:11',
    'verses.trauma': 'Psalm 147:3, Isaiah 61:1-3',
    'verses.exhaustion': 'Isaiah 40:29-31, Galatians 6:9',
    'verses.sorrow': 'Psalm 30:5, Revelation 21:4',

    // UI Elements
    'ui.back': 'Back',
    'ui.sessionTitle': 'Soul Care Session',
    'ui.startSession': 'Start Session',
    'ui.footer': 'Biblical Emotional Healing App',
    'ui.placeholder': 'Share what\'s on your heart...',
    'ui.send': 'Send',
    'ui.loading': 'Reflecting...',
    'ui.languageToggle': 'Chinese Mode',

    // Input Area
    'input.placeholder': 'Share what\'s on your heart...',
    'input.send': 'Send',

    // Resources Section
    'resources.bookTitle': 'Read Book Extract',
    'resources.bookDesc': 'Explore biblical wisdom and guidance from the chapter',
    'resources.audioTitle': 'Listen to Testimony',
    'resources.audioDesc': 'Hear real stories of healing through God\'s power',
    'resources.audioNote': 'Inspirational testimony to encourage your journey',
  },
  'zh-TW': {
    // Hero Section
    'hero.title': '透過聖經智慧尋找平安',
    'hero.subtitle': '一個以聖經和憐憫引導情緒療癒的安全空間',
    'hero.cta': '開始您的旅程',

    // Topics
    'topic.insecurity': '不安全感',
    'topic.loneliness': '孤獨',
    'topic.stress': '壓力',
    'topic.anxiety': '焦慮',
    'topic.guilt': '罪疚與羞恥',
    'topic.anger': '憤怒',
    'topic.depression': '憂鬱',
    'topic.trauma': '創傷',
    'topic.exhaustion': '疲憊',
    'topic.sorrow': '悲傷',

    // Topic Descriptions
    'desc.insecurity': '在神裡面找到你的身份和價值，而不是世俗的標準。',
    'desc.loneliness': '體驗比弟兄更親密的朋友的同在。',
    'desc.stress': '在生活的混亂中，在祂的恩典中找到靈魂的安息。',
    'desc.anxiety': '將你的憂慮卸給祂，因為祂深深關心你。',
    'desc.guilt': '擁抱從祂的寬恕而來的自由。',
    'desc.anger': '學習慢慢地說，慢慢地動怒。',
    'desc.depression': '主親近傷心的人，拯救靈裡憂傷的人。',
    'desc.trauma': '祂醫治傷心的人，裹好他們的傷處。',
    'desc.exhaustion': '仰望主的人必重新得力。',
    'desc.sorrow': '一宿雖然有哭泣，早晨便必歡呼。',

    // Bible Verses
    'verses.insecurity': '詩篇 139:14，以弗所書 2:10',
    'verses.loneliness': '申命記 31:6，馬太福音 28:20',
    'verses.stress': '馬太福音 11:28-30，腓立比書 4:6-7',
    'verses.anxiety': '彼得前書 5:7，以賽亞書 41:10',
    'verses.guilt': '羅馬書 8:1，約翰一書 1:9',
    'verses.anger': '雅各書 1:19-20，以弗所書 4:26',
    'verses.depression': '詩篇 34:18，詩篇 42:11',
    'verses.trauma': '詩篇 147:3，以賽亞書 61:1-3',
    'verses.exhaustion': '以賽亞書 40:29-31，加拉太書 6:9',
    'verses.sorrow': '詩篇 30:5，啟示錄 21:4',

    // UI Elements
    'ui.back': '返回',
    'ui.sessionTitle': '心靈關懷時光',
    'ui.startSession': '開始對話',
    'ui.footer': '聖經情緒療癒應用程式',
    'ui.placeholder': '分享您心中的想法...',
    'ui.send': '發送',
    'ui.loading': '思考中...',
    'ui.languageToggle': '中文模式',

    // Input Area
    'input.placeholder': '分享您心中的想法...',
    'input.send': '發送',

    // Resources Section
    'resources.bookTitle': '閱讀書籍摘錄',
    'resources.bookDesc': '探索來自章節的聖經智慧和指引',
    'resources.audioTitle': '聆聽見證',
    'resources.audioDesc': '聽真實的人分享透過神的力量得到醫治的故事',
    'resources.audioNote': '激勵人心的見證，鼓勵您的旅程',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
