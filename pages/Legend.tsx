import React from 'react';
import { Language } from '../types';
import { motion } from 'framer-motion';

interface LegendProps {
  language: Language;
}

const Legend: React.FC<LegendProps> = ({ language }) => {
  const narrative = [
    {
      title: { en: "The Origin · Sworn Brotherhood", zh: "缘起 · 草桥结拜" },
      tag: { en: "The Encounter", zh: "缘起" },
      desc: { 
        en: "During the Eastern Jin Dynasty, Zhu Yingtai, a gifted young woman from Shangyu, convinced her parents to let her disguise herself as a man to pursue an education in Hangzhou. On her journey, she encountered a scholar named Liang Shanbo at the Caoqiao Pavilion. Finding themselves in perfect accord, they became sworn brothers under a willow tree and pledged to travel together.",
        zh: "东晋时期，浙江上虞祝家庄的才女祝英台自幼聪慧，心向求学。她说服父母，女扮男装，踏上前往会稽求学的旅程。途中，祝英台在草桥亭邂逅同样前往书院求学的书生梁山伯。二人言谈投契，一见如故，遂在柳荫之下义结金兰，结为兄弟，相约同行。"
      }
    },
    {
      title: { en: "Fellowship · Three Years Together", zh: "同窗 · 三载朝夕" },
      tag: { en: "The Bond", zh: "同窗" },
      desc: { 
        en: "At the academy, Liang Shanbo and Zhu Yingtai studied and lived together for three years. Liang, a man of honest character, showed great care for his 'younger brother,' while Yingtai carefully hid her identity as her feelings for him deepened. Throughout their time together, she offered many subtle hints about her true self, but Liang remained oblivious to the deeper meaning of her words.",
        zh: "在书院中，梁山伯与祝英台同窗共读、同室而居。梁山伯性情淳厚，勤勉治学，对这位“贤弟”关怀备至；祝英台则小心掩饰身份，内心情感逐渐生根。三年时光里，两人建立了深厚而真挚的情谊。其间，祝英台多次以隐喻方式暗示自身真实身份，但梁山伯始终未能参透其中深意。"
      }
    },
    {
      title: { en: "Departure · Eighteen-Mile Send-off", zh: "离别 · 十八相送" },
      tag: { en: "The Farewell", zh: "离别" },
      desc: { 
        en: "Called home by her family, Yingtai had to cut her studies short. Liang Shanbo accompanied her for eighteen miles, a journey known as the 'Eighteen-Mile Send-off.' Along the way, she used images of mandarin ducks, reflections in a well, and temples to hint at her womanhood, even proposing a marriage with her 'ninth sister' in hopes he would propose. Alas, her intentions were not fully understood.",
        zh: "因家书催促，祝英台不得不中断学业，返乡省亲。梁山伯一路相送，自书院行至长亭，这段送别被后世称为“十八相送”。沿途，祝英台借景寄情，以鸳鸯、井中倒影、观音堂等意象反复暗示自身女儿之身，并托付“家中九妹”的婚约之意，盼梁山伯早日登门提亲。然而，这一切终究未被完全领悟。"
      }
    },
    {
      title: { en: "Metamorphosis · Eternal Souls", zh: "惊变 · 殉情 · 化蝶" },
      tag: { en: "The Transformation", zh: "归宿" },
      desc: { 
        en: "A year later, Liang discovered Yingtai's true identity and sought her hand, only to find she was betrothed to another. After Liang died of a broken heart, Yingtai's wedding procession passed his tomb. A storm broke, the grave opened, and she leapt inside to join him. From the tomb, two butterflies emerged, dancing together in eternal union. This legend, rooted in Tang Dynasty records like 'Xuan Shi Zhi,' has evolved through centuries of art into a romantic symbol of love transcending life and death.",
        zh: "一年后，梁山伯前往探访祝英台，方知昔日“贤弟”竟是女子。然而，英台已被许配给太守之子马文才。不久梁山伯抑郁而终。次年英台出嫁途中祭拜其坟，墓裂而入，二人合葬化作彩蝶，自此相随不离。其最早文献可追溯至唐代《宣室志》，经由宋元明清时期的戏曲与歌谣不断定型，使这一悲剧获得了超越生死的浪漫象征意义。"
      }
    }
  ];

  return (
    <div className="w-full bg-paper py-24 px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[0.5px] h-full bg-gradient-to-b from-transparent via-ink/10 to-transparent pointer-events-none hidden md:block" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-32 ink-reveal">
          <span className="font-script text-4xl text-cinnabar/60 mb-4 block">
            {language === 'en' ? 'A Tale of Two Souls' : '山伯与英台'}
          </span>
          <h2 className={`text-ink mb-8 leading-tight ${language === 'zh' ? 'font-calligraphy text-6xl' : 'font-serif text-5xl md:text-6xl tracking-tight'}`}>
            {language === 'en' ? 'The Butterfly Lovers' : '梁山伯与祝英台'}
          </h2>
          <div className="w-24 h-[0.5px] bg-ink/30 mx-auto mb-8"></div>
          <p className="text-ink-soft font-serif text-lg md:text-xl max-w-2xl mx-auto italic opacity-90 leading-relaxed whitespace-pre-wrap">
            {language === 'en' 
              ? 'This legend, originating in the Eastern Jin and recorded in the Tang Dynasty, has endured for a millennium. It encompasses both the immediate affinity of soulmates and the fiery passion of love that transcends death. Through folk arts and literature, it has been refined into the most poignant butterfly symbol in cultural memory.' 
              : '这是一个起源于东晋、记载于唐代，流传千年的爱情传说。它既包含一见如故的知己之情，也承载着生死相随的炽烈爱恋。其故事的核心骨架早见于古籍文献，后在戏曲、民间艺术与文学书写中不断被丰富与升华，最终化身为中华文化记忆中最为动人的“蝴蝶”象征。'}
          </p>
        </header>

        <div className="space-y-24 md:space-y-40">
          {narrative.map((item, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 w-full">
                <div className={`relative ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <div className="mb-4">
                    <span className="text-cinnabar font-script text-3xl opacity-70 block mb-1">
                      {language === 'en' ? `Chapter ${index + 1}` : `第${['一', '二', '三', '四'][index]}章`}
                    </span>
                    <span className="text-ink/40 font-serif text-xs uppercase tracking-[0.3em] block mb-2">
                      {language === 'en' ? item.tag.en : item.tag.zh}
                    </span>
                    <h3 className={`text-ink leading-none mb-6 ${
                      language === 'zh' ? 'font-calligraphy text-4xl md:text-5xl' : 'font-serif text-3xl md:text-4xl italic font-medium'
                    }`}>
                      {language === 'en' ? item.title.en : item.title.zh}
                    </h3>
                  </div>
                  
                  <div className={`relative p-8 md:p-10 border border-ink/5 bg-paper/40 backdrop-blur-sm group hover:border-ink/20 transition-colors duration-700`}>
                    {/* Decorative Corner */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-ink/20" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-ink/20" />
                    
                    <p className="text-ink-soft font-elegant text-base md:text-lg leading-loose relative z-10 whitespace-pre-wrap">
                      {language === 'en' ? item.desc.en : item.desc.zh}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Central Visual Anchor */}
              <div className="hidden md:flex flex-none items-center justify-center w-12 h-12 rounded-full border border-ink/10 bg-paper z-20 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-cinnabar/40" />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.section>
          ))}
        </div>

        <footer className="mt-40 text-center ink-reveal pb-10">
          <div className="w-px h-20 bg-gradient-to-b from-ink/20 to-transparent mx-auto mb-12"></div>
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-ink-soft font-elegant text-sm md:text-base leading-relaxed mb-6 italic">
              {language === 'en' 
                ? 'In what historical context is this moving legend rooted? How has it been retold through opera, music, and film? And what new understandings does it hold in a contemporary world?' 
                : '这个动人的传说，根植于怎样的历史语境之中？又是如何通过戏曲、音乐、影视等艺术形式不断被重述与演绎？在当代语境下，它又被赋予了怎样的新理解？'}
            </p>
            <p className="text-cinnabar font-serif text-xs md:text-sm tracking-[0.2em] font-bold uppercase">
              {language === 'en' 
                ? 'Welcome to explore further: "History" | "Heritage" | "Modern" | "Resources"' 
                : '欢迎继续浏览：「历史溯源」｜「非遗艺术」｜「当代演绎」｜「资料巡礼」'}
            </p>
          </div>
          <span className="font-calligraphy text-3xl text-ink/30">
            {language === 'en' ? 'Tears turn into wings...' : '生不同襟，死必同穴'}
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Legend;