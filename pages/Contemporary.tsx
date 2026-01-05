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
  const ImagePlaceholder = ({ aspect = "aspect-video", label = "IMAGE SLOT" }) => (
    <div className={`w-full ${aspect} md:min-h-[350px] bg-paper border border-ink/5 flex items-center justify-center relative overflow-hidden group`}>
      <div className="absolute inset-0 border-2 border-dashed border-ink/40 bg-zinc-200 flex items-center justify-center z-10">
        <span className="text-xl font-bold tracking-[0.4em] text-ink/50 uppercase">{label}</span>
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
          {language === 'en' ? 'Digital Arts & Spatial Interaction' : '数字艺术与空间交互'}
        </h2>
        <p className="text-ink-soft font-serif text-lg md:text-xl italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'Synthesible Intangible Cultural Heritage with real-time digital space to reconnect the legend with its architectural origins.' 
            : '将非物质文化遗产与实时数字空间融合，重建传说与建筑起源之间的连接。'}
        </p>
      </header>

      <section className="space-y-32">
        {/* 2. Site Background Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Site Context: Wansong Academy' : '场域背景：万松书院'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Originally established in 1498, Wansong Academy underwent a comprehensive reconstruction project initiated by the Hangzhou government in July 2001, now covering an area of approximately 50,000 square meters. As the primary physical anchor for the "Three Years at the Academy" narrative, it bridges literary tradition with tangible geographical space.'
                : '万松书院始建于1498年（明弘治十一年），杭州市政府于2001年7月启动复建工程，现规划总面积约50,000平方米。作为梁祝“三载同窗”叙事的重要物理场域，它连接了文学传统与真实地理空间。'}
            </p>
          </div>
          <ImagePlaceholder aspect="aspect-video" />
        </div>

        {/* 3. Scanned Heritage Elements Section */}
        <div>
          <h3 className="font-calligraphy text-3xl mb-12 text-center">{language === 'en' ? 'Digital Heritage Preservation' : '文化遗产数字化保护'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="flex flex-col gap-6">
              <ImagePlaceholder aspect="aspect-video" />
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2 text-gold">{language === 'en' ? 'Three Memorial Archways' : '“品字”牌坊'}</h4>
                <p className="text-ink-soft text-sm font-serif">{language === 'en' ? 'Digital reconstruction of the ceremonial entrance, emphasizing architectural symmetry and historical transition.' : '入口仪式空间的数字重建，强调建筑对称性与历史时空的转场感。'}</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <ImagePlaceholder aspect="aspect-video" />
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2 text-gold">{language === 'en' ? '“Eternal Model Teacher” Stele' : '“万世师表”石碑'}</h4>
                <p className="text-ink-soft text-sm font-serif">{language === 'en' ? 'High-fidelity scan of the core artifact, preserving the texture and calligraphic weight of the Confucian legacy.' : '核心文物的精细扫描，完整保留了儒家遗产的材质肌理与书法力道。'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Project Overview Section */}
        <div className="p-12 bg-ink text-paper border border-white/10">
          <div className="flex flex-col gap-12">
            <div className="w-full">
              <span className="text-[10px] font-bold tracking-[0.4em] text-gold uppercase mb-4 block">Core Principles</span>
              <h3 className="font-serif text-3xl italic mb-6">{language === 'en' ? 'Project Overview & Core Values' : '项目概览与核心价值'}</h3>
              
              {/* Introduction Text (2 sentences) */}
              <p className="text-paper/80 font-serif text-base leading-loose mb-10">
                {language === 'en'
                  ? 'This game-based digital heritage project connects the Liang–Zhu legend with Wansong Academy through interactive gameplay within a real-time environment. While the architecture retains realistic proportions and structural details derived from high-fidelity scanning, the atmosphere utilizes a stylized ink-wash aesthetic. By employing PBR-based materials visually aligned with Chinese painting traditions, the design reinforces the deep emotional and cultural resonance of the theme.'
                  : '本项目是以游戏形式呈现的数字遗产项目，通过交互式游戏机制将梁祝传说叙事与万松书院的历史景观相连接。数字建筑在保留基于高精度扫描的真实比例与结构细节的同时，环境氛围采用了受水墨画启发的风格化审美。通过运用视觉上接近中国传统绘画的PBR材质，设计进一步强化了梁祝主题的情感共鸣与文化底蕴。'}
              </p>

              {/* Core Values (Exactly 2 sentences each) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-paper/10 p-6 flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">{language === 'en' ? 'Spatial Immersion' : '空间沉浸'}</span>
                  <p className="text-paper/50 text-xs font-serif leading-relaxed italic">
                    {language === 'en'
                      ? 'Digital reconstruction transforms the historical topography of Wansong Academy into a navigable architectural narrative. Players explore this space through a first-person 3D environment that prioritizes atmospheric depth and spatial presence.'
                      : '数字重建将万松书院的历史遗迹转化为可导航的叙事环境。玩家通过第一人称3D环境探索这一场域，体验极具氛围感的空间临场感。'}
                  </p>
                </div>
                <div className="border border-paper/10 p-6 flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">{language === 'en' ? 'Material Fidelity' : '材质忠实'}</span>
                  <p className="text-paper/50 text-xs font-serif leading-relaxed italic">
                    {language === 'en'
                      ? 'Preservation of intangible heritage requires high-fidelity digital representations of physical artifacts like the "Eternal Model Teacher" stele. High-precision scanning ensures that historical textures and calligraphic details are rendered with scholarly accuracy.'
                      : '非遗保护需要对“万世师表”石碑等实物遗存进行高精度的数字呈现。高精度扫描确保历史纹理与书法细节以学术级的精确度得以还原。'}
                  </p>
                </div>
                <div className="border border-paper/10 p-6 flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">{language === 'en' ? 'Interaction Ritual' : '交互仪式'}</span>
                  <p className="text-paper/50 text-xs font-serif leading-relaxed italic">
                    {language === 'en'
                      ? 'Traditional scholarly practices are translated into performative actions to bridge the gap between historical life and modern participants. The calligraphy mechanic allows users to physically engage with traditional brushwork through responsive digital controls.'
                      : '传统的文人实践被转化为表演性仪式，以弥合历史生活与现代参与者之间的鸿沟。书法交互机制允许用户通过响应式数字控制，切身参与传统笔墨的创作。'}
                  </p>
                </div>
                <div className="border border-paper/10 p-6 flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">{language === 'en' ? 'Emotional Resonance' : '情感共鸣'}</span>
                  <p className="text-paper/50 text-xs font-serif leading-relaxed italic">
                    {language === 'en'
                      ? 'The classic tragedy is reinforced by an immersive environment that captures the quietude of academic devotion. Narrative beats are integrated into the spatial journey to foster a profound connection with the historical protagonists.'
                      : '经典的悲剧叙事在捕捉了书院研习之宁静的沉浸式环境中得到强化。叙事节点被融入空间旅程中，促使参与者与历史主角产生深刻共鸣。'}
                  </p>
                </div>
              </div>
            </div>

            {/* Sliding Image Presentation (16:9 Aspect Ratio) - Now below text and full width */}
            <div className="w-full">
              <div className="relative group w-full aspect-video border border-paper/10 bg-white/5 overflow-hidden">
                <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex-shrink-0 w-full h-full snap-start flex items-center justify-center">
                      <ImagePlaceholder aspect="aspect-video" label={`GAME SCREENSHOT ${num}`} />
                    </div>
                  ))}
                </div>
                {/* Visual Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="w-1.5 h-1.5 rounded-full bg-paper/20"></div>
                  ))}
                </div>
                <div className="absolute top-4 right-4 z-10">
                   <span className="text-[8px] font-bold tracking-[0.2em] text-gold uppercase bg-ink/80 px-2 py-1 border border-gold/20">Game Captured</span>
                </div>
              </div>
              <p className="text-[9px] text-paper/30 font-serif italic mt-3 text-right uppercase tracking-widest">
                {language === 'en' ? 'Slide to view project documentation' : '横向滑动查看项目记录'}
              </p>
            </div>
          </div>
        </div>

        {/* 5. Gameplay & Interaction Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
          <ImagePlaceholder aspect="aspect-video" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Compass className="text-cinnabar" size={24} />
              <h3 className="font-calligraphy text-3xl">{language === 'en' ? 'Calligraphy Interaction' : '书法交互设计'}</h3>
            </div>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Participants engage in a tactile digital ritual: pressing "F" to equip the brush pen and using mouse-driven physics to execute traditional calligraphy. This mechanic bridges the gap between digital interaction and historical scholarly practice.'
                : '参与者进入触觉式的数字仪式：按下“F”键拾取毛笔，通过鼠标物理反馈进行传统书法创作。这一机制架起了数字交互与历史文人实践之间的桥梁。'}
            </p>
          </div>
        </div>

        {/* 6. Workflow & Technology Section */}
        <div className="border-l border-ink/10 pl-12 py-8">
          <h3 className="font-calligraphy text-3xl mb-12">{language === 'en' ? 'Technical Workflow' : '技术工作流'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6 items-start">
              <Database className="text-gold flex-shrink-0" size={32} strokeWidth={1} />
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2">Photogrammetry & GS</h4>
                <p className="text-ink-soft text-sm font-serif">{language === 'en' ? 'Utilizing high-precision scanning and Gaussian Splatting for advanced volumetric environment reconstruction.' : '利用高精度扫描与高斯泼溅技术进行先进的体积环境重建。'}</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <Cpu className="text-gold flex-shrink-0" size={32} strokeWidth={1} />
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2">Unreal Engine 5</h4>
                <p className="text-ink-soft text-sm font-serif">{language === 'en' ? 'Leveraging Nanite geometry for cinematic-grade structural fidelity and real-time optimization.' : '利用 Nanite 几何技术实现电影级的结构忠实度与实时性能优化。'}</p>
              </div>
            </div>
            <div className="flex gap-6 items-start md:col-span-2">
              <Layers className="text-gold flex-shrink-0" size={32} strokeWidth={1} />
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2">{language === 'en' ? 'Restoration & Optimization' : '修复与优化挑战'}</h4>
                <p className="text-ink-soft text-sm font-serif">{language === 'en' ? 'Addressing complex heritage restoration workflows through bespoke rendering plugins and algorithmic landscape optimization to maintain historical accuracy.' : '通过定制渲染插件与景观算法优化解决复杂的遗产修复流，确保历史准确性。'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Summary & Experience Outcome Section */}
        <div className="text-center py-20 bg-paper/50">
          <h3 className="font-calligraphy text-3xl mb-8">{language === 'en' ? 'Summary & Experience Outcome' : '总结与体验成效'}</h3>
          <p className="text-ink-soft font-serif text-lg leading-loose max-w-3xl mx-auto italic">
            {language === 'en'
              ? 'The current implementation employs a first-person 3D game architecture to establish the foundational technical and narrative framework for planned future extensions. While Virtual Reality (VR) is envisioned as a subsequent phase to enable direct embodied interaction, the present experience prioritizes emotional presence through immersive spatial atmosphere. Participants are invited to step into the authentic, restrained environment of the Wansong Academy, experiencing the quiet, meditative rhythms of ancient scholarly life. By focusing on the daily persistence of study and learning rather than dramatic narration, the project allows the legend’s intangible essence to be felt within its historically grounded origins.'
              : '目前的实施方案采用第一人称3D游戏架构，为计划中的未来扩展奠定了核心技术与叙事框架。虽然虚拟现实（VR）具身交互已列入后续开发阶段，但当前的体验重心在于通过沉浸式的空间氛围营造情感临场感。项目邀请参与者步入万松书院真实且克制的历史环境，体验古代书生生活宁静、深邃的律动。通过将焦点从戏剧化叙事转向研习生活的日常坚持，本项目让梁祝传说的非遗核心在具有历史根基的场域中得以被感知。'}
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