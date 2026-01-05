import React from 'react';
import { Language } from '../types';
import { motion } from 'framer-motion';

interface LegendProps {
  language: Language;
}

const Legend: React.FC<LegendProps> = ({ language }) => {
  // Surgical UI Component: ImagePlaceholder with size scaling
  const ImagePlaceholder = ({ size = 'md', label = "IMAGE SLOT" }: { size?: 'sm' | 'md' | 'lg', label?: string }) => {
    const heightClass = size === 'sm' ? 'md:h-[320px]' : size === 'md' ? 'md:h-[480px]' : 'md:h-[650px]';
    return (
      <div className={`w-full h-full border-2 border-dashed border-ink/40 bg-zinc-200 flex items-center justify-center ${heightClass}`}>
        <span className="text-xl font-bold tracking-[0.5em] text-ink/70 uppercase text-center px-4">
          {label}
        </span>
      </div>
    );
  };

  const narrative = [
    {
      title: { en: "The Origin · Sworn Brotherhood", zh: "缘起 · 草桥结拜" },
      tag: { en: "The Encounter", zh: "缘起" },
      time: "317 AD · EASTERN JIN",
      desc: { 
        en: "During the Eastern Jin Dynasty, Zhu Yingtai, a gifted young woman from Shangyu, convinced her parents to let her disguise herself as a man to pursue an education in Hangzhou. On her journey, she encountered a scholar named Liang Shanbo at the Caoqiao Pavilion. Finding themselves in perfect accord, they became sworn brothers under a willow tree and pledged to travel together.",
        zh: "东晋时期，浙江上虞祝家庄的才女祝英台自幼聪慧，心向求学。她说服父母，女扮男装，踏上前往会稽求学的旅程。途中，祝英台在草桥亭邂逅同样前往书院求学的书生梁山伯。二人言谈投契，一见如故，遂在柳荫之下义结金兰，结为兄弟，相约同行。"
      },
      char: "缘"
    },
    {
      title: { en: "Fellowship · Three Years Together", zh: "同窗 · 三载朝夕" },
      tag: { en: "The Bond", zh: "同窗" },
      time: "FELLOWSHIP ERA",
      desc: { 
        en: "At the academy, Liang Shanbo and Zhu Yingtai studied and lived together for three years. Liang, a man of honest character, showed great care for his 'younger brother,' while Yingtai carefully hid her identity as her feelings for him deepened. Throughout their time together, she offered many subtle hints about her true self, but Liang remained oblivious to the deeper meaning of her words.",
        zh: "在书院中，梁山伯与祝英台同窗共读、同室而居。梁山伯性情淳厚，勤勉治学，对这位“贤弟”关怀备至；祝英台则小心掩饰身份，内心情感逐渐生根。三年时光里，两人建立了深厚而真挚的情谊。其间，祝英台多次以隐喻方式暗示自身真实身份，但梁山伯始终未能参透其中深意。"
      },
      char: "窗"
    },
    {
      title: { en: "Departure · Eighteen-Mile Send-off", zh: "离别 · 十八相送" },
      tag: { en: "The Farewell", zh: "离别" },
      time: "THE PARTING ARC",
      desc: { 
        en: "Called home by her family, Yingtai had to cut her studies short. Liang Shanbo accompanied her for eighteen miles, a journey known as the 'Eighteen-Mile Send-off.' Along the way, she used images of mandarin ducks, reflections in a well, and temples to hint at her womanhood, even proposing a marriage with her 'ninth sister' in hopes he would propose. Alas, her intentions were not fully understood.",
        zh: "因家书催促，祝英台不得不中断学业，返乡省亲。梁山伯一路相送，自书院行至长亭，这段送别被后世称为“十八相送”。沿途，祝英台借景寄情，以鸳鸯、井中倒影、观音堂等意象反复暗示自身女儿之身，并托付“家中九妹”的婚约之意，盼梁山伯早日登门提亲。然而，这一切终究未被完全领悟。"
      },
      char: "惜"
    },
    {
      title: { en: "Metamorphosis · Eternal Souls", zh: "惊变 · 殉情 · 化蝶" },
      tag: { en: "The Transformation", zh: "归宿" },
      time: "7TH CENTURY · TANG RECORDS",
      desc: { 
        en: "A year later, Liang discovered Yingtai's true identity and sought her hand, only to find she was betrothed to another. After Liang died of a broken heart, Yingtai's wedding procession passed his tomb. A storm broke, the grave opened, and she leapt inside to join him. From the tomb, two butterflies emerged, dancing together in eternal union. This legend, rooted in Tang Dynasty records like 'Xuan Shi Zhi,' has evolved through centuries of art into a romantic symbol of love transcending life and death.",
        zh: "一年后，梁山伯前往探访祝英台，方知昔日“贤弟”竟是女子。然而，英台已被许配给太守之子马文才。不久梁山伯抑郁而终。次年英台出嫁途中祭拜其坟，墓裂而入，二人合葬化作彩蝶，自此相随不离。其最早文献可追溯至唐代《宣室志》，经由宋元明清时期的戏曲与歌谣不断定型，使这一悲剧获得了超越生死的浪漫象征意义。"
      },
      char: "蝶"
    }
  ];

  return (
    <div className="w-full bg-paper min-h-screen relative selection:bg-cinnabar selection:text-white pb-32 overflow-x-hidden">
      
      {/* Hero Section - Editorial Style */}
      <header className="relative pt-40 pb-20 px-8 max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-baseline gap-6 mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`text-ink ${language === 'zh' ? 'font-calligraphy text-7xl md:text-9xl' : 'font-serif text-6xl md:text-8xl italic'}`}
          >
            {language === 'en' ? 'The Legend' : '梁祝传说'}
          </motion.h2>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="font-script text-4xl text-cinnabar/60 tracking-widest"
          >
            {language === 'en' ? 'A Tale of Two Souls' : '山伯与英台'}
          </motion.span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="text-ink-soft font-serif text-lg md:text-xl italic leading-relaxed opacity-90 max-w-2xl whitespace-pre-wrap border-l border-cinnabar/30 pl-8"
            >
              {language === 'en' 
                ? 'This legend, originating in the Eastern Jin and recorded in the Tang Dynasty, has endured for a millennium. It encompasses both the immediate affinity of soulmates and the fiery passion of love that transcends death. Through folk arts and literature, it has been refined into the most poignant butterfly symbol in cultural memory.' 
                : '这是一个起源于东晋、记载于唐代，流传千年的爱情传说。它既包含一见故的知己之情，也承载着生死相随的炽烈爱恋。其故事的核心骨架早见于古籍文献，后在戏曲、民间艺术与文学书写中不断被丰富与升华，最终化身为中华文化记忆中最为动人的“蝴蝶”象征。'}
            </motion.p>
          </div>

          {/* Large Hero Illustration Container - Standard size */}
          <div className="md:col-span-5 relative md:h-[450px]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full aspect-square md:absolute md:-top-32 md:-right-12 z-0"
            >
               <ImagePlaceholder size="md" />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Narrative Flow */}
      <div className="max-w-7xl mx-auto px-8 space-y-48 md:space-y-80 relative z-10 mt-32">
        {narrative.map((item, index) => (
          <motion.section 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row items-center gap-12 lg:gap-24 border-l border-ink/5 pl-8 md:pl-16 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Background Decorative Character Slot */}
            <div className={`absolute -top-24 ${index % 2 === 1 ? '-left-8 md:left-auto md:-right-8' : '-right-8 md:right-auto md:-left-8'} pointer-events-none opacity-[0.04] select-none`}>
              <span className="font-calligraphy text-[30rem] leading-none text-ink">
                {item.char}
              </span>
            </div>

            {/* Narrative Content Column */}
            <div className="flex-1 w-full max-w-xl relative z-10">
              <div className="mb-10">
                {/* Option A: Temporal Label Indicator */}
                <span className="text-[10px] font-bold tracking-[0.25em] text-cinnabar/60 uppercase block mb-3 font-serif">
                  {item.time}
                </span>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-cinnabar font-script text-4xl opacity-70">
                    {language === 'en' ? `Chapter ${index + 1}` : `第${['一', '二', '三', '四'][index]}章`}
                  </span>
                  <div className="h-px w-12 bg-gold/30"></div>
                  <span className="text-ink/40 font-serif text-[10px] uppercase tracking-[0.4em]">
                    {language === 'en' ? item.tag.en : item.tag.zh}
                  </span>
                </div>
                
                <h3 className={`text-ink leading-tight mb-8 ${
                  language === 'zh' ? 'font-calligraphy text-5xl md:text-6xl' : 'font-serif text-4xl md:text-5xl italic font-medium'
                }`}>
                  {language === 'en' ? item.title.en : item.title.zh}
                </h3>
              </div>
              
              <div className="relative">
                <p className="text-ink font-elegant text-lg md:text-xl leading-relaxed whitespace-pre-wrap opacity-85">
                  {language === 'en' ? item.desc.en : item.desc.zh}
                </p>
                {/* Visual Accent */}
                <div className="mt-12 flex items-center gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-cinnabar"></div>
                   <div className="h-[0.5px] flex-grow bg-gradient-to-r from-ink/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Content-level images using size="sm" to prevent overpowering text */}
            <div className="flex-none w-full md:w-[50%] lg:w-[45%] relative">
               <div className={`relative aspect-[4/5] w-full flex items-center justify-center p-0 ${index % 2 === 1 ? 'md:-translate-x-6' : 'md:translate-x-6'}`}>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className="w-full h-full relative group overflow-visible"
                  >
                    {/* Task 1: Applied size="sm" for better textual balance */}
                    <ImagePlaceholder size="sm" />
                  </motion.div>
               </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Narrative Footer - Exhibition Style */}
      <footer className="mt-60 relative max-w-7xl mx-auto px-8 text-center z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="w-full aspect-[21/9] mb-32 relative overflow-hidden group"
        >
           <ImagePlaceholder size="lg" label="FINAL IMAGE SLOT" />
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-10">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
            className="text-ink-soft font-serif text-xl md:text-2xl italic leading-relaxed opacity-70 px-6"
          >
            {language === 'en' 
              ? 'In what historical context is this moving legend rooted? How has it been retold through opera, music, and film? And what new understandings does it hold in a contemporary world?' 
              : '这个动人的传说，根植于怎样的历史语境之中？又是如何通过戏曲、音乐、影视等艺术形式不断被重述与演绎？在当代语境下，它又被赋予了怎样的新理解？'}
          </motion.p>

          <div className="space-y-4">
            <div className="w-8 h-px bg-ink/20 mx-auto"></div>
            <p className="text-cinnabar font-serif text-sm tracking-[0.3em] font-bold uppercase">
              {language === 'en' 
                ? 'Welcome to explore further' 
                : '欢迎继续浏览'}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold tracking-widest text-ink/40 uppercase">
              <span className="hover:text-ink cursor-pointer transition-colors">History</span>
              <span className="text-gold/30">•</span>
              <span className="hover:text-ink cursor-pointer transition-colors">Heritage</span>
              <span className="text-gold/30">•</span>
              <span className="hover:text-ink cursor-pointer transition-colors">Modern</span>
              <span className="text-gold/30">•</span>
              <span className="hover:text-ink cursor-pointer transition-colors">Resources</span>
            </div>
          </div>
          
          <div className="pt-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              viewport={{ once: false }}
              transition={{ duration: 2 }}
              className="font-calligraphy text-4xl text-ink/20"
            >
              {language === 'en' ? 'Tears turn into wings...' : '生不同襟，死必同穴'}
            </motion.span>
          </div>
        </div>
      </footer>

      {/* Soft Bottom Ink Wash Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-ink/5 to-transparent pointer-events-none z-0"></div>
    </div>
  );
};

export default Legend;