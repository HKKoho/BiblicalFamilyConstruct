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
    'hero.title': 'Biblical Family Construction',
    'hero.subtitle': 'Building God-honoring families through biblical wisdom and guidance',
    'hero.cta': 'Begin Building',

    // Topics - Family-focused
    'topic.insecurity': 'Marriage Foundation',
    'topic.loneliness': 'Communication',
    'topic.stress': 'Conflict Resolution',
    'topic.anxiety': 'Parenting',
    'topic.guilt': 'Intimacy & Unity',
    'topic.anger': 'Family Roles',
    'topic.depression': 'Financial Stewardship',
    'topic.trauma': 'Spiritual Leadership',
    'topic.exhaustion': 'Extended Family',
    'topic.sorrow': 'Life Transitions',

    // Topic Descriptions
    'desc.insecurity': 'Establish your marriage on the solid foundation of God\'s design and covenant love.',
    'desc.loneliness': 'Learn biblical principles for healthy communication between husband and wife.',
    'desc.stress': 'Resolve conflicts with grace and wisdom, building unity in your family.',
    'desc.anxiety': 'Raise children according to God\'s Word, nurturing them in faith and wisdom.',
    'desc.guilt': 'Cultivate physical and emotional intimacy that honors God in marriage.',
    'desc.anger': 'Understand and fulfill God-given roles in the family with mutual respect.',
    'desc.depression': 'Manage finances as faithful stewards according to biblical principles.',
    'desc.trauma': 'Lead your family spiritually as God intends for husbands and fathers.',
    'desc.exhaustion': 'Navigate relationships with extended family with biblical wisdom.',
    'desc.sorrow': 'Handle life transitions and challenges with faith and resilience.',

    // Bible Verses
    'verses.insecurity': 'Genesis 2:24, Matthew 19:4-6',
    'verses.loneliness': 'Ephesians 4:29, James 1:19',
    'verses.stress': 'Proverbs 15:1, Ephesians 4:26-27',
    'verses.anxiety': 'Proverbs 22:6, Deuteronomy 6:6-7',
    'verses.guilt': '1 Corinthians 7:3-5, Song of Songs 4:9-10',
    'verses.anger': 'Ephesians 5:22-33, Colossians 3:18-21',
    'verses.depression': 'Proverbs 3:9-10, Luke 16:10-11',
    'verses.trauma': 'Joshua 24:15, 1 Timothy 3:4-5',
    'verses.exhaustion': 'Exodus 20:12, 1 Timothy 5:8',
    'verses.sorrow': 'Romans 8:28, James 1:2-4',

    // UI Elements
    'ui.back': 'Back',
    'ui.sessionTitle': 'Family Building Session',
    'ui.startSession': 'Start Session',
    'ui.footer': 'Biblical Family Construction App',
    'ui.placeholder': 'Share your family concerns...',
    'ui.send': 'Send',
    'ui.loading': 'Reflecting...',
    'ui.languageToggle': 'Chinese Mode',

    // Input Area
    'input.placeholder': 'Share your family concerns...',
    'input.send': 'Send',

    // Resources Section
    'resources.bookTitle': 'Read Book Extract',
    'resources.bookDesc': 'Explore biblical wisdom for building God-honoring families',
    'resources.audioTitle': 'Listen to Testimony',
    'resources.audioDesc': 'Hear real stories of transformed families through God\'s grace',
    'resources.audioNote': 'Inspirational testimony to encourage your family journey',
  },
  'zh-TW': {
    // Hero Section
    'hero.title': '聖經家庭建造',
    'hero.subtitle': '透過聖經智慧和指引建立合神心意的家庭',
    'hero.cta': '開始建造',

    // Topics - Family-focused
    'topic.insecurity': '婚姻根基',
    'topic.loneliness': '溝通之道',
    'topic.stress': '衝突解決',
    'topic.anxiety': '親子教育',
    'topic.guilt': '親密與合一',
    'topic.anger': '家庭角色',
    'topic.depression': '財務管理',
    'topic.trauma': '屬靈領導',
    'topic.exhaustion': '大家庭關係',
    'topic.sorrow': '人生轉變',

    // Topic Descriptions
    'desc.insecurity': '在神的設計和盟約之愛上建立婚姻的堅固根基。',
    'desc.loneliness': '學習夫妻之間健康溝通的聖經原則。',
    'desc.stress': '以恩典和智慧解決衝突，在家庭中建立合一。',
    'desc.anxiety': '按照神的話語養育兒女，在信心和智慧中培育他們。',
    'desc.guilt': '培養榮耀神的婚姻中的身體和情感親密關係。',
    'desc.anger': '理解並以互相尊重履行神賦予家庭的角色。',
    'desc.depression': '按照聖經原則作為忠心的管家管理財務。',
    'desc.trauma': '按照神對丈夫和父親的旨意帶領家庭的屬靈生活。',
    'desc.exhaustion': '以聖經智慧處理與大家庭的關係。',
    'desc.sorrow': '以信心和韌性應對人生的轉變和挑戰。',

    // Bible Verses
    'verses.insecurity': '創世記 2:24，馬太福音 19:4-6',
    'verses.loneliness': '以弗所書 4:29，雅各書 1:19',
    'verses.stress': '箴言 15:1，以弗所書 4:26-27',
    'verses.anxiety': '箴言 22:6，申命記 6:6-7',
    'verses.guilt': '哥林多前書 7:3-5，雅歌 4:9-10',
    'verses.anger': '以弗所書 5:22-33，歌羅西書 3:18-21',
    'verses.depression': '箴言 3:9-10，路加福音 16:10-11',
    'verses.trauma': '約書亞記 24:15，提摩太前書 3:4-5',
    'verses.exhaustion': '出埃及記 20:12，提摩太前書 5:8',
    'verses.sorrow': '羅馬書 8:28，雅各書 1:2-4',

    // UI Elements
    'ui.back': '返回',
    'ui.sessionTitle': '家庭建造時光',
    'ui.startSession': '開始對話',
    'ui.footer': '聖經家庭建造應用程式',
    'ui.placeholder': '分享您的家庭問題...',
    'ui.send': '發送',
    'ui.loading': '思考中...',
    'ui.languageToggle': '中文模式',

    // Input Area
    'input.placeholder': '分享您的家庭問題...',
    'input.send': '發送',

    // Resources Section
    'resources.bookTitle': '閱讀書籍摘錄',
    'resources.bookDesc': '探索建立合神心意家庭的聖經智慧',
    'resources.audioTitle': '聆聽見證',
    'resources.audioDesc': '聽真實的家庭透過神的恩典轉化的故事',
    'resources.audioNote': '激勵人心的見證，鼓勵您的家庭旅程',
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
