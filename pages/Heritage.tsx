import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Sparkles, Music, Mic2, Scroll, Layers, ChevronLeft, MapPin, ArrowRight, Library } from 'lucide-react';
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

  // Dynamic image list for the sliders
  const interpretationImages = [
    "/images/placeholder.jpg",
    "/images/placeholder.jpg",
    "/images/placeholder.jpg"
  ];

  const paperCuttingImages = [
    "/images/placeholder.jpg",
    "/images/placeholder.jpg",
    "/images/placeholder.jpg"
  ];

  const embroideryImages = [
    "/images/placeholder.jpg",
    "/images/placeholder.jpg",
    "/images/placeholder.jpg"
  ];

  const ningboBranchImages = [
    "/images/placeholder.jpg",
    "/images/placeholder.jpg",
    "/images/placeholder.jpg"
  ];

  const hangzhouBranchImages = [
    "/images/placeholder.jpg",
    "/images/placeholder.jpg",
    "/images/placeholder.jpg"
  ];

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
        <p className="text-[10px] text-ink/40 font-serif italic mt-[-2rem] mb-12">
          {language === 'en' 
            ? 'What kind of visual content should be placed here (stage photography, costume detail, archival performance stills).' 
            : '此处可放置舞台摄影、服饰细节或历史演出影像资料。'}
        </p>
        <h2 className={`text-ink mb-6 ${language === 'zh' ? 'font-calligraphy text-6xl' : 'font-serif text-5xl italic font-medium'}`}>
          {language === 'en' ? 'Yue Opera: The Stage Classic' : '越剧《梁祝》：舞台经典与艺术定型'}
        </h2>
        <p className="text-ink-soft font-serif text-lg leading-loose italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'As the soul of Jiangnan performance arts, Yue Opera serves as the primary vessel for the legend’s emotional depth in the Intangible Heritage system. Its lyrical nature and focus on psychological realism make it the ideal medium for a story that relies on subtle subtexts and emotional resonance. The aesthetic of "softness" (Rou) aligns perfectly with the gentle scholar imagery of the Jiangnan region.'
            : '作为江南表演艺术的灵魂，越剧是梁祝传说在非遗体系中承载情感深度的核心载体。越剧的抒情本性与对心理写实的追求，使其成为表现梁祝这种极具委婉美感与情感共鸣故事的理想媒介。其“柔性”审美与江南地区温文尔雅的士人文化及书生形象达成了天然的契合。'}
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

      {/* NEW SECTION: Interpretive Traditions with Image Slider */}
      <section>
        <h4 className="font-calligraphy text-2xl text-cinnabar mb-6">{language === 'en' ? 'Interpretive Traditions' : '演绎传统与版本差异'}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-ink-soft font-serif text-base leading-loose">
            <p className="mb-4">
              {language === 'en' 
                ? 'Across different eras and troupes, the interpretation of Liang-Zhu has evolved to reflect shifting aesthetic values. While early versions emphasized scholarly restraint and poetic subtext, modern productions often lean towards tragic intensity and visual grandeur.' 
                : '在不同的时代与剧团演绎中，梁祝的表达重心随审美变迁而演化。早期版本强调文人的内敛与诗化的潜台词，而现代创作则往往在悲剧张力与视觉宏大叙事上进行深度挖掘。'}
            </p>
            <p>
              {language === 'en' 
                ? 'Different artistic branches highlight unique emotional tones; the "Yuan School" focuses on lyrical tenderness, while other branches may emphasize the psychological conflict within the characters, showcasing the versatility of the Yue Opera form in cultural preservation.' 
                : '不同艺术流派呈现出独特的情感基调；“袁派”追求抒情的委婉，而其他流派则可能着重表现人物内心的心理冲突，展现了越剧在文化传承中承载经典叙事的多维可能性。'}
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative group w-full aspect-video border border-ink/10 bg-ink/5 overflow-hidden">
              {/* CSS Scroll Snap Slider */}
              <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {interpretationImages.map((src, idx) => (
                  <div key={idx} className="flex-shrink-0 w-full h-full snap-start flex items-center justify-center">
                    <img 
                      src={src} 
                      alt={`Interpretive Variation ${idx + 1}`} 
                      className="w-full h-full object-cover opacity-20" 
                    />
                  </div>
                ))}
              </div>
              
              {/* Subtle navigation dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {interpretationImages.map((_, idx) => (
                  <div key={idx} className="w-1 h-1 rounded-full bg-ink/20"></div>
                ))}
              </div>
            </div>
            <p className="text-[10px] text-ink/40 font-serif italic mt-3">
              {language === 'en' 
                ? 'What kind of visual content should be placed here (stage photography, costume detail, archival performance stills).' 
                : '此处可放置舞台摄影、服饰细节或历史演出影像资料。'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION: Canonical Stage Performance (Video) */}
      <section>
        <h4 className="font-calligraphy text-2xl text-cinnabar mb-6">{language === 'en' ? 'Canonical Stage Performance' : '经典越剧舞台演绎'}</h4>
        <p className="text-ink-soft font-serif text-base mb-8 italic opacity-80">
          {language === 'en' 
            ? 'This video represents a modern, canonical Yue Opera interpretation of Liang-Zhu.' 
            : '该影像呈现近现代舞台语境下具有代表性的越剧《梁祝》经典演绎。'}
        </p>
        <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center overflow-hidden relative">
          <div className="w-full h-full bg-ink/5 flex items-center justify-center relative">
            <iframe 
              className="w-full h-full"
              title="Canonical Yue Opera Performance"
              src="about:blank"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-ink/[0.02]">
               <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-ink/20">Stage Video Fragment Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h4 className="font-calligraphy text-2xl text-cinnabar mb-8">{language === 'en' ? 'Artistic Features' : '核心艺术特征'}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center overflow-hidden">
               <img src="/images/placeholder.jpg" alt="Stage Feature Placeholder" className="w-full h-full object-cover opacity-20" />
            </div>
            <p className="text-[10px] text-ink/40 font-serif italic mt-1">
              {language === 'en' 
                ? 'What kind of visual content should be placed here (stage photography, costume detail, archival performance stills).' 
                : '此处可放置舞台摄影、服饰细节或历史演出影像资料。'}
            </p>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-gold">{language === 'en' ? 'All-Female Cast' : '女子越剧特色'}</h5>
              <p className="text-ink-soft font-serif text-base">{language === 'en' ? 'The tradition of female actors playing male roles (Sheng) creates a unique lyrical softness that perfectly matches the scholar imagery.' : '女子演小生的传统赋予了角色独特的阴柔美与抒情性，与梁山伯的书生形象天然契合。'}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center overflow-hidden">
               <img src="/images/placeholder.jpg" alt="Lyric Feature Placeholder" className="w-full h-full object-cover opacity-20" />
            </div>
            <p className="text-[10px] text-ink/40 font-serif italic mt-1">
              {language === 'en' 
                ? 'What kind of visual content should be placed here (stage photography, costume detail, archival performance stills).' 
                : '此处可放置舞台摄影、服饰细节或历史演出影像资料。'}
            </p>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-gold">{language === 'en' ? 'Poetic Lyrics' : '诗化唱词'}</h5>
              <p className="text-ink-soft font-serif text-base">{language === 'en' ? 'The libretto uses high-register metaphoric language, blending local dialects with literary elegance.' : '唱词高度诗化，将江南民间方言与文人文学传统完美结合。'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUDING PARAGRAPH */}
      <div className="pt-12 border-t border-ink/5 text-center">
        <p className="text-ink-soft font-serif text-base italic opacity-60 max-w-2xl mx-auto leading-relaxed">
          {language === 'en'
            ? 'In conclusion, Yue Opera stands as the most emotionally complete and aesthetically cohesive stage realization of the Liang-Zhu legend, bridging the gap between historical narrative and living performance in Jiangnan culture.'
            : '综上所述，越剧作为梁祝传说最完整、最具审美一致性的舞台呈现形式，在江南文化的历史叙事与活态表演之间架起了一座不可或缺的情感桥梁。'}
        </p>
      </div>

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
            ? 'The musical legacy of Liang-Zhu represents a millennium of auditory evolution, tracing a path from the intimate whispers of regional folk ballads to the grand resonance of the global stage. Long before its symphonic codification, the legend breathed through the pentatonic scales of Jiangnan "Tanhuang" and the expressive vocalizations of Yue Opera. This auditory transmission serves as a bridge, where the soul of an ancient narrative is preserved not in static ink, but through the fluid dynamics of strings and woodwinds, translating a quintessentially Eastern tragedy into a universal language of emotional power.'
            : '梁祝的音乐遗产凝结了长达千年的听觉演变，见证了叙事艺术从地域性民歌谣曲向全球化交响乐章的华丽蜕变。在进入交响乐殿堂之前，这段传说早已在江南“滩簧”的五声音阶与越剧委婉动人的唱腔中获得了生命。这种听觉上的薪火相传，使古老的故事不再仅仅受困于静态的文字，而是在弦乐与管乐的流动中，将这一具有典型东方色彩的悲剧转化为一种能够引起全球共鸣、跨越文化边界的情感语言。'}
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

      {/* VIDEO SECTION ONE: Violin Concerto */}
      <section>
        <h4 className="font-calligraphy text-2xl text-cinnabar mb-6">
          {language === 'en' ? 'Violin Concerto: A Global Classic' : '小提琴协奏曲：世界化的梁祝'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-ink-soft font-serif text-base leading-loose">
            <p>
              {language === 'en' 
                ? 'Created in 1959 by He Zhanhao and Chen Gang at the Shanghai Conservatory, this masterpiece transformed a regional legend into a symphonic milestone. By blending Western orchestral forms with the melodic DNA of Yue Opera, it achieved unprecedented global resonance, becoming the most widely performed Chinese orchestral work in history.'
                : '1959年由何占豪、陈钢于上海音乐学院创作，这部杰作将地域性的传说转化为交响乐里程碑。通过将西方管弦乐形式与越剧旋律基因融合，它在世界范围内引起了前所未有的共鸣，成为历史上演出最广泛的中国管弦乐作品。'}
            </p>
          </div>
          <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center overflow-hidden relative">
            <iframe 
              className="w-full h-full"
              title="Violin Concerto Performance"
              src="about:blank"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-ink/[0.02]">
               <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-ink/20">Violin Concerto Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION TWO: Chinese Instrumental */}
      <section>
        <h4 className="font-calligraphy text-2xl text-cinnabar mb-6">
          {language === 'en' ? 'Chinese Instrumental Interpretations' : '民族器乐演绎：东方语境的回归'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center overflow-hidden relative md:order-last">
            <iframe 
              className="w-full h-full"
              title="Traditional Instrumental Performance"
              src="about:blank"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-ink/[0.02]">
               <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-ink/20">Erhu Performance Placeholder</span>
            </div>
          </div>
          <div className="text-ink-soft font-serif text-base leading-loose">
            <p>
              {language === 'en' 
                ? 'While the violin concerto brought the legend to the world, traditional instruments like the Erhu return the narrative to its sonic roots. Through the nuanced slides and timbre of Chinese strings, these interpretations emphasize the "singing" quality of the melody, echoing the emotional weight and cultural aesthetic of the original Jiangnan spirit.'
                : '虽然小提琴协奏曲让这段传说走向世界，但二胡等传统乐器将叙事带回了其声音根源。通过中国弦乐细微的滑音与音色，这些演绎强调了旋律的‘歌唱性’，呼应了原始江南精神的情感重量与文化审美。'}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h4 className="font-calligraphy text-2xl text-jade mb-8">{language === 'en' ? 'Artistic Structure' : '核心表现方式'}</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: 'Sonata Form', desc: { en: 'Providing a unified narrative logic where symphonic sonata structures and traditional narrative music both track the story through Exposition (Encounter), Development (Betrothal), and Recapitulation (Metamorphosis).', zh: '提供统一的叙事逻辑，无论是在交响乐的奏鸣曲式中，还是在传统叙事音乐的框架下，均通过呈示部（相爱）、展开部（抗婚）与再现部（化蝶）来追踪完整的情感历程。' } },
            { tag: 'Technique', desc: { en: 'Employing distinct technical vocabularies: while the violin utilizes portamento to mimic operatic vocalization, Chinese instruments like the erhu leverage unique timbral shifts and left-hand techniques to evoke the story\'s regional soul.', zh: '运用多元的技术话语：小提琴通过滑音模拟戏曲运腔的细腻，而以二胡为代表的民族乐器则利用独特的音色流转与指法技巧，唤起故事深处的地域灵魂。' } },
            { tag: 'Symbolism', desc: { en: 'Utilizing instrumental pairings as character personifications; whether through the dialogue of cello and violin or the interplay of diverse Chinese string timbres, the instruments act as the distinct "voices" of Shanbo and Yingtai.', zh: '将乐器组合视为人物人格的化身；无论是大提琴与小提琴的交响对话，还是不同民族弦乐音色的交互，乐器都作为梁山伯与祝英台独特的“声音叙述者”存在。' } },
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

      {/* CONCLUDING COMPARISON PARAGRAPH */}
      <div className="pt-12 border-t border-ink/5 text-center">
        <p className="text-ink-soft font-serif text-base italic opacity-60 max-w-2xl mx-auto leading-relaxed">
          {language === 'en'
            ? 'Ultimately, the musical legacy of Liang-Zhu flourishes through the parallel resonance of diverse acoustic philosophies. Whether articulated through the expansive architecture of the Western symphonic tradition or the intimate, nuanced linearities of Chinese instrumental aesthetics, the legend finds equivalent validity in both sonic languages. This enduring vitality allows the narrative to be continuously reimagined across cultural boundaries, succeeding as a universal musical dialogue that honors the rigor of global forms while celebrating the profound lyrical essence of Jiangnan.'
            : '最终，梁祝的音乐遗产在多元声音哲学的平行共鸣中焕发生机。无论是通过西方交响乐宏大的叙事架构，还是中国器乐细致、灵动的线性审美，这段传说都在这两种音律语言中获得了对等的艺术真实性。这种持久的生命力使叙事得以在不同文化边界间不断重构，成为一场成功的跨文化音乐对话——它既致敬了全球音乐形式的严谨，也由衷地呈现了江南文化的抒情底色。'}
        </p>
      </div>

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
        <div className="mt-8 text-ink-soft font-serif text-base leading-relaxed opacity-80 max-w-3xl">
          {language === 'en' 
            ? 'Within the framework of Intangible Cultural Heritage, folk crafts function not as mere narrative retellings, but as vital symbolic carriers. The legend of Liang-Zhu operates as a cultural love totem, representing motifs of fidelity, transformation, and rebirth. Traditionally, crafts like paper-cutting and embroidery in the Jiangnan region have absorbed these motifs—paired butterflies, scholars, and academy scenes—weaving them into the fabric of daily life through symbolic visual language.'
            : '在非物质文化遗产的框架下，民间工艺并非单纯的叙事复述，而是至关重要的视觉符号载体。梁祝传说作为一个文化图腾，承载着忠贞、蜕变与重生的核心意蕴。在江南地区，剪纸与刺绣等工艺历史性地吸收了蝴蝶、双人形象及书院场景等梁祝元素，通过象征性的视觉语言将其转化为日常生活中触手可及的文化记忆。'}
        </div>
      </header>

      <section>
        <h4 className="font-calligraphy text-2xl text-gold mb-8">{language === 'en' ? 'Material & Technique' : '材料与表现技法'}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Paper-cutting Subsection */}
          <div className="space-y-6">
            <div className="relative group w-full aspect-video border border-ink/10 bg-ink/5 overflow-hidden">
              <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {paperCuttingImages.map((src, idx) => (
                  <div key={idx} className="flex-shrink-0 w-full h-full snap-start flex items-center justify-center">
                    <img 
                      src={src} 
                      alt={`Paper-cutting placeholder ${idx + 1}`} 
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" 
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {paperCuttingImages.map((_, idx) => (
                  <div key={idx} className="w-1 h-1 rounded-full bg-ink/20"></div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-gold">{language === 'en' ? 'Paper-cutting' : '民间剪纸'}</h5>
              <p className="text-ink-soft font-serif text-base leading-loose">
                {language === 'en' 
                  ? 'In the art of paper-cutting, the Liang-Zhu narrative is distilled into high-contrast spatial metaphors. Compositional balance in scenes like "Meeting in the Academy" symbolizes spiritual harmony, while the final metamorphosis is rendered through an intricate interweaving of negative and positive space. Every incision serves as a visual testament to transformation and the endurance of loyalty.' 
                  : '在民间剪纸艺术中，梁祝叙事被浓缩为高对比度的空间隐喻。如“书院相会”等场景的构图平衡象征着精神上的和谐，而最终的化蝶则通过虚实空间的错综交织来呈现。每一次剪刻都成为了对蜕变与忠贞守望的视觉见证。'}
              </p>
            </div>
          </div>

          {/* Embroidery Subsection */}
          <div className="space-y-6">
            <div className="relative group w-full aspect-video border border-ink/10 bg-ink/5 overflow-hidden">
              <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {embroideryImages.map((src, idx) => (
                  <div key={idx} className="flex-shrink-0 w-full h-full snap-start flex items-center justify-center">
                    <img 
                      src={src} 
                      alt={`Embroidery placeholder ${idx + 1}`} 
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" 
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {embroideryImages.map((_, idx) => (
                  <div key={idx} className="w-1 h-1 rounded-full bg-ink/20"></div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-gold">{language === 'en' ? 'Embroidery' : '江南刺绣'}</h5>
              <p className="text-ink-soft font-serif text-base leading-loose">
                {language === 'en' 
                  ? 'Jiangnan embroidery captures the ephemeral qualities of the legend through vibrant silk threads. The delicate rendering of butterfly wings serves as a profound symbol of the soul\'s liberation and rebirth. Paired motifs—from birds to figures—are deeply rooted in the concept of duality and eternal companionship, translating the story\'s emotional resonance into a heritage-oriented material form.' 
                  : '江南刺绣以灵动的丝线捕捉传说的瞬时美感。对蝶翼的细腻刻画成为了灵魂解放与重生的深刻象征。从飞鸟到人物的成双纹样，深深植根于双元并蓄与永恒相随的文化观念，将故事的情感共鸣转译为富有底蕴的物质形态。'}
              </p>
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
        <div className="mt-8 text-ink-soft font-serif text-base leading-relaxed opacity-80 max-w-3xl">
          {language === 'en' 
            ? 'Oral tradition represents the living genesis of the Liang-Zhu legend. Long before its theatrical or symphonic codification, the story was transmitted through the breath of regional storytellers and local ballads. This mode of transmission allowed for a high degree of regional adaptability, where local dialects and specific geographic landmarks were woven into the narrative fabric, creating a diverse constellation of "living memories" across the Jiangnan landscape.'
            : '口传文学构成了梁祝传说的活态起源。在进入戏曲与交响乐的定型阐释之前，这段故事早已在地方说书人与民间歌谣的呼吸中流传千年。这种传播模式赋予了故事极高的地域适应性，使地方方言与特定的地理标识得以织入叙事肌理，在整个江南版图中形成了如星簇般多元的“活态记忆”。'}
        </div>
      </header>

      <section>
        <h4 className="font-calligraphy text-2xl text-ink mb-8">{language === 'en' ? 'Narrative Variations' : '叙事特征与地域差异'}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Ningbo Branch */}
          <div className="space-y-6">
            <div className="relative group w-full aspect-video border border-ink/10 bg-ink/5 overflow-hidden">
              <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {ningboBranchImages.map((src, idx) => (
                  <div key={idx} className="flex-shrink-0 w-full h-full snap-start flex items-center justify-center">
                    <img 
                      src={src} 
                      alt={`Ningbo branch visual placeholder ${idx + 1}`} 
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" 
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {ningboBranchImages.map((_, idx) => (
                  <div key={idx} className="w-1 h-1 rounded-full bg-ink/20"></div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-ink/40">{language === 'en' ? 'Ningbo Branch' : '宁波系叙事'}</h5>
              <p className="text-ink-soft font-serif text-base leading-loose">
                {language === 'en' 
                  ? 'The Ningbo-centered oral tradition is characterized by a strong emphasis on historicism and local topography. Narratives in this region often anchor the legend to specific archaeological sites and family lineages, framing the story as a localized historical event. The oral accounts frequently highlight the "Liang Shanbo Temple" and archival evidence, blending the boundaries between folklore and historical documentation.' 
                  : '宁波地区的口传传统以强烈的历史化倾向与地理实证为特征。该区域的叙事往往将传说锚定在具体的考古遗迹与家族谱系上，将故事塑造为具有地方色彩的历史事件。民间讲述中频繁提及“梁山伯庙”与文献考据，模糊了民间传说与历史档案之间的界限。'}
              </p>
            </div>
          </div>

          {/* Hangzhou Branch */}
          <div className="space-y-6">
            <div className="relative group w-full aspect-video border border-ink/10 bg-ink/5 overflow-hidden">
              <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {hangzhouBranchImages.map((src, idx) => (
                  <div key={idx} className="flex-shrink-0 w-full h-full snap-start flex items-center justify-center">
                    <img 
                      src={src} 
                      alt={`Hangzhou branch visual placeholder ${idx + 1}`} 
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" 
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {hangzhouBranchImages.map((_, idx) => (
                  <div key={idx} className="w-1 h-1 rounded-full bg-ink/20"></div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest text-ink/40">{language === 'en' ? 'Hangzhou Branch' : '杭州系叙事'}</h5>
              <p className="text-ink-soft font-serif text-base leading-loose">
                {language === 'en' 
                  ? 'In the Hangzhou tradition, the narrative focus shifts toward the poetic scenery of the West Lake and the idyllic life of the Wansong Academy. This branch prioritizes the emotional development of the protagonists during their three years of study. The storytelling is rich in metaphors of the natural landscape, particularly during the "Eighteen-Mile Send-off," where the physical journey serves as a canvas for the subtext of their bond.' 
                  : '在杭州的叙事传统中，重心转向了西湖的诗意景观与万松书院的求学生活。这一分支优先呈现两位主角在三载同窗期间的情感演进。讲述中充斥着对自然景观的隐喻式描写，尤其是在“十八相送”的情节中，空间上的跋涉成为了表现两人情感潜台词的画布。'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUDING PARAGRAPH */}
      <div className="pt-12 border-t border-ink/5 text-center">
        <p className="text-ink-soft font-serif text-base italic opacity-60 max-w-2xl mx-auto leading-relaxed">
          {language === 'en'
            ? 'In essence, the oral tradition serves as the primal substrate of the Liang-Zhu legacy. It is the flexible foundation upon which all subsequent artistic formalizations—from Yue Opera to modern cinema—were built. By preserving the nuances of regional voice and local identity, these oral narratives ensure that the legend remains a dynamic, living heritage rather than a static relic of the past.'
            : '从本质上讲，口传文学是梁祝文化遗产的原始基石。它作为一种灵活的基础，支撑起后续所有的艺术化身——从越剧表演到现代电影。通过保留地域声息与地方认知的细微差别，这些口头叙事确保了这段传说始终是一份动态的、活态的遗产，而非一段静止的历史遗迹。'}
        </p>
      </div>

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
    <div 
      className="w-full min-h-screen relative overflow-hidden"
      style={activeView === 'overview' ? { background: 'linear-gradient(to bottom, #ECE3D9, #DCCAB8)' } : { backgroundColor: '#E9DCC7' }}
    >
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

              {/* Module 3 | Era Relationship Fragment */}
              <section className="mb-24 py-12 px-10 bg-white/40 border border-ink/5 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                   <Library size={120} />
                </div>
                <h3 className="font-calligraphy text-3xl text-cinnabar mb-6">{language === 'en' ? 'The Living Continuity' : '非遗与活态传承'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <p className="text-ink-soft font-serif text-base leading-relaxed">
                    {language === 'en'
                      ? 'Unlike physical monuments, "Intangible Cultural Heritage" (ICH) exists in the human spirit. The legend of Liang-Zhu survived for 1700 years because it was not just archived—it was lived.'
                      : '与坚硬的纪念碑不同，“非物质文化遗产”存在于人的精神之中。梁祝传说之所以能延续 1700 年，是因为它不仅仅被记载，更被无数次地“生活过”。'}
                  </p>
                  <p className="text-ink-soft font-serif text-base leading-relaxed">
                    {language === 'en'
                      ? 'As a National ICH of China (listed 2006), it represents the crystallization of regional wisdom and emotional resilience, adapting to every era while maintaining its moral core.'
                      : '作为 2006 年列入的首批国家级非遗，它代表了地域智慧与情感韧性的结晶。它随时代变迁格不断演化，却始终保持着最核心的伦理与情感底色。'}
                  </p>
                </div>
              </section>

              {/* Module 4 | Classification Logic */}
              <section className="mb-40 text-center">
                <div className="inline-flex items-center gap-4 px-6 py-2 border border-ink/10 rounded-full mb-12">
                  <Layers size={14} className="text-gold" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink/40">
                    {language === 'en' ? 'Classification: By Transmission Medium' : '分类逻辑：基于传播媒介视角'}
                  </span>
                </div>
                <p className="text-ink-soft font-elegant text-sm max-w-2xl mx-auto leading-relaxed italic opacity-60">
                  {language === 'en'
                    ? 'We present the legacy through four essential carriers: the stage, the score, the artifact, and the voice.'
                    : '我们通过四个核心载体呈现这份遗产：舞台的律动、乐谱的旋律、器物的匠心、以及口传的记忆。'}
                </p>
              </section>

              {/* Module 5 | General Characteristics */}
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
