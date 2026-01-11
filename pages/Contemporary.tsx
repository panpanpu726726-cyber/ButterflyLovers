import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Film, Monitor, Zap, ChevronRight, ArrowUpRight, ArrowLeft, Users, ChevronLeft, Database, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContemporaryProps {
  language: Language;
}

type SubPageId = 'overview' | 'stage' | 'digital' | 'pop' | 'thematic';

const Contemporary: React.FC<ContemporaryProps> = ({ language }) => {
  const [activeSubPage, setActiveSubPage] = useState<SubPageId>('overview');
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeSubPage]);

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
        <img
          src="/assets/images/modern/stage/stage-overview.png"
          alt="Stage & Cinema"
          className="w-full h-full object-cover"
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
          <div className="w-full aspect-video overflow-hidden">
            <img
              src="/assets/images/modern/stage/stage01.png"
              alt="Stage & Cinema"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
          <img
            src="/assets/images/modern/stage/stage-overview.png"
            alt="Stage & Cinema"
            className="w-full h-full object-cover"
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
      <SubPageNav current="stage" />
    </div>
  );

  const DigitalInteractionPage = () => {
    const digitalImages = [ 
      "/assets/images/modern/digital/digital-0301.png",
      "/assets/images/modern/digital/digital-0302.png",
      "/assets/images/modern/digital/digital-0303.png"
    ];

    return (
      <div className="max-w-5xl mx-auto py-24 px-8">
        <button 
          onClick={() => setActiveSubPage('overview')}
          className="flex items-center gap-2 text-ink/40 hover:text-cinnabar transition-colors mb-12 font-serif text-sm uppercase tracking-widest group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {language === 'en' ? 'Back to Overview' : '返回总览'}
        </button>

        {/* 1. Introduction Section */}
        <header className="mb-20">
          <img
            src="/assets/images/modern/digital/digital-overview.jpg"
            alt="Stage & Cinema"
            className="w-full h-full object-cover"
          />
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
            <img
              src="/assets/images/modern/digital/digital-01.jpg"
              alt="Digital Arts"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 3. Scanned Heritage Elements Section */}
          <div>
            <h3 className="font-calligraphy text-3xl mb-12 text-center">
              {language === 'en' ? 'Digital Heritage Preservation' : '文化遗产数字化保护'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="flex flex-col gap-6">
                <img
                  src="/assets/images/modern/digital/digital-0201.png"
                  alt="Archway Scan"
                  className="w-full h-full object-cover"
                />
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2 text-gold">{language === 'en' ? 'Three Memorial Archways' : '“品字”牌坊'}</h4>
                <p className="text-ink-soft text-sm font-serif">{language === 'en' ? 'Digital reconstruction of the ceremonial entrance, emphasizing architectural symmetry and historical transition.' : '入口仪式空间的数字重建，强调建筑对称性与历史时空的转场感。'}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img
                src="/assets/images/modern/digital/digital-0202.png"
                alt="Stele Scan"
                className="w-full h-full object-cover"
              />
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2 text-gold">{language === 'en' ? '“Eternal Model Teacher” Stele' : '“万世师表”石碑'}</h4>
                <p className="text-ink-soft text-sm font-serif">{language === 'en' ? 'High-fidelity scan of the core artifact, preserving the texture and calligraphic weight of the Confucian legacy.' : '核心文物的精细扫描，完整保留了儒家遗产的材质肌理与书法力道。'}</p>
              </div>
            </div>
          </div>

          {/* 4. Project Overview Section */}
          <div className="p-12 bg-ink text-paper border border-white/10">
            <div className="flex flex-col gap-12">
              <div className="w-full">
                <span className="text-[10px] font-bold tracking-[0.4em] text-gold uppercase mb-4 block">Core Principles</span>
                <h3 className="font-serif text-3xl italic mb-6">{language === 'en' ? 'Project Overview & Core Values' : '项目概览与核心价值'}</h3>
                <p className="text-paper/80 font-serif text-base leading-loose mb-10">
                  {language === 'en'
                    ? 'This game-based digital heritage project connects the Liang–Zhu legend with Wansong Academy through interactive gameplay within a real-time environment. While the architecture retains realistic proportions and structural details derived from high-fidelity scanning, the atmosphere utilizes a stylized ink-wash aesthetic. By employing PBR-based materials visually aligned with Chinese painting traditions, the design reinforces the deep emotional and cultural resonance of the theme.'
                    : '本项目是以游戏形式呈现的数字遗产项目，通过交互式游戏机制将梁祝传说叙事与万松书院的历史景观相连接。数字建筑在保留基于高精度扫描的真实比例与结构细节的同时，环境氛围采用了受水墨画启发的风格化审美。通过运用视觉上接近中国传统绘画的PBR材质，设计进一步强化了梁祝主题的情感共鸣与文化底蕴。'}
                </p>

                {/* Sliding Image Presentation */}
                <div className="w-full">
                  <div className="relative group w-full aspect-video border border-paper/10 bg-white/5 overflow-hidden">
                    <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                      {digitalImages.map((src, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-full snap-start overflow-hidden">
                          <img
                            src={src}
                            alt={`Digital Interaction Screenshot ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className={`w-1.5 h-1.5 rounded-full ${activeSlide === num ? 'bg-gold' : 'bg-paper/20'}`}></div>
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
          </div>
        </section>
        <SubPageNav current="digital" />
      </div>
    );
  };

  // PopCulturePage, ThematicPage, and Overview remain unchanged
  // (I am keeping your content fully intact as requested)

  const PopCulturePage = () => (
    <div className="max-w-5xl mx-auto py-24 px-8">
      <button 
        onClick={() => setActiveSubPage('overview')}
        className="flex items-center gap-2 text-ink/40 hover:text-cinnabar transition-colors mb-12 font-serif text-sm uppercase tracking-widest group"
      >
        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {language === 'en' ? 'Back to Overview' : '

