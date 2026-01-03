import React from 'react';
import { Language, SectionId } from '../types';
import { motion } from 'framer-motion';

interface HomeProps {
  language: Language;
  onNavigate: (id: SectionId) => void;
}

const Home: React.FC<HomeProps> = ({ language, onNavigate }) => {
  return (
    <div className="w-full relative min-h-[calc(100vh-64px)] bg-paper flex flex-col items-center justify-center overflow-hidden">
      {/* Background - Soft Ink Texture Placeholder */}
      <div className="absolute inset-0 z-0 opacity-10 grayscale brightness-110 contrast-125">
        <div className="w-full h-full bg-ink/10 flex items-center justify-center">
          <img src="/images/placeholder.jpg" alt="placeholder" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-transparent to-paper"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-4xl px-6 flex flex-col items-center text-center ink-reveal"
      >
        {/* Main Title - Using display font for Chinese and serif for English */}
        <h1 className={`text-ink font-normal tracking-wide mb-8 leading-tight ${
          language === 'zh' ? 'font-display text-6xl md:text-8xl' : 'font-serif text-5xl md:text-7xl'
        }`}>
          {language === 'en' ? 'The Butterfly Lovers' : '梁山伯与祝英台'}
        </h1>

        {/* Description Text - Added based on request */}
        <div className="flex flex-col items-center space-y-4 mb-12">
          <p className="font-serif italic text-lg md:text-2xl text-ink/80 max-w-2xl leading-relaxed">
            {language === 'en' 
              ? 'A timeless tale of love, tragedy, and metamorphosis that transcends centuries.' 
              : '一段超越世纪的爱、悲剧与蜕变的永恒传说。'}
          </p>
          <span className="font-serif font-bold text-xs md:text-sm tracking-[0.3em] text-cinnabar uppercase">
            {language === 'en' 
              ? 'CHINESE INTANGIBLE CULTURAL HERITAGE' 
              : '中国非物质文化遗产'}
          </span>
        </div>

        <button 
          onClick={() => onNavigate(SectionId.LEGEND)}
          className="px-12 py-4 border border-ink/40 text-ink hover:bg-ink hover:text-paper transition-all duration-700 font-serif text-xl tracking-[0.2em] flex items-center group bg-paper/20 backdrop-blur-sm"
        >
          {language === 'en' ? 'ENTER EXHIBITION' : '进入展厅'}
          <span className="ml-4 group-hover:translate-x-1 transition-transform opacity-60">→</span>
        </button>
      </motion.div>

      {/* Discrete Decoration */}
      <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none flex flex-col space-y-1">
        <span className="font-display text-4xl text-ink">缘</span>
        <span className="font-display text-4xl text-ink">梦</span>
      </div>
    </div>
  );
};

export default Home;