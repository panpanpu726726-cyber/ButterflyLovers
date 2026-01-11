import React from 'react';
import { Language } from '../../types';
import { ChevronLeft, ArrowLeft, ChevronRight } from 'lucide-react';

interface StageProps {
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
          {pages.filter(p => p.path !== '/modern/stage').map(p => (
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

const Stage: React.FC<StageProps> = ({ language }) => {
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
        <img
          src="/assets/images/modern/stage/stage-overview.png"
          alt={language === 'en' ? 'Modern Stage and Cinema' : '现代舞台与影像'}
          className="w-full aspect-[21/9] object-cover"
        />
        <h2 className="font-serif text-4xl md:text-5xl italic mt-12 mb-6 text-ink">
          {language === 'en' ? 'Modern Stage & Cinema' : '现代舞台与影像表达'}
        </h2>
        <p className="text-ink-soft font-serif text-lg md:text-xl italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'Modern stage and cinema serve as vital continuations of the Liang–Zhu legacy, re-anchoring the ancient narrative within the aesthetics of the present. This module explores how contemporary choreography, avant-garde opera reform, and arthouse cinematic language reconstruct traditional storytelling, transforming the legend from a regional folk tale into a universal exploration of human desire and existential transcendence.' 
            : '现代舞台与影像不仅是梁祝遗产的延伸，更是将其古老叙事重新锚定于当代审美视野的关键。本单元探索当代编舞、先锋戏曲改革及艺术电影语言如何重构传统叙事，将这段传说从地域性的民间故事转化为关于人类欲望与存在超越性的普世探索。'}
        </p>
      </header>
      <section className="space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Cinematic Deconstruction' : '影像对叙事的解构'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Modern cinematic reinterpretations frequently diverge from conventional linear structures, choosing instead to deconstruct the "Three Years at the Academy" as a site of psychological awakening. By leveraging art-house aesthetics—where atmospheric shadows, deliberate pacing, and saturated color palettes replace literal dialogue—filmmakers emphasize the internal friction between individual identity and societal expectation. This cinematic language elevates the tragedy, allowing the metamorphosis to be perceived not as a supernatural event, but as a profound visual metaphor for the protagonist\'s internal liberation and the breaking of temporal boundaries.'
                : '现代影视改编常选择脱离传统的线性叙事结构，将“书院三载”解构为心理觉醒的场域。通过借鉴艺术电影美学——以氛围化的光影、考究的节奏与饱和的色彩替代直白的台词——创作者强调了个人身份与社会期待之间的内在摩擦。这种影像语言提升了悲剧的维度，使“化蝶”不再被仅仅视作超自然事件，而是成为了主角内心解放与时空界限突破的深邃视觉隐喻。'}
            </p>
          </div>
          <img
            src="/assets/images/modern/stage/stage01.png"
            alt={language === 'en' ? 'Cinematic Interpretation' : '影像化改编'}
            className="w-full aspect-square object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
          <img
            src="/assets/images/modern/stage/stage02.jpg"
            alt={language === 'en' ? 'Experimental Performance' : '实验舞台演绎'}
            className="w-full aspect-square object-cover"
          />
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Experimental Performance' : '实验剧场与舞剧'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'In the realm of experimental theatre and modern dance, the legend undergoes a radical physical translation where body language transcends the limitations of the spoken word. Contemporary dance companies often reinterpret the "Butterfly Metamorphosis" as a rigorous spiritual trial, utilizing abstract movement to map the transition from earthly constraint to ethereal freedom. This performative reform maintains the core emotional pulse of the original legend while inviting a global audience to experience the story through an embodied, wordless dialogue that honors the continuity of the Liang-Zhu spirit in the modern era. Ultimately, these modern adaptations do not replace the traditional canon but serve as a vital dialogue between generations, ensuring that the legacy remains a living, breathing part of global cultural discourse.'
                : '在实验剧场与现代舞领域，梁祝传说经历了一场彻底的肢体转译，肢体语言超越了言语的局限。当代舞团通常将“化蝶”重新解读为一场严峻的精神磨砺，利用抽象的动作轨迹刻画从尘世禁锢到灵性自由的演进。这种表演艺术的改革在保留原始传说情感脉动的同时，邀请全球观众通过具身化的无声对话，体验梁祝精神在现代语境下的永恒延续。归根底，这些现代改编并非对传统的取代，而是一场跨越世代的深度对话，确保了这份遗产在全求文化语境中始终保持鲜活。'}
            </p>
          </div>
        </div>
      </section>
      <SubPageNav language={language} />
    </div>
  );
};

export default Stage;
