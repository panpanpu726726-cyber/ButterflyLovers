import React, { useState, useEffect } from 'react';
import { Language, SectionId } from '../types';
import { Film, Monitor, Zap, ChevronRight, ArrowUpRight, ArrowLeft, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContemporaryProps {
  language: Language;
  onNavigate?: (id: SectionId) => void;
}

type SubPageId = 'overview' | 'stage' | 'digital' | 'pop' | 'thematic';

const Contemporary: React.FC<ContemporaryProps> = ({ language, onNavigate }) => {
  const [activeSubPage, setActiveSubPage] = useState<SubPageId>('overview');

  // Ensure scroll to top when changing internal views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSubPage]);

  // Image Placeholder Component for structural consistency
  const ImagePlaceholder = ({ aspect = "aspect-video" }) => (
    <div className={`w-full ${aspect} bg-ink/5 border border-ink/5 flex items-center justify-center relative overflow-hidden group`}>
      <img src="/images/placeholder.jpg" alt="placeholder" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
    </div>
  );

  // Sub-page Bottom Navigation
  const SubPageNav = ({ current }: { current: SubPageId }) => {
    const pages = [
      { id: 'stage', label: { en: 'Stage & Cinema', zh: '现代舞台与影像' } },
      { id: 'digital', label: { en: 'Digital & Interaction', zh: '数字媒介与交互' } },
      { id: 'pop', label: { en: 'Pop Culture', zh: '流行文化与传播' } },
      { id: 'thematic', label: { en: 'Thematic Translation', zh: '主题与现代视角' } },
    ];

    return (
      <div className="mt-32 pt-12 border-t border-ink/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <button 
            onClick={() => setActiveSubPage('overview')}
            className="flex items-center gap-2 text-ink/60 hover:text-cinnabar transition-all font-serif text-sm uppercase tracking-widest border border-ink/10 px-6 py-3 bg-white"
          >
            <ArrowLeft size={16} /> {language === 'en' ? 'Back to Overview' : '返回当代演绎总览'}
          </button>
          
          <div className="flex flex-wrap justify-center gap-6">
            {pages.filter(p => p.id !== current).map(p => (
              <button
                key={p.id}
                onClick={() => setActiveSubPage(p.id as SubPageId)}
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

  // --- Sub-Pages Implementation ---

  const StageCinemaPage = () => (
    <div className="max-w-5xl mx-auto py-24 px-8">
      <header className="mb-20">
        <ImagePlaceholder aspect="aspect-[21/9]" />
        <h2 className="font-serif text-4xl md:text-5xl italic mt-12 mb-6 text-ink">
          {language === 'en' ? 'Modern Stage & Cinema' : '现代舞台与影像表达'}
        </h2>
        <p className="text-ink-soft font-serif text-lg md:text-xl italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'Exploring how traditional narratives are reconstructed through modern choreography and cinematic language.' 
            : '探索传统叙事如何通过现代舞台语言与影像技术完成时空重构。'}
        </p>
      </header>

      <section className="space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Cinematic Deconstruction' : '影像对叙事的解构'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Modern film adaptations move away from linear storytelling, focusing on the psychological tension between the protagonists. Visual symbolism—especially the use of color and shadow—replaces literal explanations.'
                : '现代影视改编逐渐脱离线性叙事，转向对主角内心张力的挖掘。色彩与光影的符号化运用取代了直白的台词，使经典悲剧具备了现代电影的深邃感。'}
            </p>
          </div>
          <ImagePlaceholder aspect="aspect-square" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
          <ImagePlaceholder aspect="aspect-square" />
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Experimental Performance' : '实验剧场与舞剧'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Contemporary dance companies interpret "Metamorphosis" as a spiritual awakening. Body language transcends spoken word, turning the ancient legend into a universal expression of liberation.'
                : '当代舞团将“化蝶”视为一种精神觉醒。肢体语言超越了言语的界限，将古老传说转化为一种关于解放与重生的普世表达。'}
            </p>
          </div>
        </div>
      </section>
      <SubPageNav current="stage" />
    </div>
  );

  const DigitalInteractionPage = () => (
    <div className="max-w-5xl mx-auto py-24 px-8">
      <header className="mb-20">
        <ImagePlaceholder aspect="aspect-[21/9]" />
        <h2 className="font-serif text-4xl md:text-5xl italic mt-12 mb-6 text-ink">
          {language === 'en' ? 'Digital Arts & Interaction' : '数字媒介与交互艺术'}
        </h2>
        <p className="text-ink-soft font-serif text-lg md:text-xl italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'Redefining the relationship between the viewer and the legend through immersive technology.' 
            : '通过沉浸式技术重新定义观众与传说之间的交互关系。'}
        </p>
      </header>

      <section className="space-y-32">
        <div className="p-12 bg-ink text-paper border border-white/10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-[10px] font-bold tracking-[0.4em] text-gold uppercase mb-4 block">Future Practice</span>
              <h3 className="font-serif text-3xl italic mb-6">{language === 'en' ? 'UE Liang-Zhu Project' : 'UE 梁祝交互实验项目'}</h3>
              <p className="text-paper/60 font-serif text-base leading-loose">
                {language === 'en'
                  ? 'A conceptual exploration using real-time engines to create a responsive digital garden. This project focuses on spatial narrative and first-person agency in traditional heritage preservation.'
                  : '基于实时引擎构建的感应式数字园林。该项目聚焦于传统遗产保护中的空间叙事与第一人称参与感，是文化记忆数字化转译的实验性探索。'}
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <ImagePlaceholder aspect="aspect-square" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ImagePlaceholder aspect="aspect-video" />
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Immersive Participation' : '沉浸式参与叙事'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Digital exhibitions use sensors to bridge the gap between myth and reality. The audience no longer watches the metamorphosis; they influence its movement through presence.'
                : '数字展览通过感应技术架起了神话与现实的桥。观众不再仅仅是旁观者，他们的介入直接影响着数字蝴蝶的飞舞轨迹。'}
            </p>
          </div>
        </div>
      </section>
      <SubPageNav current="digital" />
    </div>
  );

  const PopCulturePage = () => (
    <div className="max-w-5xl mx-auto py-24 px-8">
      <header className="mb-20">
        <ImagePlaceholder aspect="aspect-[21/9]" />
        <h2 className="font-serif text-4xl md:text-5xl italic mt-12 mb-6 text-ink">
          {language === 'en' ? 'Pop Culture & Icons' : '流行文化与大众传播'}
        </h2>
        <p className="text-ink-soft font-serif text-lg md:text-xl italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'How the legend enters the global mainstream through animation, music, and daily symbols.' 
            : '梁祝如何通过动画、流行音乐与日常符号进入全球主流文化语境。'}
        </p>
      </header>

      <section className="space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Visual Iconography' : '视觉符号的大众化'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'From modern animation character designs to commercial brand collaborations, the Butterfly Lovers have become a stable visual icon for romantic idealism in the Asian cultural market.'
                : '从现代动漫角色设计到商业跨界合作，“梁祝”已成为亚洲文化市场中代表浪漫理想主义的稳态视觉符号。'}
            </p>
          </div>
          <ImagePlaceholder aspect="aspect-video" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
          <ImagePlaceholder aspect="aspect-video" />
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Musical Remakes' : '流行音乐的再创作'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Pop musicians integrate Yue Opera arias into modern ballads, creating a bridge between traditional heritage and contemporary listeners.'
                : '流行音乐人将越剧唱腔融入现代曲风，在传统文化遗产与当代听众之间搭建了一座审美之桥。'}
            </p>
          </div>
        </div>
      </section>
      <SubPageNav current="pop" />
    </div>
  );

  const ThematicPage = () => (
    <div className="max-w-5xl mx-auto py-24 px-8">
      <header className="mb-20">
        <ImagePlaceholder aspect="aspect-[21/9]" />
        <h2 className="font-serif text-4xl md:text-5xl italic mt-12 mb-6 text-ink">
          {language === 'en' ? 'Thematic Re-interpretation' : '当代视角下的主题转译'}
        </h2>
        <p className="text-ink-soft font-serif text-lg md:text-xl italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'Analyzing the eternal relevance of Liang-Zhu through modern sociological and philosophical lenses.' 
            : '通过现代社会学与哲学视角，剖析梁祝传说在当代的永恒启示。'}
        </p>
      </header>

      <section className="space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Gender & Identity' : '性别意识与身份认同'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Modern academic discourse re-examines Zhu Yingtais cross-dressing as an early pursuit of gender equality and intellectual freedom, resonating deeply with modern identity politics.'
                : '现代学术语境重新审视祝英台的女扮男装，将其视为对性别平等与精神自由的早期追求，与当代的身份政治产生了深刻共鸣。'}
            </p>
          </div>
          <ImagePlaceholder aspect="aspect-square" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
          <ImagePlaceholder aspect="aspect-square" />
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Individual vs. Structure' : '个体意志与社会结构'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'The tragedy is no longer viewed as purely romantic but as a critique of structural constraints. It serves as a fertile ground for discussing individual agency within rigid systems.'
                : '这段悲剧不再仅仅被视为爱情故事，而是被解读为对结构性压迫的批判。它为探讨个体在僵化体制下的能动性提供了丰沃的土壤。'}
            </p>
          </div>
        </div>
      </section>
      <SubPageNav current="thematic" />
    </div>
  );

  // --- Main Render Logic ---

  return (
    <div className="w-full bg-paper min-h-screen">
      <AnimatePresence mode="wait">
        {activeSubPage === 'overview' ? (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-6xl mx-auto py-24 px-8"
          >
            {/* OVERVIEW HERO */}
            <header className="mb-24">
              <ImagePlaceholder aspect="aspect-[21/9]" />
              <div className="mt-12 text-center">
                <span className="text-[10px] font-bold tracking-[0.4em] text-cinnabar uppercase mb-4 block">Exhibition Portal</span>
                <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight italic font-medium">
                  {language === 'en' ? 'Contemporary Interpretations' : '当代演绎'}
                </h2>
                <div className="w-16 h-[1px] bg-ink mx-auto mb-10"></div>
                <p className="text-ink-soft font-serif text-xl max-w-2xl mx-auto leading-relaxed opacity-70">
                  {language === 'en' 
                    ? 'Liang-Zhu is a living cultural motif, constantly reactivated through contemporary re-interpretation and digital translation.' 
                    : '梁祝并非停留在历史中的故事，而是一个持续被激活的文化母题。在当代语境下，它在不同媒介中完成了深刻的文化转译。'}
                </p>
              </div>
            </header>

            {/* MODULE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
              {[
                { id: 'stage', title: { en: 'Stage & Cinema', zh: '现代舞台与影像表达' }, icon: <Film size={20} />, desc: { en: 'Drama, dance, and film reconstructions.', zh: '聚焦戏曲、舞剧及影视作品对经典叙事的再解读。' } },
                { id: 'digital', title: { en: 'Digital & Interaction', zh: '数字媒介与交互艺术' }, icon: <Monitor size={20} />, desc: { en: 'VR, immersive art, and interactive projects.', zh: '探索沉浸式技术如何改变观众与传说的叙事关系。' } },
                { id: 'pop', title: { en: 'Pop Culture', zh: '流行文化与传播' }, icon: <Zap size={20} />, desc: { en: 'Animation, music, and daily iconography.', zh: '梁祝如何进入大众流行文化与全球视觉语境。' } },
                { id: 'thematic', title: { en: 'Thematic Translation', zh: '当代视角下的主题转译' }, icon: <Users size={20} />, desc: { en: 'Modern gender and social perspectives.', zh: '从性别意识、个体意志等现代维度重构传说核心。' } },
              ].map((module) => (
                <div 
                  key={module.id}
                  onClick={() => setActiveSubPage(module.id as SubPageId)}
                  className="group cursor-pointer bg-white border border-ink/5 p-8 hover:border-ink/20 transition-all flex flex-col items-center text-center"
                >
                  <div className="w-full mb-8">
                    <ImagePlaceholder aspect="aspect-video" />
                  </div>
                  <div className="text-ink/20 group-hover:text-gold transition-colors mb-4">{module.icon}</div>
                  <h3 className="font-calligraphy text-3xl mb-4">{language === 'en' ? module.title.en : module.title.zh}</h3>
                  <p className="text-sm text-ink-soft font-serif leading-loose mb-8 max-w-xs">{language === 'en' ? module.desc.en : module.desc.zh}</p>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink/30 group-hover:text-cinnabar transition-colors flex items-center gap-2">
                    {language === 'en' ? 'Enter Direction' : '进入该方向'} <ArrowUpRight size={12} />
                  </span>
                </div>
              ))}
            </div>

            {/* GLOBAL NAV BACK */}
            <div className="text-center pt-24 border-t border-ink/5">
              <button 
                onClick={() => onNavigate?.(SectionId.HERITAGE)}
                className="flex items-center gap-3 text-ink/40 hover:text-cinnabar transition-all group font-serif text-sm tracking-widest uppercase mx-auto"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                {language === 'en' ? 'Return to Heritage' : '返回非遗专题'}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="sub-page"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {activeSubPage === 'stage' && <StageCinemaPage />}
            {activeSubPage === 'digital' && <DigitalInteractionPage />}
            {activeSubPage === 'pop' && <PopCulturePage />}
            {activeSubPage === 'thematic' && <ThematicPage />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contemporary;