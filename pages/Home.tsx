import React from 'react';
import { Language, SectionId } from '../types';
import { motion } from 'framer-motion';

interface HomeProps {
  language: Language;
  onNavigate: (id: SectionId) => void;
}

const Home: React.FC<HomeProps> = ({ language, onNavigate }) => {
  // Navigation mapping for hotspots
  const hotspots = [
    { id: SectionId.LEGEND, label: { en: 'The Legend', zh: '传世佳话' } },
    { id: SectionId.HISTORY, label: { en: 'History', zh: '历史背景' } },
    { id: SectionId.HERITAGE, label: { en: 'Heritage', zh: '非遗传承' } },
    { id: SectionId.MODERN, label: { en: 'Modern', zh: '当代演绎' } },
    { id: SectionId.RESOURCES, label: { en: 'Resources', zh: '权威资料' } },
  ];

  return (
    <div className="w-full relative min-h-[calc(100vh-64px)] bg-paper flex flex-col items-center justify-start pt-24 overflow-hidden">
      {/* Background - Soft Ink Texture Placeholder */}
      <div className="absolute inset-0 z-0 opacity-10 grayscale brightness-110 contrast-125">
        <div className="w-full h-full bg-ink/10 flex items-center justify-center">
          <img src="/images/placeholder.jpg" alt="background placeholder" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-transparent to-paper"></div>
      </div>

      {/* STEP 1: Main Title Group - Shifted Upwards to leave room for Nav Image */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 max-w-4xl px-6 flex flex-col items-center text-center ink-reveal mb-12 -translate-y-4"
      >
        <h1 className={`text-ink font-normal tracking-wide mb-6 leading-tight ${
          language === 'zh' ? 'font-calligraphy text-6xl md:text-7xl' : 'font-serif text-5xl md:text-6xl'
        }`}>
          {language === 'en' ? 'The Butterfly Lovers' : '梁山伯与祝英台'}
        </h1>

        <div className="flex flex-col items-center space-y-3">
          <p className="font-serif italic text-base md:text-xl text-ink/80 max-w-2xl leading-relaxed">
            {language === 'en' 
              ? 'A timeless tale of love, tragedy, and metamorphosis that transcends centuries.' 
              : '一段超越世纪的爱、悲剧与蜕变的永恒传说。'}
          </p>
          <span className="font-serif font-bold text-[10px] md:text-xs tracking-[0.3em] text-cinnabar uppercase">
            {language === 'en' 
              ? 'CHINESE INTANGIBLE CULTURAL HERITAGE' 
              : '中国非物质文化遗产'}
          </span>
        </div>
      </motion.div>

      {/* STEP 2 & 3: Navigation Cover Image with Hotspots */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.5 }}
        className="relative z-10 w-full max-w-6xl px-8 mb-16"
      >
        <div className="relative aspect-[21/9] w-full bg-white/40 border border-ink/5 shadow-sm overflow-hidden group/main">
          {/* Base Navigation Image */}
          <img 
            src="/images/placeholder.jpg" 
            alt="Navigation Cover" 
            className="w-full h-full object-cover opacity-30 grayscale transition-opacity duration-1000 group-hover/main:opacity-40"
          />
          
          {/* Hotspots Overlay Layer */}
          <div className="absolute inset-0 grid grid-cols-5 h-full w-full">
            {hotspots.map((spot) => (
              <div 
                key={spot.id}
                onClick={() => onNavigate(spot.id)}
                className="relative h-full w-full group cursor-pointer border-x border-transparent hover:border-ink/5 transition-all duration-500"
              >
                {/* STEP 4: Hover Interaction Mask */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 group-hover:backdrop-brightness-110 transition-all duration-700"></div>
                
                {/* Visual indicator (line) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-cinnabar scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>

                {/* Hover Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className={`opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-700 text-ink tracking-[0.3em] text-center uppercase ${
                    language === 'zh' ? 'font-calligraphy text-xl' : 'font-serif text-[10px] font-bold'
                  }`}>
                    {language === 'en' ? spot.label.en : spot.label.zh}
                  </span>
                  <div className="w-4 h-[1px] bg-cinnabar/40 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Corners */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-ink/10 pointer-events-none"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-ink/10 pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-ink/10 pointer-events-none"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-ink/10 pointer-events-none"></div>
        </div>
      </motion.div>

      {/* Main Action Button - Kept but Integrated */}
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={() => onNavigate(SectionId.LEGEND)}
        className="px-12 py-3 border border-ink/20 text-ink/60 hover:border-cinnabar hover:text-cinnabar transition-all duration-700 font-serif text-sm tracking-[0.3em] flex items-center group relative z-10 mb-20"
      >
        {language === 'en' ? 'OVERVIEW' : '全篇概览'}
        <span className="ml-4 group-hover:translate-x-1 transition-transform opacity-40">→</span>
      </motion.button>

      {/* Discrete Decoration */}
      <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none flex flex-col space-y-1">
        <span className="font-display text-4xl text-ink">缘</span>
        <span className="font-display text-4xl text-ink">梦</span>
      </div>
    </div>
  );
};

export default Home;
