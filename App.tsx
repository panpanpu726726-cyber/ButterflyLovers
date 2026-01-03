import React, { useState, useEffect } from 'react';
import { Language, SectionId } from './types';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Legend from './pages/Legend';
import Context from './pages/Context';
import Heritage from './pages/Heritage';
import Contemporary from './pages/Contemporary';
import Resources from './pages/Resources';
import Section from './components/Section';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [currentSection, setCurrentSection] = useState<SectionId>(SectionId.HOME);

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const renderSection = () => {
    switch (currentSection) {
      case SectionId.HOME:
        return <Home language={language} onNavigate={setCurrentSection} />;
      case SectionId.LEGEND:
        return <Legend language={language} />;
      case SectionId.HISTORY:
        return <Context language={language} />;
      case SectionId.HERITAGE:
        return <Heritage language={language} />;
      case SectionId.MODERN:
        return <Contemporary language={language} />;
      case SectionId.RESOURCES:
        return <Resources language={language} />;
      default:
        return <Home language={language} onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-serif text-ink bg-paper selection:bg-cinnabar selection:text-white">
      <Navigation 
        currentSection={currentSection} 
        onNavigate={setCurrentSection} 
        language={language}
        onToggleLanguage={toggleLanguage}
      />
      
      {/* Reduced padding-top to 16 (64px) to match the slimmed-down Navigation bar */}
      <main className="flex-grow pt-16">
        <Section key={currentSection}>
          {renderSection()}
        </Section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default App;