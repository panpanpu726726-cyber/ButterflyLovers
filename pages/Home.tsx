import React from 'react';
import { Language, SectionId } from '../types';
import { motion } from 'framer-motion';

interface HomeProps {
  language: Language;
  onNavigate: (id: SectionId) => void;
}

const Home: React.FC<HomeProps> = ({ language, onNavigate }) => {
  // Navigation mapping for hotspots
  const navigationMap = [
    { id: SectionId.LEGEND, label: { en: 'The Legend', zh: '传说' }, x: '20.3%', y: '70.6%',},
    { id: SectionId.HISTORY, label: { en: 'History', zh: '背景' }, x: '39.4%', y: '67.7%',},
    { id: SectionId.HERITAGE, label: { en: 'Heritage', zh: '非遗' }, x: '58.2%', y: '58.3%',},
    { id: SectionId.MODERN, label: { en: 'Modern', zh: '演绎' }, x: '80.1%', y: '28.3%',},
    { id: SectionId.RESOURCES, label: { en: 'Resources', zh: '资料' }, x: '93%', y: '58%'},
  ];

  return (
    <div className="w-full relative min-h-[calc(100vh-64px)] bg-paper flex flex-col items-center pt-24 pb-12 overflow-hidden">
      {/* Background - Kept original logic */}
      <div className="absolute inset-0 z-0 opacity-50 grayscale brightness-110 contrast-125">
        <div className="w-full h-full bg-ink/10 flex items-center justify-center">
          <img src="/assets/images/home/home-map.png" alt="Interactive Navigation Map" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-transparent to-paper"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        
        {/* STEP 1: Text shifted to the top area (Visual Blank Area) */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className={`text-ink font-normal tracking-wide mb-4 leading-tight ${
            language === 'zh' ? 'font-calligraphy text-5xl md:text-7xl' : 'font-serif text-4xl md:text-6xl'
          }`}>
            {language === 'en' ? 'The Butterfly Lovers' : '梁山伯与祝英台'}
          </h1>
          <p className="font-serif italic text-base md:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'A timeless tale of love, tragedy, and metamorphosis.' 
              : '一段超越世纪的爱、悲剧与蜕变的永恒传说。'}
          </p>
        </motion.div>

        {/* STEP 2: Navigation Cover Placeholder Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative w-full aspect-[21/9]"
        >
          {/* Main Visual Image - No cropping/stretching */}
          <img 
            src="/assets/images/home/home-map.png" 
            alt="Interactive Navigation Cover" 
            className="w-full h-full object-contain opacity-100 " 
          />
        

          {/* STEP 3 & 4 & 5: Interactive Hotspots */}
          <div className="absolute inset-0">
            {navigationMap.map((spot) => (
              <div
                key={spot.id}
                onClick={() => onNavigate(spot.id)}
                className="absolute cursor-pointer group"
                style={{
                  left: spot.x,
                  top: spot.y,
                }}
              >
                {/* White Square */}
                <div className="
                    w-4 h-4
                    bg-paper
                    border-2 border-amber-800
                    transition-transform duration-300
                    group-hover:scale-125
                  "
                />

                {/* Label */}
                <div
                  className="
                    absolute top-6 left-1/2 -translate-x-1/2
                    opacity-0 group-hover:opacity-100
                    transition-all duration-300
                    pointer-events-none
                  "
                >
                  <span className="bg-paper/90 text-ink text-xs font-serif px-3 py-1 tracking-widest uppercase shadow">
                    {language === 'en' ? spot.label.en : spot.label.zh}
                  </span>
                </div>
              </div>
            ))}
          </div>
                    
          {/* Original Action Button - Preserved structure */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button 
              onClick={() => onNavigate(SectionId.LEGEND)}
              className="px-12 py-4 border border-ink/40 text-ink hover:bg-ink hover:text-paper transition-all duration-700 font-serif text-lg tracking-[0.2em] flex items-center group bg-paper/20 backdrop-blur-sm"
            >
              {language === 'en' ? 'ENTER EXHIBITION' : '进入展厅'}
              <span className="ml-4 group-hover:translate-x-1 transition-transform opacity-60">→</span>
            </button>
          </motion.div>
          
        </motion.div>

      </div>

      {/* Discrete Decoration - Preserved original elements */}
      <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none flex flex-col space-y-1">
        <span className="font-display text-4xl text-ink">缘</span>
        <span className="font-display text-4xl text-ink">梦</span>
      </div>
    </div>
  );
};

export default Home;
