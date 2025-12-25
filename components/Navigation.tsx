import React from 'react';
import { NavItem, Language, SectionId } from '../types';
import { Menu, X, Globe } from 'lucide-react';

interface NavigationProps {
  currentSection: SectionId;
  onNavigate: (id: SectionId) => void;
  language: Language;
  onToggleLanguage: () => void;
}

const navItems: NavItem[] = [
  { id: SectionId.HOME, label: { en: 'Home', zh: '首页' } },
  { id: SectionId.LEGEND, label: { en: 'The Legend', zh: '传说' } },
  { id: SectionId.CONTEXT, label: { en: 'History', zh: '历史背景' } },
  { id: SectionId.HERITAGE, label: { en: 'Heritage', zh: '非遗形式' } },
  { id: SectionId.CONTEMPORARY, label: { en: 'Modern', zh: '当代演绎' } },
  { id: SectionId.RESOURCES, label: { en: 'Resources', zh: '资料' } },
];

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate, language, onToggleLanguage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-rice-paper/95 backdrop-blur-sm border-b border-stone-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate(SectionId.HOME)}>
            <div className="w-8 h-8 bg-cinnabar rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-serif font-bold italic">LZ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-widest text-ink-black uppercase">
                {language === 'en' ? 'Butterfly Lovers' : '梁祝'}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-stone-500 uppercase">
                {language === 'en' ? 'Digital Archive' : '数字展馆'}
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as SectionId)}
                className={`font-sans text-sm tracking-widest uppercase transition-colors duration-300 ${
                  currentSection === item.id 
                    ? 'text-cinnabar font-bold border-b-2 border-cinnabar pb-1' 
                    : 'text-stone-500 hover:text-ink-black'
                }`}
              >
                {language === 'en' ? item.label.en : item.label.zh}
              </button>
            ))}
            
            <button 
              onClick={onToggleLanguage}
              className="flex items-center text-stone-600 hover:text-cinnabar transition-colors ml-4"
              aria-label="Toggle Language"
            >
              <Globe size={18} className="mr-1" />
              <span className="text-xs font-bold">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button 
              onClick={onToggleLanguage}
              className="flex items-center text-stone-600 hover:text-cinnabar transition-colors mr-4"
            >
              <span className="text-xs font-bold">{language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-ink-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-rice-paper border-b border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id as SectionId);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 text-base font-serif font-medium ${
                  currentSection === item.id 
                    ? 'text-cinnabar bg-stone-100' 
                    : 'text-stone-600 hover:text-ink-black hover:bg-stone-50'
                }`}
              >
                {language === 'en' ? item.label.en : item.label.zh}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;