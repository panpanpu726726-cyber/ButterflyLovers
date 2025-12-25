import React from 'react';
import { Language } from '../types';
import { PlayCircle, Film, Monitor } from 'lucide-react';

interface ContemporaryProps {
  language: Language;
}

const Contemporary: React.FC<ContemporaryProps> = ({ language }) => {
  return (
    <div className="w-full bg-stone-900 text-stone-200 pt-24 pb-32 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-20">
           <span className="text-cinnabar font-sans font-bold tracking-[0.2em] text-sm uppercase block mb-4">
             {language === 'en' ? 'Chapter IV' : '第四章'}
           </span>
           <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
             {language === 'en' ? 'Contemporary Interpretation' : '当代演绎'}
           </h2>
           <div className="h-px w-full bg-gradient-to-r from-stone-700 to-transparent"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl text-white mb-4 flex items-center">
                <Film className="mr-3 text-cinnabar" />
                {language === 'en' ? 'Cinema & Animation' : '电影与动画'}
              </h3>
              <p className="text-stone-400 font-light leading-7">
                {language === 'en' 
                  ? 'From the classic 1963 Shaw Brothers musical film to the 2003 animated feature "The Butterfly Lovers", cinema has introduced the legend to new generations. These adaptations often modernize the dialogue while keeping the emotional core intact.'
                  : '从1963年邵氏兄弟的经典黄梅戏电影，到2003年的动画电影《梁山伯与祝英台》，电影艺术将这一传说介绍给了新一代观众。这些改编作品通常在保留情感核心的同时，对对白进行了现代化处理。'}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-white mb-4 flex items-center">
                <PlayCircle className="mr-3 text-cinnabar" />
                {language === 'en' ? 'Ballet & Dance' : '芭蕾与舞蹈'}
              </h3>
              <p className="text-stone-400 font-light leading-7">
                {language === 'en' 
                  ? 'The story translates beautifully into movement. The Shanghai Ballet\'s production of "The Butterfly Lovers" fuses classical ballet techniques with Chinese folk dance aesthetics, touring globally to critical acclaim.'
                  : '这个故事完美地转化为肢体语言。上海芭蕾舞团的《梁祝》融合了古典芭蕾技巧与中国民间舞蹈美学，在全球巡演中广受好评。'}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-white mb-4 flex items-center">
                <Monitor className="mr-3 text-cinnabar" />
                {language === 'en' ? 'Digital Media & Games' : '数字媒体与游戏'}
              </h3>
              <p className="text-stone-400 font-light leading-7">
                {language === 'en' 
                  ? 'Modern RPGs and visual novels often feature quests or storylines inspired by Liang Zhu. Virtual Reality experiences now allow users to virtually visit the Wansong Academy or witness the transformation into butterflies.'
                  : '现代角色扮演游戏和视觉小说经常包含受梁祝启发的任务或故事情节。虚拟现实体验现在允许用户虚拟参观万松书院或亲眼见证化蝶的奇迹。'}
              </p>
            </div>
          </div>

          <div className="relative h-full min-h-[500px] border border-stone-700 rounded-sm overflow-hidden">
             <img src="https://picsum.photos/seed/modernart/800/1000" alt="Modern Art Interpretation" className="absolute inset-0 w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700" />
             <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                <p className="font-serif italic text-lg text-white">
                  "{language === 'en' ? 'Tradition is not the worship of ashes, but the preservation of fire.' : '传统不是崇拜灰烬，而是薪火相传。'}"
                </p>
                <p className="text-stone-400 text-sm mt-2">- Gustav Mahler (Adapted)</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contemporary;