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
    'topic.introduction': 'Introduction',
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
    'desc.introduction': 'Listen to the book introduction read aloud with Text-to-Speech.',
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
    'verses.introduction': 'Book Introduction',
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

    // Introduction Text
    'intro.text': `家庭是社會的基本單位，俗人對"家"的觀念尤為重視。可惜，近年家庭都開始出現，離婚率節節上升，單親家庭愈來愈多如雨後春筍，再加上年輕國自虐憂愁，對於滿國園大壓力，在這時代浪潮的衝擊下，茶至姪妻就住也不再彼劫，這實在不能不壤我們想代大壓力。

人拒由子或瓦的廊定，對娛婚有錯誤的觀點和不切實際的期望，適席了相設立極短暫度的典章，離婦我群的交代公經離要想變學，但真正懂得如何建立的人，仍是寥寥可數。

一向以來，我們都受信：神是人生命的聯絡者，在這督曝沒有絕路，羞辱的需領和看照，我們於2010年5月出版了以"全人簡講為基礎"而編撰的《心靈團單學》，目的就是幫助更人情在在人生後俯不足用的的話語，並匡生命中西五色鷹的挑戰，並為主打美好的見證。特定夫社一高團單學，對於系信香決校《心靈團單學》見的此評他聰瑪家的見證，並他們已更靠要商，因出經以得敢，魔友出敢並不關照結婚重樣，他生命新，置金念服，過討評婚控的生活。

威到夫大夫信用《心靈團單學》它給榆了整經研究，靈牒帝開設心靈團學（也括心靈輔導），讓更多人得著痛苦的幫，生命就變成長，為了更要切地服待弱兄妹，難則也其實夜運用《心靈團單學》，我們以做一系列是經資料，包括長老和資本，供個人研經、團契小組及主日學研讀，期望藉著文藏討論，查考經文、分享及彼此開編，有助提性旦我種毒，家成是不同國籍的困礎，你可僅得教敬，生命更星成熟。

我們還棟《媽煮就其真一活出典緣愛》為《心靈團單學》首款系列的第二冊，因為家著有屬家的約墓，應讓國線愛人心究意，性生活不能滿足關系兩，不守群來希望我衝撃，重害的廢服值人家沒改變，每等她確為可見衝虞，問題不修試完成了，絕對成為當今一個觸為重要的課題。所以，更要更真實地教育基督徒怎樣在家庭生活所展觀到圓，駕助性住庄"家"的觀念和男女關連俸作正並明照的丁解，建立合會上這的家庭生活，在教師中帝酸到此代，為主教作美好的見證本和基本，內容均為十章至重要料，包括愛、婚前緊、婚姻、夫妻的挑戰、婚姻的性觀痛、家庭生活、家庭、不育及跟身十億礎超，從聖經教學，寫的人物的經歷及生那麼世提出生命傳修，講我們建立堅固家園的靈糧重整，重要婆女在婚姻階的中履行的身好衝麻爾，互相栽培，向夫妻才能更多參與家庭的基地，並予合會上這的基地，全章就討分娛養本和基本，內容均為十章至重要料，包括愛、婚前緊、婚姻、夫妻的挑戰、婚姻的。

這壘觀察料雖以完成，除了感謝父神在各方面的供應和照顧大，我們聖感謝主權幸華全傳士的建議和支持，作者且敬信博士，德應海博士及向志俊博士順心編寫，蒙系明先生監督計劃，還有類似相對材料可工暈心建上，演劇的鼓音著者得堪無天的智慧和力量去廣為靈對客的宗教，並升片決色相基庫並經全的言會化家庭，享受得久傷意，溫嘉相和照暴素滿的婚姻生活。`,
  },
  'zh-TW': {
    // Hero Section
    'hero.title': '聖經建造家庭',
    'hero.subtitle': '透過聖經智慧和指引建立合神心意的家庭',
    'hero.cta': '開始建造',

    // Topics - Family-focused
    'topic.introduction': '導論',
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
    'desc.introduction': '聆聽書籍導論的語音朗讀。',
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
    'verses.introduction': '書籍導論',
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
    'ui.footer': '聖經建造家庭應用程式',
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

    // Introduction Text (same as English, in Traditional Chinese)
    'intro.text': `家庭是社會的基本單位，俗人對"家"的觀念尤為重視。可惜，近年家庭都開始出現，離婚率節節上升，單親家庭愈來愈多如雨後春筍，再加上年輕國自虐憂愁，對於滿國園大壓力，在這時代浪潮的衝擊下，茶至姪妻就住也不再彼劫，這實在不能不壤我們想代大壓力。

人拒由子或瓦的廊定，對娛婚有錯誤的觀點和不切實際的期望，適席了相設立極短暫度的典章，離婦我群的交代公經離要想變學，但真正懂得如何建立的人，仍是寥寥可數。

一向以來，我們都受信：神是人生命的聯絡者，在這督曝沒有絕路，羞辱的需領和看照，我們於2010年5月出版了以"全人簡講為基礎"而編撰的《心靈團單學》，目的就是幫助更人情在在人生後俯不足用的的話語，並匡生命中西五色鷹的挑戰，並為主打美好的見證。特定夫社一高團單學，對於系信香決校《心靈團單學》見的此評他聰瑪家的見證，並他們已更靠要商，因出經以得敢，魔友出敢並不關照結婚重樣，他生命新，置金念服，過討評婚控的生活。

威到夫大夫信用《心靈團單學》它給榆了整經研究，靈牒帝開設心靈團學（也括心靈輔導），讓更多人得著痛苦的幫，生命就變成長，為了更要切地服待弱兄妹，難則也其實夜運用《心靈團單學》，我們以做一系列是經資料，包括長老和資本，供個人研經、團契小組及主日學研讀，期望藉著文藏討論，查考經文、分享及彼此開編，有助提性旦我種毒，家成是不同國籍的困礎，你可僅得教敬，生命更星成熟。

我們還棟《媽煮就其真一活出典緣愛》為《心靈團單學》首款系列的第二冊，因為家著有屬家的約墓，應讓國線愛人心究意，性生活不能滿足關系兩，不守群來希望我衝撃，重害的廢服值人家沒改變，每等她確為可見衝虞，問題不修試完成了，絕對成為當今一個觸為重要的課題。所以，更要更真實地教育基督徒怎樣在家庭生活所展觀到圓，駕助性住庄"家"的觀念和男女關連俸作正並明照的丁解，建立合會上這的家庭生活，在教師中帝酸到此代，為主教作美好的見證本和基本，內容均為十章至重要料，包括愛、婚前緊、婚姻、夫妻的挑戰、婚姻的性觀痛、家庭生活、家庭、不育及跟身十億礎超，從聖經教學，寫的人物的經歷及生那麼世提出生命傳修，講我們建立堅固家園的靈糧重整，重要婆女在婚姻階的中履行的身好衝麻爾，互相栽培，向夫妻才能更多參與家庭的基地，並予合會上這的基地，全章就討分娛養本和基本，內容均為十章至重要料，包括愛、婚前緊、婚姻、夫妻的挑戰、婚姻的。

這壘觀察料雖以完成，除了感謝父神在各方面的供應和照顧大，我們聖感謝主權幸華全傳士的建議和支持，作者且敬信博士，德應海博士及向志俊博士順心編寫，蒙系明先生監督計劃，還有類似相對材料可工暈心建上，演劇的鼓音著者得堪無天的智慧和力量去廣為靈對客的宗教，並升片決色相基庫並經全的言會化家庭，享受得久傷意，溫嘉相和照暴素滿的婚姻生活。`,
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
