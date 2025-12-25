import React from 'react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-ink-black text-stone-400 py-12 px-4 border-t-4 border-cinnabar">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-white font-serif text-xl tracking-widest mb-2">
            {language === 'en' ? 'THE BUTTERFLY LOVERS' : '梁山伯与祝英台'}
          </h3>
          <p className="text-sm font-sans text-stone-500">
            {language === 'en' 
              ? 'Preserving intangible cultural heritage through digital narrative.' 
              : '通过数字叙事保护非物质文化遗产。'}
          </p>
        </div>
        
        <div className="flex space-x-6 text-sm">
           <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;