import React from 'react';
import { Language } from '../types';
import { motion } from 'framer-motion';

interface LegendProps {
  language: Language;
}

const Legend: React.FC<LegendProps> = ({ language }) => {
  const chapters = [
    {
      title: { en: "Disguise & Departure", zh: "女扮男装" },
      text: { 
        en: "Zhu Yingtai, a young woman from a wealthy family in Shangyu, convinces her father to let her attend classes in Hangzhou by disguising herself as a man. This was an era when education was primarily reserved for men.",
        zh: "上虞祝家千金祝英台，女扮男装，说服父亲准其赴杭州求学。在那个时代，正规教育主要是为男子准备的。"
      },
      image: "https://picsum.photos/seed/departure/600/400"
    },
    {
      title: { en: "The Meeting at Bridge", zh: "草桥结拜" },
      text: { 
        en: "On her journey, she meets Liang Shanbo, a scholar from a humble background. They feel an immediate kinship and swear an oath of brotherhood at Caoqiao (Grass Bridge), unaware of the tragic fate ahead.",
        zh: "途中，她邂逅了出身贫寒的书生梁山伯。两人一见如故，于草桥义结金兰，却不知前方命运多舛。"
      },
      image: "https://picsum.photos/seed/bridge/600/400"
    },
    {
      title: { en: "Three Years of Study", zh: "同窗三载" },
      text: { 
        en: "For three years, they study together and share a room. Zhu Yingtai falls in love with Liang, managing to keep her gender a secret despite many close calls. Liang, a pure-hearted scholar, remains oblivious.",
        zh: "同窗三载，抵足而眠。祝英台爱上了梁山伯，并巧妙地保守着自己的性别秘密。而淳朴的梁山伯始终未曾察觉。"
      },
      image: "https://picsum.photos/seed/study/600/400"
    },
    {
      title: { en: "The Long Farewell", zh: "十八相送" },
      text: { 
        en: "Summoned home by her father, Zhu Yingtai departs. Liang accompanies her for 18 miles. Throughout the journey, she uses metaphors to hint at her identity and love, but Liang does not understand.",
        zh: "父命召唤，英台回乡。山伯相送十八里。一路上，英台借景喻情，暗示身份与爱意，奈何山伯不解风情。"
      },
      image: "https://picsum.photos/seed/farewell/600/400"
    },
    {
      title: { en: "Tragedy & Transformation", zh: "化蝶" },
      text: { 
        en: "When Liang finally visits Zhu and learns the truth, it is too late; she is betrothed to Ma Wencai. Heartbroken, Liang falls ill and dies. On her wedding day, Zhu passes Liang's grave, which opens up. She leaps in, and they emerge as two butterflies, never to be parted.",
        zh: "待山伯访祝家知晓真相，为时已晚；英台已许配马文才。山伯忧郁而终。大婚之日，英台路经山伯之墓，坟墓裂开，英台跃入其中。随后，二人化作彩蝶，翩翩起舞，永不分离。"
      },
      image: "https://picsum.photos/seed/butterfly/600/400"
    }
  ];

  return (
    <div className="w-full bg-rice-paper pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-20 text-center">
          <span className="text-cinnabar font-sans font-bold tracking-[0.2em] text-sm uppercase block mb-4">
             {language === 'en' ? 'Chapter I' : '第一章'}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-ink-black mb-6">
             {language === 'en' ? 'The Legend' : '梁祝传说'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cinnabar to-transparent mx-auto"></div>
        </header>

        <div className="space-y-24 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 before:to-transparent">
          {chapters.map((chapter, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-rice-paper bg-stone-300 group-hover:bg-cinnabar transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                <span className="w-2.5 h-2.5 bg-rice-paper rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 bg-white border border-stone-100 shadow-sm rounded-sm md:hover:-translate-y-2 transition-transform duration-500">
                <div className="aspect-video w-full overflow-hidden mb-6 bg-stone-100">
                    <img src={chapter.image} alt={chapter.title.en} className="w-full h-full object-cover sepia-[0.3] opacity-90 hover:opacity-100 hover:sepia-0 transition-all duration-700" />
                </div>
                <h3 className="font-serif text-2xl text-ink-black mb-3">
                  {language === 'en' ? chapter.title.en : chapter.title.zh}
                </h3>
                <p className="font-sans text-stone-600 leading-relaxed text-sm md:text-base">
                  {language === 'en' ? chapter.text.en : chapter.text.zh}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-10 bg-stone-100 border-l-4 border-cinnabar">
          <p className="font-serif italic text-lg text-stone-700 text-center">
            {language === 'en' 
              ? '"Life is a dream, and love is the butterfly that wakes us."' 
              : '“生如大梦，爱如惊醒梦中人的蝴蝶。”'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legend;