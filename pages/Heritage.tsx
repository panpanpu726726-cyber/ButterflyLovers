import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Sparkles, Music, Mic2, Scroll, Layers, ChevronLeft, BookOpen, MapPin, ArrowRight, Library } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeritageProps {
  language: Language;
}

type SubView = 'overview' | 'yue-opera' | 'musical-works' | 'folk-crafts' | 'oral-tradition';

const Heritage: React.FC<HeritageProps> = ({ language }) => {
  const [activeView, setActiveView] = useState<SubView>('overview');

  // Scroll to top whenever the internal view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  // Helper component for Sub-view Navigation
  const SubViewNavigation = ({ current }: { current: SubView }) => {
    const others = [
      { id: 'yue-opera', label: { en: 'Yue Opera', zh: '越剧艺术' } },
      { id: 'musical-works', label: { en: 'Musical Works', zh: '音乐传承' } },
      { id: 'folk-crafts', label: { en: 'Folk Crafts', zh: '民间工艺' } },
      { id: 'oral-tradition', label: { en: 'Oral Tradition', zh: '口传文学' } },
    ].filter(item => item.id !== current);

    return (
      <div className="mt-32 pt-12 border-t border-ink/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <button 
            onClick={() => setActiveView('overview')}
            className="flex items-center gap-2 text-ink/60 hover:text-cinnabar transition-all font-serif text-sm uppercase tracking-widest border border-ink/10 px-6 py-3 bg-white/50"
          >
            <ChevronLeft size={16} /> {language === 'en' ? 'Return to Overview' : '返回非遗总览'}
          </button>
          
          <div className="flex flex-wrap justify-center gap-4">
            {others.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id as SubView)}
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink/40 hover:text-gold transition-colors flex items-center gap-2 border-b border-transparent hover:border-gold pb-1"
              >
                {language === 'en' ? item.label.en : item.label.zh} <ArrowRight size={10} />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Sub-View 1: Yue Opera
  const YueOperaDetail = () => (
    <div className="space-y-24 py-10">
      <header className="border-b border-ink/10 pb-12">
        <div className="w-full aspect-[21/9] bg-ink/5 border border-ink/10 mb-12 flex items-center justify-center overflow-hidden">
          <img src="/images/placeholder.jpg" alt="Yue Opera Visual Placeholder" className="w-full h-full object-cover opacity-30" />
        </div>
        <h2 className={`text-ink mb-6 ${language === 'zh' ? 'font-calligraphy text-6xl' : 'font-serif text-5xl italic font-medium'}`}>
          {language === 'en' ? 'Yue Opera: The Stage Classic' : '越剧《梁祝》：舞台经典与艺术定型'}
        </h2>
        <p className="text-ink-soft font-serif text-lg leading-loose italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'As the soul of Jiangnan performance arts, Yue Opera serves as the primary vessel for the legend’s emotional depth in the Intangible Heritage system.'
            : '作为江南表演艺术的灵魂，越剧是梁祝传说在非遗体系中承载情感深度的核心载体。'}
        </p>
      </header>

      <section>
        <h4 className="font-calligraphy text-2xl text-cinnabar mb-6 flex items-center gap-3">
          <Scroll size={20} /> {language === 'en' ? 'Historical Formation' : '历史形成与定型过程'}
        </h4>
        <div className="bg-white/40 p-8 border border-ink/5 font-serif leading-loose">
          <ul className="space-y-4 text-ink-soft">
            <li>• <strong className="text-ink">1906:</strong> {language === 'en' ? 'Birth in Shengzhou, initially a rural performance form.' : '越剧发源于浙江嵊州，最初为乡村表演形式。'}</li>
            <li>• <strong className="text-ink">1940s-50s:</strong> {language === 'en' ? 'Standardization of "Eighteen-Mile Send-off" and "The Balcony Meeting" by masters like Yuan Xuefen.' : '由袁雪芬、范瑞娟等一代宗师完成了对《十八相送》等核心折子戏的规范化定型。'}</li>
            <li>• <strong className="text-ink">1953:</strong> {language === 'en' ? 'Release of the first color cinematic opera, cementing the legend’s visual identity.' : '新中国首部彩色电影越剧《梁祝》问世，奠定了其视觉审美基调。'}</li>
          </ul>
        </div>
      </section>

      <section>
        <h4 className="font-calligraphy text-2xl text-cinnabar mb-8">{language === 'en' ? 'Artistic Features' : '核心艺术特征'}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center overflow-hidden">
               <img src="/images/placeholder.jpg" alt="Stage Feature Placeholder" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-gold">{language === 'en' ? 'All-Female Cast' : '女子越剧特色'}</h5>
              <p className="text-ink-soft font-serif text-base">{language === 'en' ? 'The tradition of female actors playing male roles (Sheng) creates a unique lyrical softness that perfectly matches the scholar imagery.' : '女子演小生的传统赋予了角色独特的阴柔美与抒情性，与梁山伯的书生形象天然契合。'}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center overflow-hidden">
               <img src="/images/placeholder.jpg" alt="Lyric Feature Placeholder" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-gold">{language === 'en' ? 'Poetic Lyrics' : '诗化唱词'}</h5>
              <p className="text-ink-soft font-serif text-base">{language === 'en' ? 'The libretto uses high-register metaphoric language, blending local dialects with literary elegance.' : '唱词高度诗化，将江南民间方言与文人文学传统完美结合。'}</p>
            </div>
          </div>
        </div>
      </section>

      <SubViewNavigation current="yue-opera" />
    </div>
  );

  // Sub-View 2: Music
  const MusicDetail = () => (
    <div className="space-y-24 py-10">
      <header className="border-b border-ink/10 pb-12">
        <div className="w-full aspect-[21/9] bg-ink/5 border border-ink/10 mb-12 flex items-center justify-center overflow-hidden">
          <img src="/images/placeholder.jpg" alt="Musical Performance Placeholder" className="w-full h-full object-cover opacity-30" />
        </div>
        <h2 className={`text-ink mb-6 ${language === 'zh' ? 'font-calligraphy text-6xl' : 'font-serif text-5xl italic font-medium'}`}>
          {language === 'en' ? 'Music: From Folk to Symphony' : '梁祝音乐：从民间旋律到世界乐章'}
        </h2>
        <p className="text-ink-soft font-serif text-lg leading-loose italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'The auditory legacy of Liang-Zhu bridges the gap between traditional folk scales and the global language of symphonic music.'
            : '梁祝的听觉遗产架起了传统民间音阶与全球交响乐语言之间的桥梁。'}
        </p>
      </header>

      <section>
        <h4 className="font-calligraphy text-2xl text-jade mb-6 flex items-center gap-3">
          <Music size={20} /> {language === 'en' ? 'Musical Evolution' : '音乐转化与定型'}
        </h4>
        <div className="bg-white/40 p-8 border border-ink/5 font-serif leading-loose">
          <ul className="space-y-4 text-ink-soft">
            <li>• <strong className="text-ink">{language === 'en' ? 'Folk Roots:' : '民间根基：'}</strong> {language === 'en' ? 'Themes derived from Jiangnan folk ballads and traditional Yue Opera aria motifs.' : '核心动机源于江南民间曲艺及越剧唱腔旋律片段。'}</li>
            <li>• <strong className="text-ink">1959:</strong> {language === 'en' ? 'Creation of the Violin Concerto by He Zhanhao and Chen Gang at Shanghai Conservatory.' : '何占豪、陈钢于上海音乐学院完成了小提琴协奏曲《梁祝》的创作。'}</li>
          </ul>
        </div>
      </section>

      <section>
        <h4 className="font-calligraphy text-2xl text-jade mb-8">{language === 'en' ? 'Artistic Structure' : '核心表现方式'}</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: 'Sonata Form', desc: { en: 'Narrating the story through Exposition (Encounter), Development (Betrothal), and Recapitulation (Metamorphosis).', zh: '通过呈示部（相爱）、展开部（抗婚）与再现部（化蝶）叙述完整故事。' } },
            { tag: 'Technique', desc: { en: 'Applying violin slides to mimic the vocal nuances of Chinese opera singing.', zh: '运用小提琴滑音技巧模拟中国传统戏曲的运腔特色。' } },
            { tag: 'Symbolism', desc: { en: 'Using cello and violin as the "voice" of Shanbo and Yingtai.', zh: '以大提琴与小提琴分别作为梁山伯与祝英台的“声音载体”。' } },
          ].map((item, idx) => (
            <div key={idx} className="p-6 border border-ink/5 bg-paper flex flex-col gap-4">
              <div className="w-full aspect-square bg-ink/5 border border-ink/10 flex items-center justify-center overflow-hidden">
                <img src="/images/placeholder.jpg" alt="Music Logic Placeholder" className="w-full h-full object-cover opacity-10" />
              </div>
              <h5 className="font-bold text-[10px] uppercase tracking-widest text-gold">{item.tag}</h5>
              <p className="text-sm text-ink-soft leading-relaxed">{language === 'en' ? item.desc.en : item.desc.zh}</p>
            </div>
          ))}
        </div>
      </section>

      <SubViewNavigation current="musical-works" />
    </div>
  );

  // Sub-View 3: Crafts
  const CraftsDetail = () => (
    <div className="space-y-24 py-10">
      <header className="border-b border-ink/10 pb-12">
        <div className="w-full aspect-[21/9] bg-ink/5 border border-ink/10 mb-12 flex items-center justify-center overflow-hidden">
          <img src="/images/placeholder.jpg" alt="Crafts Visual Placeholder" className="w-full h-full object-cover opacity-30" />
        </div>
        <h2 className={`text-ink mb-6 ${language === 'zh' ? 'font-calligraphy text-6xl' : 'font-serif text-5xl italic font-medium'}`}>
          {language === 'en' ? 'Folk Crafts: The Visual Totem' : '民间工艺：梁祝形象的视觉传承'}
        </h2>
        <p className="text-ink-soft font-serif text-lg leading-loose italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'In the hands of folk artists, the story transcends narrative and becomes a silent visual symbol of fidelity and spiritual rebirth.'
            : '在民间艺人的指尖下，梁祝的故事超越了叙事，转化为一种关于忠贞与重生的无声视觉符号。'}
        </p>
      </header>

      <section>
        <h4 className="font-calligraphy text-2xl text-gold mb-8">{language === 'en' ? 'Material & Technique' : '材料与表现技法'}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center overflow-hidden">
               <img src="/images/placeholder.jpg" alt="Paper-cutting Placeholder" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-gold">{language === 'en' ? 'Paper-cutting' : '民间剪纸'}</h5>
              <p className="text-ink-soft font-serif text-base">{language === 'en' ? 'Using negative space to depict the intricate scenes of "Meeting in the Academy" and the final metamorphosis.' : '利用虚实结合的剪影技巧，勾勒出“书院相会”与“化蝶”的宏大意境。'}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center overflow-hidden">
               <img src="/images/placeholder.jpg" alt="Embroidery Placeholder" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-gold">{language === 'en' ? 'Embroidery' : '江南刺绣'}</h5>
              <p className="text-ink-soft font-serif text-base">{language === 'en' ? 'Silk threads capture the delicate butterfly wings, symbolizing the fragility and resilience of love.' : '以蚕丝线捕捉蝶翼的颤动，象征情感的纤细与生命的坚韧。'}</p>
            </div>
          </div>
        </div>
      </section>

      <SubViewNavigation current="folk-crafts" />
    </div>
  );

  // Sub-View 4: Oral Tradition
  const OralDetail = () => (
    <div className="space-y-24 py-10">
      <header className="border-b border-ink/10 pb-12">
        <div className="w-full aspect-[21/9] bg-ink/5 border border-ink/10 mb-12 flex items-center justify-center overflow-hidden">
          <img src="/images/placeholder.jpg" alt="Oral History Placeholder" className="w-full h-full object-cover opacity-30" />
        </div>
        <h2 className={`text-ink mb-6 ${language === 'zh' ? 'font-calligraphy text-6xl' : 'font-serif text-5xl italic font-medium'}`}>
          {language === 'en' ? 'Oral Tradition: Living Memory' : '口传文学：地方记忆与活态叙事'}
        </h2>
        <p className="text-ink-soft font-serif text-lg leading-loose italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'Long before it was written in ink, the legend lived in the breath of storytellers, carrying the warmth of regional dialects and local landscapes.'
            : '在墨迹未干之前，梁祝的传说早已在说书人的呼吸中传颂，承载着地域方言的温度与乡土景观的记忆。'}
        </p>
      </header>

      <section>
        <h4 className="font-calligraphy text-2xl text-ink mb-8">{language === 'en' ? 'Narrative Variations' : '叙事特征与地域差异'}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center overflow-hidden">
               <img src="/images/placeholder.jpg" alt="Ningbo Branch Placeholder" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-ink/40">{language === 'en' ? 'Ningbo Branch' : '宁波系叙事'}</h5>
              <p className="text-ink-soft font-serif text-base">{language === 'en' ? 'Focuses on the burial site and historical evidence, rooted in local geography.' : '侧重于墓葬实证与历史文献，强调故事与地方地理的真实联系。'}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center overflow-hidden">
               <img src="/images/placeholder.jpg" alt="Hangzhou Branch Placeholder" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-ink/40">{language === 'en' ? 'Hangzhou Branch' : '杭州系叙事'}</h5>
              <p className="text-ink-soft font-serif text-base">{language === 'en' ? 'Emphasizes the academy life and the "Eighteen-Mile Send-off" landscape.' : '侧重于书院生活与“十八相送”途中的景物寄情。'}</p>
            </div>
          </div>
        </div>
      </section>

      <SubViewNavigation current="oral-tradition" />
    </div>
  );

  const renderActiveView = () => {
    switch (activeView) {
      case 'yue-opera': return <YueOperaDetail />;
      case 'musical-works': return <MusicDetail />;
      case 'folk-crafts': return <CraftsDetail />;
      case 'oral-tradition': return <OralDetail />;
      default: return null;
    }
  };

  return (
    <div className="w-full bg-paper min-h-screen relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-jade/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cinnabar/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        
        <AnimatePresence mode="wait">
          {activeView === 'overview' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Module 1 | Introduction */}
              <header className="mb-20 text-center ink-reveal">
                <span className="text-xs font-bold tracking-[0.4em] text-cinnabar/60 uppercase mb-4 block">Preserving the Unseen</span>
                <h2 className={`text-ink mb-8 ${language === 'zh' ? 'font-calligraphy text-7xl' : 'font-serif text-5xl md:text-6xl tracking-tight italic font-medium'}`}>
                  {language === 'en' ? 'Intangible Cultural Heritage' : '非物质文化遗产 · 梁祝'}
                </h2>
                <div className="w-24 h-[0.5px] bg-ink/20 mx-auto mb-10"></div>
                <div className="w-full aspect-[21/9] bg-ink/5 border border-ink/10 mb-12 flex items-center justify-center overflow-hidden">
                  <img src="/images/placeholder.jpg" alt="Heritage Overview Placeholder" className="w-full h-full object-cover opacity-20" />
                </div>
                <p className="text-ink-soft font-serif text-lg md:text-xl max-w-3xl mx-auto leading-loose italic opacity-80">
                  {language === 'en'
                    ? 'Liang-Zhu is not merely a text; it is a living stream of performance, music, and craftsmanship that survives through the breath of generations.'
                    : '梁祝并非一段死寂的文字，而是一股流动的生命。它通过世代相传的表演、旋律与手艺，在时光的呼吸中获得永恒。'}
                </p>
              </header>

              {/* Module 2 | Artistic Carriers Grid (Enhanced) */}
              <section className="mb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {[
                    { id: 'yue-opera', icon: <Mic2 />, title: { en: 'Yue Opera', zh: '越剧艺术' }, color: 'cinnabar', academic: 'Stage & Performance', desc: { en: 'The definitive stage medium with soft melodies and poetic lyrics.', zh: '以婉转唱腔和全女班表演著称，是梁祝传说最具代表性的舞台艺术形态。' } },
                    { id: 'musical-works', icon: <Music />, title: { en: 'Musical Works', zh: '音乐传承' }, color: 'jade', academic: 'Symphonic Adaptation', desc: { en: 'From folk pentatonic scales to the world-renowned violin concerto.', zh: '民间旋律与现代交响乐的融合，使梁祝跨越国界，成为全球共鸣的艺术乐章。' } },
                    { id: 'folk-crafts', icon: <Sparkles />, title: { en: 'Folk Crafts', zh: '民间工艺' }, color: 'gold', academic: 'Visual Symbolism', desc: { en: 'Visual totems in embroidery, paper-cutting, and regional crafts.', zh: '梁祝形象作为视觉符号，在剪纸、刺绣等工艺中完成了跨越百年的民俗审美传承。' } },
                    { id: 'oral-tradition', icon: <Scroll />, title: { en: 'Oral Tradition', zh: '口传文学' }, color: 'ink', academic: 'Living Orality', desc: { en: 'The bedrock of stories preserved through regional ballads and storytellers.', zh: '散落于民间的说唱与歌谣，是传说最深厚的根基，承载了最鲜活的地方记忆。' } },
                  ].map((carrier) => (
                    <motion.div 
                      key={carrier.id}
                      whileHover={{ y: -5 }}
                      onClick={() => setActiveView(carrier.id as SubView)}
                      className="group cursor-pointer bg-paper border border-ink/5 p-10 flex flex-col items-center text-center shadow-sm relative overflow-hidden transition-all hover:border-ink/20"
                    >
                      <div className="w-full aspect-video mb-8 bg-ink/5 border border-ink/10 flex items-center justify-center overflow-hidden">
                        <img src="/images/placeholder.jpg" alt="Carrier visual placeholder" className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" />
                      </div>
                      <div className={`text-${carrier.color}/60 mb-4 group-hover:scale-110 transition-transform`}>
                        {React.cloneElement(carrier.icon as any, { size: 32, strokeWidth: 1 })}
                      </div>
                      <span className="text-[9px] font-bold text-ink/20 uppercase tracking-[0.2em] mb-2">{carrier.academic}</span>
                      <h4 className="font-calligraphy text-4xl mb-6 text-ink">
                        {language === 'en' ? carrier.title.en : carrier.title.zh}
                      </h4>
                      <p className="text-ink-soft font-serif leading-loose text-base mb-8">
                        {language === 'en' ? carrier.desc.en : carrier.desc.zh}
                      </p>
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold group-hover:text-cinnabar transition-colors flex items-center gap-2">
                        {language === 'en' ? 'Enter Curation Unit' : '进入独立策展单元'} <ArrowRight size={12} />
                      </span>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Module 3 | General Characteristics */}
              <section className="mb-40 py-20 px-12 bg-ink text-paper relative">
                 <div className="max-w-3xl mx-auto text-center">
                    <h3 className={`mb-10 ${language === 'zh' ? 'font-calligraphy text-5xl' : 'font-serif text-4xl italic'}`}>
                      {language === 'en' ? 'The Essence of the Intangible' : '非遗传承的真谛'}
                    </h3>
                    <p className="text-paper/70 font-elegant text-lg leading-loose">
                      {language === 'en'
                        ? 'Unlike physical ruins, intangible heritage exists only as long as people continue to sing, dance, and tell the story. It is a legacy defined by human breath and pulse.'
                        : '与坚硬的石木古迹不同，非物质文化遗产唯有在不断的唱诵、舞蹈与讲述中才能存续。这是一份关于呼吸与心跳的遗产。'}
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 mt-12 text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">
                      <span>{language === 'en' ? 'Orality' : '口传性'}</span>
                      <span>{language === 'en' ? 'Locality' : '地方性'}</span>
                      <span>{language === 'en' ? 'Emotional Priority' : '情感优先性'}</span>
                    </div>
                 </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <button 
                onClick={() => setActiveView('overview')}
                className="flex items-center gap-2 text-ink/40 hover:text-cinnabar transition-colors mb-12 font-serif text-sm uppercase tracking-widest group"
              >
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {language === 'en' ? 'Back to Overview' : '返回总览'}
              </button>
              
              {renderActiveView()}

              <div className="mt-20 pt-10 border-t border-ink/5 flex justify-between items-center text-ink/40 font-serif text-[10px] uppercase tracking-widest">
                <span>Intangible Heritage Curated Section</span>
                <span className="flex items-center gap-2"><MapPin size={10} /> UNESCO Category: Performing Arts</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Heritage;