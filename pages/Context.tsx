import React from 'react';
import { Language } from '../types';
import { Scroll, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContextProps {
  language: Language;
}

const Context: React.FC<ContextProps> = ({ language }) => {
  return (
    <div className="w-full bg-[#F5F2EB] pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-20 text-center">
          <span className="text-stone-500 font-sans font-bold tracking-[0.2em] text-sm uppercase block mb-4">
             {language === 'en' ? 'Chapter II' : '第二章'}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-ink-black mb-6">
             {language === 'en' ? 'Historical Context' : '历史背景'}
          </h2>
          <p className="max-w-2xl mx-auto text-stone-600 font-serif italic">
            {language === 'en' 
              ? 'Understanding the Eastern Jin Dynasty (317–420 AD)' 
              : '了解东晋时期 (公元317–420年)'}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-rice-paper p-8 border-t-4 border-stone-800 shadow-sm"
          >
            <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mb-6 text-stone-700">
              <Scroll size={24} />
            </div>
            <h3 className="font-serif text-xl mb-4 text-ink-black">
              {language === 'en' ? 'The Nine-Rank System' : '九品中正制'}
            </h3>
            <p className="text-stone-600 text-sm leading-7">
              {language === 'en'
                ? 'Society was strictly stratified. The "Nine-Rank System" determined political status based on family background. Liang Shanbo represents the humble scholar class, while Zhu Yingtai comes from the wealthy gentry, making their union politically difficult.'
                : '社会等级森严。“九品中正制”以门第定品级。梁山伯代表寒门书生，祝英台则出身士族大家，门第悬殊使得他们的结合在政治和社会层面困难重重。'}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-rice-paper p-8 border-t-4 border-cinnabar shadow-sm"
          >
            <div className="w-12 h-12 bg-cinnabar/10 rounded-full flex items-center justify-center mb-6 text-cinnabar">
              <BookOpen size={24} />
            </div>
            <h3 className="font-serif text-xl mb-4 text-ink-black">
              {language === 'en' ? 'Women & Education' : '女性与教育'}
            </h3>
            <p className="text-stone-600 text-sm leading-7">
              {language === 'en'
                ? 'Formal academies were exclusively for men. Zhu Yingtai’s disguise wasn’t just a plot device; it was an act of subversion against Confucian norms that restricted women to the domestic sphere. Her desire for knowledge was revolutionary.'
                : '正规书院仅招收男子。祝英台的女扮男装不仅是剧情需要，更是对将女性局限于家庭的儒家礼教的反叛。她对知识的渴望具有革命性意义。'}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-rice-paper p-8 border-t-4 border-stone-800 shadow-sm"
          >
            <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mb-6 text-stone-700">
              <Users size={24} />
            </div>
            <h3 className="font-serif text-xl mb-4 text-ink-black">
              {language === 'en' ? 'Arranged Marriages' : '包办婚姻'}
            </h3>
            <p className="text-stone-600 text-sm leading-7">
              {language === 'en'
                ? 'Marriage was a contract between families ("Matchmaker\'s word, Parents\' order"). Personal choice was secondary to family alliance. The tragedy of Liang Zhu is a critique of this rigid feudal marriage system.'
                : '婚姻是家族间的契约（“父母之命，媒妁之言”）。个人意愿往往让位于家族利益。梁祝的悲剧正是对这种僵化的封建婚姻制度的控诉。'}
            </p>
          </motion.div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-stone-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#F5F2EB] px-4 text-stone-500 font-serif italic text-lg">
              {language === 'en' ? 'Geographic Setting: Zhejiang Province' : '地理背景：浙江省'}
            </span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone-300">
           <div className="bg-stone-200 min-h-[300px] relative overflow-hidden group">
              <img src="https://picsum.photos/seed/hangzhou/800/600" alt="Hangzhou" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" />
              <div className="absolute bottom-0 left-0 p-4 bg-ink-black/80 text-white w-full">
                <span className="block font-bold">Wansong Academy (Hangzhou)</span>
                <span className="text-xs text-stone-300">Where they studied</span>
              </div>
           </div>
           <div className="bg-stone-200 min-h-[300px] relative overflow-hidden group">
              <img src="https://picsum.photos/seed/ningbo/800/600" alt="Ningbo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" />
               <div className="absolute bottom-0 left-0 p-4 bg-ink-black/80 text-white w-full">
                <span className="block font-bold">Ningbo (Liang Park)</span>
                <span className="text-xs text-stone-300">Where the tragedy concluded</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Context;