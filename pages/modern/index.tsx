import React from 'react';
import { Language } from '../../types';
import { Film, Monitor, Zap, Users, ArrowUpRight } from 'lucide-react';

interface OverviewProps {
  language: Language;
}

// Internal next/router mock for Vite compatibility
const useRouter = () => ({
  push: (url: string) => {
    window.history.pushState({}, '', url);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
});

const ImagePlaceholder = ({ aspect = "aspect-video", label = "IMAGE SLOT" }) => (
  <div className={`w-full ${aspect} md:min-h-[350px] bg-paper border border-ink/5 flex items-center justify-center relative overflow-hidden group`}>
    <div className="absolute inset-0 border-2 border-dashed border-ink/40 bg-zinc-200 flex items-center justify-center z-10">
      <span className="text-xl font-bold tracking-[0.4em] text-ink/50 uppercase">{label}</span>
    </div>
  </div>
);

const Overview: React.FC<OverviewProps> = ({ language }) => {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-8 py-24">
      <header className="mb-24 text-center">
        <span className="text-xs font-bold tracking-[0.4em] text-cinnabar/60 uppercase mb-4 block">Reimagining the Eternal</span>
        <h2 className={`text-ink mb-8 ${language === 'zh' ? 'font-calligraphy text-7xl' : 'font-serif text-5xl md:text-7xl italic font-medium'}`}>
          {language === 'en' ? 'Modern Interpretation' : '当代演绎 · 演绎视界'}
        </h2>
        <div className="w-24 h-[0.5px] bg-ink/20 mx-auto mb-10"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { 
            id: 'stage', 
            path: '/modern/stage',
            title: { en: 'Stage & Cinema', zh: '舞台与影像' }, 
            icon: <Film className="text-ink/40 group-hover:text-cinnabar transition-colors" size={32} strokeWidth={1} />, 
            desc: { en: 'Contemporary reconstructions.', zh: '当代叙事重构。' } 
          },
          { 
            id: 'digital', 
            path: '/modern/digital',
            title: { en: 'Digital Arts', zh: '数字艺术' }, 
            icon: <Monitor className="text-ink/40 group-hover:text-jade transition-colors" size={32} strokeWidth={1} />, 
            desc: { en: 'Interactive storytelling.', zh: '交互式叙事。' } 
          },
          { 
            id: 'pop', 
            path: '/modern/pop',
            title: { en: 'Pop Culture', zh: '流行文化与大众传播' }, 
            icon: <Zap className="text-ink/40 group-hover:text-gold transition-colors" size={32} strokeWidth={1} />, 
            desc: { en: 'Global mainstream symbols.', zh: '全球主流文化语境。' } 
          },
          { 
            id: 'thematic', 
            path: '/modern/thematic',
            title: { en: 'Thematic Translation', zh: '当代视角下的主题转译' }, 
            icon: <Users className="text-ink/40 group-hover:text-gold transition-colors" size={32} strokeWidth={1} />, 
            desc: { en: 'Sociological lenses.', zh: '社会学视角。' } 
          }
        ].map((module) => (
          <div 
            key={module.id}
            onClick={() => router.push(module.path)}
            className="group cursor-pointer bg-white border border-ink/5 p-8 shadow-sm hover:border-ink/20 transition-all flex flex-col"
          >
            <div className="mb-6">
              <ImagePlaceholder aspect="aspect-[3/2]" />
            </div>
            <div className="mb-8">{module.icon}</div>
            <h3 className="font-calligraphy text-4xl mb-6 text-ink">{language === 'en' ? module.title.en : module.title.zh}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose mb-8 flex-grow">
              {language === 'en' ? module.desc.en : module.desc.zh}
            </p>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold flex items-center gap-2 mt-auto">
              {language === 'en' ? 'Explore Unit' : '探索单元'} <ArrowUpRight size={12} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;