import React from 'react';
import { Language } from '../types';

interface FooterProps { language: Language; }

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-paper text-ink/40 py-12 px-8 border-t border-ink/10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <div className="w-10 h-10 bg-ink flex items-center justify-center rounded-sm mb-4 md:mb-0">
            <span className="text-paper font-display text-xl">梁</span>
          </div>
          <div>
            <h3 className="text-ink/80 font-display text-xl tracking-widest leading-none">
              {language === 'en' ? 'The Butterfly Lovers' : '梁山伯与祝英台'}
            </h3>
            <p className="text-[11px] font-serif text-ink/30 mt-1">
              {language === 'en' 
                ? 'Digital Archive for Oriental Cultural Heritage' 
                : '数字化传承东方文化遗产'}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-1">
           <span className="text-[8px] tracking-[0.25em] uppercase font-bold text-ink/20">© {new Date().getFullYear()} Digital Cultural Archive</span>
           <span className="text-sm font-serif text-ink/40 tracking-tighter italic">情不知所起，一往而深</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;