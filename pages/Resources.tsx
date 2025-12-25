import React from 'react';
import { Language } from '../types';
import { ExternalLink, Landmark, Book } from 'lucide-react';

interface ResourcesProps {
  language: Language;
}

const Resources: React.FC<ResourcesProps> = ({ language }) => {
  const references = [
    {
      title: { en: "Liang-Zhu Cultural Park", zh: "梁祝文化公园" },
      desc: { en: "Located in Ningbo, a large theme park featuring historical sites.", zh: "位于宁波，是一个集古迹与文化展示为一体的大型主题公园。" },
      type: "Museum"
    },
    {
      title: { en: "The Museum of the Wansong Academy", zh: "万松书院博物馆" },
      desc: { en: "The actual historical site in Hangzhou where the lovers studied.", zh: "位于杭州，是传说中二人同窗共读的历史遗址。" },
      type: "Site"
    },
    {
      title: { en: "UNESCO Intangible Heritage List", zh: "联合国教科文组织非遗名录" },
      desc: { en: "Search for Chinese folk literature entries.", zh: "查询中国民间文学相关条目。" },
      type: "Archive"
    }
  ];

  return (
    <div className="w-full bg-rice-paper pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16 text-center">
           <h2 className="font-serif text-3xl md:text-4xl text-ink-black mb-4">
             {language === 'en' ? 'Resources & References' : '资料与参考文献'}
           </h2>
           <p className="text-stone-500">
             {language === 'en' ? 'Explore further into the legend' : '进一步探索传说'}
           </p>
        </header>

        <div className="grid gap-6">
          {references.map((ref, idx) => (
            <div key={idx} className="bg-white p-6 border border-stone-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-cinnabar transition-colors">
              <div className="flex items-start">
                 <div className="bg-stone-100 p-3 rounded-full mr-4 text-stone-600">
                    {ref.type === 'Site' || ref.type === 'Museum' ? <Landmark size={20} /> : <Book size={20} />}
                 </div>
                 <div>
                   <h3 className="font-serif text-lg text-ink-black font-bold mb-1">
                     {language === 'en' ? ref.title.en : ref.title.zh}
                   </h3>
                   <p className="text-sm text-stone-600">
                     {language === 'en' ? ref.desc.en : ref.desc.zh}
                   </p>
                 </div>
              </div>
              <button className="mt-4 sm:mt-0 text-cinnabar text-sm font-bold uppercase tracking-widest flex items-center hover:underline">
                {language === 'en' ? 'Visit' : '访问'} <ExternalLink size={14} className="ml-1" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-stone-100 text-center border-t border-stone-300">
          <p className="text-xs text-stone-500 font-mono">
            {language === 'en' 
              ? 'This digital exhibition serves educational purposes. All images are for demonstration.'
              : '本数字展馆仅作教育用途。所有图片均为演示使用。'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;