/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { BookOpenIcon, MusicalNoteIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';
import { TopicContext } from '../services/gemini';

interface ResourcesSectionProps {
  topic: TopicContext;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ topic }) => {
  const { t } = useLanguage();
  const [showBookExtract, setShowBookExtract] = useState(false);
  const [showAudioTestimony, setShowAudioTestimony] = useState(false);

  const bookExtracts: Record<string, string> = {
    insecurity: "You are fearfully and wonderfully made. Your worth is not determined by the world's standards, but by the One who created you. In moments of doubt, remember that God knew you before you were born and has a unique purpose for your life.",
    loneliness: "Even in your loneliest moments, you are never truly alone. God promises to never leave you nor forsake you. His presence is constant, unchanging, and ever-faithful. Open your heart to feel His companionship.",
    stress: "Come to Me, all you who are weary and burdened, and I will give you rest. When the weight of the world feels too heavy, cast your cares upon the Lord, for He cares for you deeply.",
    anxiety: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. His peace, which transcends all understanding, will guard your heart and mind.",
    guilt: "There is now no condemnation for those who are in Christ Jesus. If we confess our sins, He is faithful and just to forgive us and cleanse us from all unrighteousness. Walk in the freedom of His forgiveness.",
    anger: "Be quick to listen, slow to speak, and slow to become angry. In your anger, do not sin. Let go of bitterness and embrace the peace that comes from forgiveness and understanding.",
    depression: "The Lord is close to the brokenhearted and saves those who are crushed in spirit. Even in the darkest valleys, His light shines. Hold on to hope, for joy comes in the morning.",
    trauma: "He heals the brokenhearted and binds up their wounds. God is a refuge and strength, an ever-present help in trouble. His healing touch can restore what has been broken.",
    exhaustion: "Those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. Rest in His strength.",
    sorrow: "Weeping may stay for the night, but rejoicing comes in the morning. God will wipe away every tear. Your sorrow will be turned into joy, for His love endures forever."
  };

  const audioTestimonies: Record<string, string> = {
    insecurity: "Sarah shares: 'I spent years trying to prove my worth through achievements. When I discovered my identity in Christ, everything changed. I learned that I am loved unconditionally, not for what I do, but for who I am in Him.'",
    loneliness: "John testifies: 'After losing my family, loneliness consumed me. Through prayer and scripture, I found that God's presence filled the emptiness. He became my closest companion, always listening, always caring.'",
    stress: "Maria's story: 'The pressure of life was crushing me. I learned to surrender my worries to God each morning. His peace replaced my stress, and I discovered rest even in the midst of chaos.'",
    anxiety: "David shares: 'Panic attacks controlled my life until I found peace in God's Word. Now, when anxiety rises, I remember His promises. His perfect love casts out fear.'",
    guilt: "Rachel testifies: 'Guilt from my past kept me in chains. When I truly understood God's forgiveness, I was set free. He doesn't just forgive—He forgets and makes us new.'",
    anger: "Michael's journey: 'Anger destroyed my relationships. Through God's healing, I learned to forgive and let go. Now peace fills the space where rage once lived.'",
    depression: "Lisa shares: 'Depression's darkness felt endless. God's Word became my light. Slowly, hope returned. He lifted me from the pit and set my feet on solid ground.'",
    trauma: "James testifies: 'The pain of trauma haunted me for years. God's gentle healing touch restored my broken heart. He turned my mourning into dancing.'",
    exhaustion: "Grace's story: 'Burnout left me empty. I learned to rest in God's presence. He renewed my strength and taught me that my worth isn't in my productivity.'",
    sorrow: "Peter shares: 'Grief overwhelmed me after loss. God walked with me through the valley. His comfort sustained me, and joy gradually returned to my life.'"
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Book Extract Card */}
        <button
          onClick={() => setShowBookExtract(true)}
          className="group bg-white border-2 border-orange-300 hover:border-orange-500 rounded-xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
              <BookOpenIcon className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-orange-900 mb-1 group-hover:text-orange-600 transition-colors">
                {t('resources.bookTitle')}
              </h3>
              <p className="text-sm text-orange-700">
                {t('resources.bookDesc')}
              </p>
            </div>
          </div>
        </button>

        {/* Audio Testimony Card */}
        <button
          onClick={() => setShowAudioTestimony(true)}
          className="group bg-white border-2 border-orange-300 hover:border-orange-500 rounded-xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
              <MusicalNoteIcon className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-orange-900 mb-1 group-hover:text-orange-600 transition-colors">
                {t('resources.audioTitle')}
              </h3>
              <p className="text-sm text-orange-700">
                {t('resources.audioDesc')}
              </p>
            </div>
          </div>
        </button>
      </div>

      {/* Book Extract Modal */}
      {showBookExtract && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookOpenIcon className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-bold text-orange-900">{t('resources.bookTitle')}</h2>
              </div>
              <button
                onClick={() => setShowBookExtract(false)}
                className="p-2 hover:bg-orange-100 rounded-full transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-orange-700" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold text-orange-950 mb-4">{t(`topic.${topic.id}`)}</h3>
              <div className="prose prose-orange max-w-none">
                <p className="text-orange-800 leading-relaxed text-base whitespace-pre-line">
                  {bookExtracts[topic.id] || bookExtracts.loneliness}
                </p>
              </div>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-sm text-orange-700 italic">
                  📖 {t(`verses.${topic.id}`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Audio Testimony Modal */}
      {showAudioTestimony && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MusicalNoteIcon className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-bold text-orange-900">{t('resources.audioTitle')}</h2>
              </div>
              <button
                onClick={() => setShowAudioTestimony(false)}
                className="p-2 hover:bg-orange-100 rounded-full transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-orange-700" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold text-orange-950 mb-4">{t(`topic.${topic.id}`)}</h3>
              <div className="mb-6">
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl p-6 border-2 border-orange-300">
                  <p className="text-orange-900 leading-relaxed text-base">
                    {audioTestimonies[topic.id] || audioTestimonies.loneliness}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-orange-600 italic">
                  🎵 {t('resources.audioNote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
