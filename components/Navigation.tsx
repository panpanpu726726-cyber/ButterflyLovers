import React from 'react';
import { NavItem, Language, SectionId } from '../types';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentSection: SectionId;
  onNavigate: (id: SectionId) => void;
  language: Language;
  onToggleLanguage: () => void;
}

const navItems: NavItem[] = [
  { id: SectionId.HOME, label: { en: 'HOME', zh: '首页' } },
  { id: SectionId.LEGEND, label: { en: 'THE LEGEND', zh: '传说' } },
  { id: SectionId.HISTORY, label: { en: 'HISTORY', zh: '背景' } },
  { id: SectionId.HERITAGE, label: { en: 'HERITAGE', zh: '非遗' } },
  { id: SectionId.MODERN, label: { en: 'MODERN', zh: '演绎' } },
  { id: SectionId.RESOURCES, label: { en: 'RESOURCES', zh: '资料' } },
];

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate, language, onToggleLanguage }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-paper/95 backdrop-blur-sm border-b border-ink/5 h-20 transition-all duration-500">
      <div className="max-w-[1400px] mx-auto px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo Section - Matching reference image */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => onNavigate(SectionId.HOME)}
          >
            <div className="w-10 h-10 bg-cinnabar rounded-full flex items-center justify-center mr-3 shadow-sm">
              <span className="text-white font-serif font-bold text-lg italic">LZ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-wider text-ink leading-tight uppercase">
                {language === 'en' ? 'BUTTERFLY LOVERS' : '梁山伯与祝英台'}
              </span>
              <span className="text-[10px] tracking-[0.1em] text-ink/50 font-bold uppercase leading-none">
                {language === 'en' ? 'DIGITAL ARCHIVE' : '数字化展馆'}
              </span>
            </div>
          </div>

          {/* Desktop/Visible Navigation - Direct access as requested */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2 md:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`transition-all duration-300 relative py-2 px-1 ${
                    language === 'zh' 
                      ? 'font-calligraphy text-2xl md:text-3xl' 
                      : 'font-serif text-[11px] md:text-sm tracking-[0.15em]'
                  } ${
                    currentSection === item.id 
                      ? 'text-ink font-bold' 
                      : 'text-ink/60 hover:text-ink'
                  }`}
                >
                  {language === 'en' ? item.label.en : item.label.zh}
                  {currentSection === item.id && (
                    <motion.div 
                      layoutId="nav-underline-active"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-cinnabar"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
            
            {/* Language Switcher - Matching reference image */}
            <div className="h-6 w-[1px] bg-ink/10 mx-6 hidden md:block"></div>
            
            <button 
              onClick={onToggleLanguage}
              className="flex items-center text-ink hover:text-cinnabar transition-colors px-2 py-1 text-sm font-serif font-bold tracking-widest"
              title="Switch Language"
            >
              <Globe size={18} className="mr-2 opacity-80" />
              <span className="uppercase">{language}</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;