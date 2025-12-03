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
    'intro.text': `家庭是社會的本單位，華人對"家"的觀念尤為重視。可惜，近年家庭悲劇與日俱增，離婚率節節上升，單親家庭多如雨後春筍，青少年問題日益嚴重，對社會構成龐大壓力。在這時代洪流的衝擊下，甚至連基督徒也不能倖免，這實在不能不歸咎於現代人扭曲了家庭的觀念，對婚姻有錯誤的假設和不切實際的期望，違背了神設立婚姻制度的美意。雖然我們的文化公認需要穩健家庭，但真正懂得如何建立的人，仍是寥寥可數。

一向以來，我們都堅信：神是人生命的導航者，在基督裡沒有絕路。蒙神的帶領和看顧，我們於2010年5月出版了以"全人關懷為進路"而編寫的《心靈關懷聖經》，目的就是幫助華人信徒在人生磨煉中活用神的話語，迎接生命中各式各樣的挑戰，並為主打美好的仗，持定永生，高唱凱歌。對於未信者來說，《心靈關懷聖經》有助他們認識真理和人生的意義與方向。自出版以來，廣受歡迎，短期內重印；弟兄姊妹能從神話語中得著力量和智慧，生命更新，靈命復興，過討神喜悅的生活。

感謝神大大使用《心靈關懷聖經》，它結合了聖經研究、靈修神學與心靈關懷（包括心理輔導），讓更多人得著福音的好處，生命蛻變成長。為了更適切地服侍弟兄姊妹，幫助他們有效運用《心靈關懷聖經》，我們出版一系列查經資料，包括組長本和組員本，供個人研經、團契小組及主日學研讀，期望藉著文章討論、查考經文、分享及彼此關顧，有助信徒自我檢視，深化對不同議題的認識，從中獲得啟發，生命更趨成熟。

我們選擇《與家庭共舞－活出真情真愛》為《心靈關懷聖經》查經系列的第二冊，因為家家有本難念的經，溝通障礙教人心灰意冷，性生活不和諧冷卻了熱情，不育帶來希望幻滅，童年的陰影使人不敢去愛，單身被視為奇異品種，問題好像沒完沒了，困難數之不盡。本書編寫的目的，旨在嘗試從聖經探討神對家庭各方面的教導，觸及家庭生活各個範疇和層面，幫助信徒對"家"的觀念和男女婚姻關係有正確且全面的了解，建立合神心意的家庭生活，在這彎曲悖謬的世代中，為主作美好的見證。全書設計分組長本和組員本，內容均為十課查經資料，包括愛、婚前關係、婚姻、夫妻的挑戰、婚姻中的性關係、夫妻的溝通、家庭生活、姦淫、不育及獨身十個課題。從聖經教導、舊約人物的經歷及主耶穌在世的生命榜樣，讓我們建立鞏固家庭的聖經基礎，掌握男女在婚姻關係中應有的身分和角色，從而學習與對方建立良好的關係網絡，互相扶持，同奔天路。組長本另附導言和結語，提供更多參考資料。

這查經資料得以完成，除了感謝父神在各方面的供應和帶領外，我們要感謝主編李耀全博士的提點和支持，作者白智信博士、譚廣海博士及何志彬博士精心編寫，黎永明先生統籌整個出版計劃，還有編輯和設計同工盡心擺上。深盼你藉著本書得著屬天的智慧和力量去應對各樣的挑戰，提升解決困難的能力，助己助人，建立和維持健全的基督化家庭，享受持久相愛、溫馨和諧及親密美滿的婚姻生活。`,

    // Introduction Summary for TTS
    'intro.summary': `家庭是社會的本單位，華人尤為重視。可惜，近年家庭悲劇與日俱增，離婚率上升，單親家庭增多。本書《與家庭共舞－活出真情真愛》旨在從聖經探討神對家庭各方面的教導，幫助信徒建立合神心意的家庭生活。全書包括十課查經資料：愛、婚前關係、婚姻、夫妻的挑戰、婚姻中的性關係、夫妻的溝通、家庭生活、姦淫、不育及獨身。願你藉著本書得著智慧和力量，建立健全的基督化家庭，享受溫馨和諧的婚姻生活。`,
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
    'intro.text': `家庭是社會的本單位，華人對"家"的觀念尤為重視。可惜，近年家庭悲劇與日俱增，離婚率節節上升，單親家庭多如雨後春筍，青少年問題日益嚴重，對社會構成龐大壓力。在這時代洪流的衝擊下，甚至連基督徒也不能倖免，這實在不能不歸咎於現代人扭曲了家庭的觀念，對婚姻有錯誤的假設和不切實際的期望，違背了神設立婚姻制度的美意。雖然我們的文化公認需要穩健家庭，但真正懂得如何建立的人，仍是寥寥可數。

一向以來，我們都堅信：神是人生命的導航者，在基督裡沒有絕路。蒙神的帶領和看顧，我們於2010年5月出版了以"全人關懷為進路"而編寫的《心靈關懷聖經》，目的就是幫助華人信徒在人生磨煉中活用神的話語，迎接生命中各式各樣的挑戰，並為主打美好的仗，持定永生，高唱凱歌。對於未信者來說，《心靈關懷聖經》有助他們認識真理和人生的意義與方向。自出版以來，廣受歡迎，短期內重印；弟兄姊妹能從神話語中得著力量和智慧，生命更新，靈命復興，過討神喜悅的生活。

感謝神大大使用《心靈關懷聖經》，它結合了聖經研究、靈修神學與心靈關懷（包括心理輔導），讓更多人得著福音的好處，生命蛻變成長。為了更適切地服侍弟兄姊妹，幫助他們有效運用《心靈關懷聖經》，我們出版一系列查經資料，包括組長本和組員本，供個人研經、團契小組及主日學研讀，期望藉著文章討論、查考經文、分享及彼此關顧，有助信徒自我檢視，深化對不同議題的認識，從中獲得啟發，生命更趨成熟。

我們選擇《與家庭共舞－活出真情真愛》為《心靈關懷聖經》查經系列的第二冊，因為家家有本難念的經，溝通障礙教人心灰意冷，性生活不和諧冷卻了熱情，不育帶來希望幻滅，童年的陰影使人不敢去愛，單身被視為奇異品種，問題好像沒完沒了，困難數之不盡。本書編寫的目的，旨在嘗試從聖經探討神對家庭各方面的教導，觸及家庭生活各個範疇和層面，幫助信徒對"家"的觀念和男女婚姻關係有正確且全面的了解，建立合神心意的家庭生活，在這彎曲悖謬的世代中，為主作美好的見證。全書設計分組長本和組員本，內容均為十課查經資料，包括愛、婚前關係、婚姻、夫妻的挑戰、婚姻中的性關係、夫妻的溝通、家庭生活、姦淫、不育及獨身十個課題。從聖經教導、舊約人物的經歷及主耶穌在世的生命榜樣，讓我們建立鞏固家庭的聖經基礎，掌握男女在婚姻關係中應有的身分和角色，從而學習與對方建立良好的關係網絡，互相扶持，同奔天路。組長本另附導言和結語，提供更多參考資料。

這查經資料得以完成，除了感謝父神在各方面的供應和帶領外，我們要感謝主編李耀全博士的提點和支持，作者白智信博士、譚廣海博士及何志彬博士精心編寫，黎永明先生統籌整個出版計劃，還有編輯和設計同工盡心擺上。深盼你藉著本書得著屬天的智慧和力量去應對各樣的挑戰，提升解決困難的能力，助己助人，建立和維持健全的基督化家庭，享受持久相愛、溫馨和諧及親密美滿的婚姻生活。`,

    // Introduction Summary for TTS
    'intro.summary': `家庭是社會的本單位，華人尤為重視。可惜，近年家庭悲劇與日俱增，離婚率上升，單親家庭增多。本書《與家庭共舞－活出真情真愛》旨在從聖經探討神對家庭各方面的教導，幫助信徒建立合神心意的家庭生活。全書包括十課查經資料：愛、婚前關係、婚姻、夫妻的挑戰、婚姻中的性關係、夫妻的溝通、家庭生活、姦淫、不育及獨身。願你藉著本書得著智慧和力量，建立健全的基督化家庭，享受溫馨和諧的婚姻生活。`,
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
