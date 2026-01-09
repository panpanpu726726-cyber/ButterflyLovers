import React from 'react';
import { Language } from '../../types';
import { ChevronLeft, ArrowLeft, ChevronRight } from 'lucide-react';

interface PopProps {
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
          {pages.filter(p => p.path !== '/modern/pop').map(p => (
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

const Pop: React.FC<PopProps> = ({ language }) => {
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
          {language === 'en' ? 'Pop Culture' : '流行文化与社会传播'}
        </h2>
      </header>
      <section className="space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Visual Iconography' : '视觉符号的大众化'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'The Liang–Zhu legend serves as a foundational cultural archetype in modern mass media, transcending its origins to become a versatile symbol of romantic resistance and identity. In the contemporary visual landscape, the metamorphosis into butterflies has evolved into a global iconographic shorthand for spiritual liberation and eternal devotion, frequently appearing across animation character designs, stylized illustrations, and sophisticated advertising campaigns. This transformation focuses less on the linear repetition of the plot and more on the potent symbolism of the butterfly motif and the nuanced complexities of gender disguise. By distilling the narrative into these distinct visual markers, popular culture ensures the legend’s continued vitality, allowing it to function as a bridge between historical heritage and the modern collective imagination, thereby sustaining cultural memory through constant re-envisioning.'
                : '梁祝传说在现代大众传媒中已演化为一个基础性的文化原型，超越了其叙事起源，成为浪漫抗争与身份认知的多维象征。在当代的视觉语境下，“化蝶”意象已蜕变为一种全球性的视觉符号，代表着精神的解放与永恒的忠贞，广泛出现于动漫角色设计、风格化插画以及高端商业传播媒介中。这种转化不再局限于对情节的线性复述，而是转而聚焦于“蝶”之意象的隐喻张力，以及“女扮男装”所蕴含的身份复杂性。通过将叙事萃取为这些鲜明的视觉标识，流行文化确保了这一古老传说的持久活力，使其成为连接历史遗产与现代集体想象的桥梁，在不断的视觉重构中维系着深层的文化记忆。'}
            </p>
          </div>
          <ImagePlaceholder aspect="aspect-[3/2]" />
        </div>
      </section>
      <SubPageNav language={language} />
    </div>
  );
};

export default Pop;