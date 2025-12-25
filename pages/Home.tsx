import React from 'react';
import { Language, SectionId } from '../types';
import { ArrowRight, Feather } from 'lucide-react';
import { motion } from 'framer-motion';

interface HomeProps {
  language: Language;
  onNavigate: (id: SectionId) => void;
}

const Home: React.FC<HomeProps> = ({ language, onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/liangzhu5/1920/1080?grayscale&blur=2" 
            alt="Traditional Chinese Landscape" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rice-paper/80 via-rice-paper/40 to-rice-paper"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-cinnabar/10 rounded-full flex items-center justify-center text-cinnabar border border-cinnabar/30">
               <Feather size={32} />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink-black mb-6 tracking-tight">
              {language === 'en' ? 'The Butterfly Lovers' : '梁山伯与祝英台'}
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'A timeless tale of love, tragedy, and metamorphosis that transcends centuries.'
                : '一段超越世纪的爱、悲剧与蜕变的永恒传说。'}
            </p>
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-cinnabar mb-12">
              {language === 'en' ? 'Chinese Intangible Cultural Heritage' : '中国非物质文化遗产'}
            </p>
            
            <button 
              onClick={() => onNavigate(SectionId.LEGEND)}
              className="group inline-flex items-center px-8 py-4 border border-ink-black text-ink-black hover:bg-ink-black hover:text-white transition-all duration-300 font-sans tracking-widest text-sm uppercase"
            >
              {language === 'en' ? 'Enter Exhibition' : '进入展馆'}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Intro Brief */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="border-t border-stone-300 pt-6">
              <h3 className="font-serif text-xl mb-4 text-cinnabar">
                 {language === 'en' ? 'The Story' : '故事'}
              </h3>
              <p className="text-stone-600 leading-relaxed font-sans">
                {language === 'en' 
                  ? 'Often called the "Romeo and Juliet of the East", this legend tells of two scholars whose love was forbidden by societal norms.'
                  : '这一传说常被称为“东方的罗密欧与朱丽叶”，讲述了两位书生因社会礼教而受阻的凄美爱情。'}
              </p>
            </div>
            <div className="border-t border-stone-300 pt-6">
              <h3 className="font-serif text-xl mb-4 text-cinnabar">
                 {language === 'en' ? 'The Culture' : '文化'}
              </h3>
              <p className="text-stone-600 leading-relaxed font-sans">
                {language === 'en' 
                  ? 'Deeply rooted in Chinese tradition, the story reflects ancient views on gender, education, and marriage during the Jin Dynasty.'
                  : '该故事深深植根于中国传统，反映了晋代关于性别、教育和婚姻的古老观念。'}
              </p>
            </div>
            <div className="border-t border-stone-300 pt-6">
              <h3 className="font-serif text-xl mb-4 text-cinnabar">
                 {language === 'en' ? 'The Legacy' : '传承'}
              </h3>
              <p className="text-stone-600 leading-relaxed font-sans">
                {language === 'en' 
                  ? 'Celebrated through Yue Opera, the Violin Concerto, and festivals, it remains a vital part of global cultural history.'
                  : '通过越剧、小提琴协奏曲和节日庆典，这一传说依然是全球文化历史的重要组成部分。'}
              </p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;