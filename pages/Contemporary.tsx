import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Film, Monitor, Zap, ChevronRight, ArrowUpRight, ArrowLeft, Users, ChevronLeft, Database, Layers, Cpu, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContemporaryProps {
  language: Language;
}

type SubPageId = 'overview' | 'stage' | 'digital' | 'pop' | 'thematic';

const Contemporary: React.FC<ContemporaryProps> = ({ language }) => {
  const [activeSubPage, setActiveSubPage] = useState<SubPageId>('overview');

  // Ensure scroll to top when changing internal views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSubPage]);

  // Image Placeholder Component for structural consistency with debug label
  const ImagePlaceholder = ({ aspect = "aspect-video" }) => (
    <div className={`w-full ${aspect} md:min-h-[350px] bg-paper border border-ink/5 flex items-center justify-center relative overflow-hidden group`}>
      <div className="absolute inset-0 border-2 border-dashed border-ink/40 bg-zinc-200 flex items-center justify-center z-10">
        <span className="text-xl font-bold tracking-[0.4em] text-ink/50 uppercase">IMAGE SLOT</span>
      </div>
    </div>
  );

  // Sub-page Bottom Navigation
  const SubPageNav = ({ current }: { current: SubPageId }) => {
    const pages = [
      { id: 'stage', label: { en: 'Stage & Cinema', zh: '现代舞台与影像' } },
      { id: 'digital', label: { en: 'Digital & Interaction', zh: '数字媒介与交互' } },
      { id: 'pop', label: { en: 'Pop Culture', zh: '流行文化与传播' } },
      { id: 'thematic', label: { en: 'Thematic Translation', zh: '主题与现代视角' } },
    ] as const;

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
      <button 
        onClick={() => setActiveSubPage('overview')}
        className="flex items-center gap-2 text-ink/40 hover:text-cinnabar transition-colors mb-12 font-serif text-sm uppercase tracking-widest group"
      >
        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {language === 'en' ? 'Back to Overview' : '返回总览'}
      </button>
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
                ? 'Modern film adaptations move away from linear storytelling, focusing on the protagonists. Visual symbolism—especially the use of color and shadow—replaces literal explanations.'
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
      <button 
        onClick={() => setActiveSubPage('overview')}
        className="flex items-center gap-2 text-ink/40 hover:text-cinnabar transition-colors mb-12 font-serif text-sm uppercase tracking-widest group"
      >
        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {language === 'en' ? 'Back to Overview' : '返回总览'}
      </button>

      {/* 1. Introduction Section */}
      <header className="mb-20">
        <ImagePlaceholder aspect="aspect-[21/9]" />
        <h2 className="font-serif text-4xl md:text-5xl italic mt-12 mb-6 text-ink">
          {language === 'en' ? 'Digital Arts & Interaction' : '数字艺术与交互体验'}
        </h2>
        <p className="text-ink-soft font-serif text-lg md:text-xl italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'Redefining the relationship between the viewer and the legend through immersive technology.' 
            : '通过沉浸式技术重新定义观众与传说之间的交互关系。'}
        </p>
      </header>

      <section className="space-y-32">
        {/* 2. Site Background Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Site Background: Wansong Academy' : '遗址背景：万松书院'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'The project centers on the historical architecture and landscape of the Wansong Academy in Hangzhou, serving as the physical anchor for the digital narrative.'
                : '项目以杭州万松书院的历史建筑与园林景观为原型，作为数字叙事的物理锚点。'}
            </p>
          </div>
          <ImagePlaceholder aspect="aspect-video" />
        </div>

        {/* 3. Scanned Heritage Elements Section */}
        <div>
          <h3 className="font-calligraphy text-3xl mb-12 text-center">{language === 'en' ? 'Scanned Heritage Elements' : '文化遗产数字化扫描'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <ImagePlaceholder aspect="aspect-square" />
              <span className="text-xs font-bold tracking-widest text-ink/40 uppercase">{language === 'en' ? 'Architectural Structures' : '古建筑结构'}</span>
            </div>
            <div className="flex flex-col gap-4">
              <ImagePlaceholder aspect="aspect-square" />
              <span className="text-xs font-bold tracking-widest text-ink/40 uppercase">{language === 'en' ? 'Relic Artifacts' : '出土文物'}</span>
            </div>
            <div className="flex flex-col gap-4">
              <ImagePlaceholder aspect="aspect-square" />
              <span className="text-xs font-bold tracking-widest text-ink/40 uppercase">{language === 'en' ? 'Landscape Topography' : '园林地形'}</span>
            </div>
          </div>
        </div>

        {/* 4. Project Overview Section */}
        <div className="p-12 bg-ink text-paper border border-white/10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-[10px] font-bold tracking-[0.4em] text-gold uppercase mb-4 block">Future Practice</span>
              <h3 className="font-serif text-3xl italic mb-6">{language === 'en' ? 'UE Liang-Zhu Project' : 'UE 梁祝交互实验项目'}</h3>
              <p className="text-paper/60 font-serif text-base leading-loose">
                {language === 'en'
                  ? 'A conceptual exploration using real-time engines to create a responsive digital garden.'
                  : '基于实时引擎构建的感应式数字园林。'}
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <ImagePlaceholder aspect="aspect-square" />
            </div>
          </div>
        </div>

        {/* 5. Gameplay & Interaction Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
          <ImagePlaceholder aspect="aspect-video" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Compass className="text-cinnabar" size={24} />
              <h3 className="font-calligraphy text-3xl">{language === 'en' ? 'Gameplay & Interaction' : '玩法与交互设计'}</h3>
            </div>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Users experience the legend through interactive storytelling, where environmental triggers react to the viewer\'s presence and choices.'
                : '用户通过交互式叙事体验传说，环境触发器会根据观众的出现和选择做出反应。'}
            </p>
          </div>
        </div>

        {/* 6. Workflow & Technology Section */}
        <div className="border-l border-ink/10 pl-12 py-8">
          <h3 className="font-calligraphy text-3xl mb-12">{language === 'en' ? 'Workflow & Technology' : '制作流程与技术规格'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6 items-start">
              <Database className="text-gold flex-shrink-0" size={32} strokeWidth={1} />
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2">Photogrammetry</h4>
                <p className="text-ink-soft text-sm font-serif">High-fidelity 3D scanning of physical sites.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <Cpu className="text-gold flex-shrink-0" size={32} strokeWidth={1} />
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2">Unreal Engine 5</h4>
                <p className="text-ink-soft text-sm font-serif">Lumen & Nanite technology for real-time fidelity.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <Layers className="text-gold flex-shrink-0" size={32} strokeWidth={1} />
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2">Shader Development</h4>
                <p className="text-ink-soft text-sm font-serif">Ink-wash inspired post-processing effects.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Summary & Experience Outcome Section */}
        <div className="text-center py-20 bg-paper/50">
          <h3 className="font-calligraphy text-3xl mb-8">{language === 'en' ? 'Summary & Experience Outcome' : '总结与体验成效'}</h3>
          <p className="text-ink-soft font-serif text-lg leading-loose max-w-3xl mx-auto italic">
            {language === 'en'
              ? 'By bridging the gap between historical accuracy and imaginative digital space, the project creates a new paradigm for cultural heritage preservation.'
              : '通过架起历史真实性与虚构数字空间之间的桥梁，该项目为文化遗产保护创造了新的范式。'}
          </p>
        </div>
      </section>
      <SubPageNav current="digital" />
    </div>
  );

  const PopCulturePage = () => (
    <div className="max-w-5xl mx-auto py-24 px-8">
      <button 
        onClick={() => setActiveSubPage('overview')}
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
                ? 'From modern animation character designs to commercial brand collaborations.'
                : '从现代动漫角色设计到商业跨界合作。'}
            </p>
          </div>
          <ImagePlaceholder aspect="aspect-video" />
        </div>
      </section>
      <SubPageNav current="pop" />
    </div>
  );

  const ThematicPage = () => (
    <div className="max-w-5xl mx-auto py-24 px-8">
      <button 
        onClick={() => setActiveSubPage('overview')}
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
          </div>
          <ImagePlaceholder aspect="aspect-square" />
        </div>
      </section>
      <SubPageNav current="thematic" />
    </div>
  );

  const renderActiveView = () => {
    switch (activeSubPage) {
      case 'stage': return <StageCinemaPage />;
      case 'digital': return <DigitalInteractionPage />;
      case 'pop': return <PopCulturePage />;
      case 'thematic': return <ThematicPage />;
      default:
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
                  title: { en: 'Stage & Cinema', zh: '舞台与影像' }, 
                  icon: <Film className="text-ink/40 group-hover:text-cinnabar transition-colors" size={32} strokeWidth={1} />, 
                  desc: { en: 'Contemporary reconstructions.', zh: '当代叙事重构。' } 
                },
                { 
                  id: 'digital', 
                  title: { en: 'Digital Arts', zh: '数字艺术' }, 
                  icon: <Monitor className="text-ink/40 group-hover:text-jade transition-colors" size={32} strokeWidth={1} />, 
                  desc: { en: 'Interactive storytelling.', zh: '交互式叙事。' } 
                },
                { 
                  id: 'pop', 
                  title: { en: 'Pop Culture', zh: '流行文化与大众传播' }, 
                  icon: <Zap className="text-ink/40 group-hover:text-gold transition-colors" size={32} strokeWidth={1} />, 
                  desc: { en: 'Global mainstream symbols.', zh: '全球主流文化语境。' } 
                },
                { 
                  id: 'thematic', 
                  title: { en: 'Thematic Translation', zh: '当代视角下的主题转译' }, 
                  icon: <Users className="text-ink/40 group-hover:text-gold transition-colors" size={32} strokeWidth={1} />, 
                  desc: { en: 'Sociological lenses.', zh: '社会学视角。' } 
                }
              ].map((module) => (
                <div 
                  key={module.id}
                  onClick={() => setActiveSubPage(module.id as SubPageId)}
                  className="group cursor-pointer bg-white border border-ink/5 p-8 shadow-sm hover:border-ink/20 transition-all flex flex-col"
                >
                  <div className="mb-6">
                    <ImagePlaceholder aspect="aspect-[16/9]" />
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
    }
  };

  return (
    <div className="w-full bg-paper min-h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSubPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderActiveView()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Contemporary;