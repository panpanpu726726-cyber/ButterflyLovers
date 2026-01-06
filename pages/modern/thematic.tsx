import React from 'react';
import { Language } from '../../types';
import { ChevronLeft, ArrowLeft, ChevronRight } from 'lucide-react';

interface ThematicProps {
  language: Language;
}

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

const SubPageNav = ({ language }: { language: Language }) => {
  const router = useRouter();
  const pages = [
    { path: '/modern/stage', label: { en: 'Stage & Cinema', zh: '现代舞台与影像' } },
    { path: '/modern/digital', label: { en: 'Digital & Interaction', zh: '数字媒介与交互' } },
    { path: '/modern/pop', label: { en: 'Pop Culture', zh: '流行文化与传播' } },
    { path: '/modern/thematic', label: { en: 'Thematic Translation', zh: '主题与现代视角' } },
  ] as const;

  return (
    <div className="mt-32 pt-12 border-t border-ink/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <button 
          onClick={() => router.push('/modern')}
          className="flex items-center gap-2 text-ink/60 hover:text-cinnabar transition-all font-serif text-sm uppercase tracking-widest border border-ink/10 px-6 py-3 bg-white"
        >
          <ArrowLeft size={16} /> {language === 'en' ? 'Back to Overview' : '返回当代演绎总览'}
        </button>
        <div className="flex flex-wrap justify-center gap-6">
          {pages.filter(p => p.path !== '/modern/thematic').map(p => (
            <button
              key={p.path}
              onClick={() => router.push(p.path)}
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink/30 hover:text-gold transition-colors flex items-center gap-2"
            >
              {language === 'en' ? p.label.en : p.label.zh} <ChevronRight size={12} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Thematic: React.FC<ThematicProps> = ({ language }) => {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto py-24 px-8">
      <button 
        onClick={() => router.push('/modern')}
        className="flex items-center gap-2 text-ink/40 hover:text-cinnabar transition-colors mb-12 font-serif text-sm uppercase tracking-widest group"
      >
        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {language === 'en' ? 'Back to Overview' : '返回总览'}
      </button>
      <header className="mb-20">
        <ImagePlaceholder aspect="aspect-[21/9]" />
        <h2 className="font-serif text-4xl md:text-5xl italic mt-12 mb-6 text-ink">
          {language === 'en' ? 'Thematic Translation' : '当代主题转化'}
        </h2>
      </header>
      <section className="space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Gender & Identity' : '性别意识与身份认同'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Modern interpretations of the Liang–Zhu narrative increasingly utilize contemporary thematic lenses to explore concepts of gender fluidity, personal autonomy, and the resistance against systemic socio-cultural constraints. Rather than viewing Zhu Yingtai’s cross-dressing as a mere modern projection, contemporary scholarship contextualizes it within a long-standing cultural dialogue concerning the boundaries of identity and the performance of gender. This thematic translation connects the ancient legend to modern academic discourse on agency, highlighting Yingtai’s pursuit of education as a profound act of self-determination. By re-examining the tragedy through the prism of intersectional identity, the legend is transformed from a static relic into a living site of negotiation, where the struggle for individual agency resonates with the ongoing global pursuit of social and personal liberation.'
                : '梁祝叙事的现代诠释日益运用当代视角来探讨性别流动性、个人自主权以及对社会文化体制性禁锢的抗争。当代学术界并未将祝英台的“女扮男装”视为某种现代思想的强加，而是将其置于关于身份界限与性别表演的深远文化对话中进行考察。这种主题上的转译将古老传说与现代关于“能动性”（Agency）的学术论述相连接，突显了祝英台对受教育权的追求本质上是一种深刻的自我决断行为。通过交叉性身份的棱镜重新审视这一悲剧，梁祝传说从一段静止的文化遗存转化为一个活态的意义协商场所，其中对个体能动性的追求与当代全球语境下对社会与个人解放的探索产生了深远共鸣。'}
            </p>
          </div>
          <ImagePlaceholder aspect="aspect-square" />
        </div>
      </section>
      <SubPageNav language={language} />
    </div>
  );
};

export default Thematic;