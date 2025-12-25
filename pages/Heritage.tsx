import React from 'react';
import { Language } from '../types';
import { Music, Mic2, Palette } from 'lucide-react';

interface HeritageProps {
  language: Language;
}

const Heritage: React.FC<HeritageProps> = ({ language }) => {
  return (
    <div className="w-full bg-rice-paper pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 md:flex justify-between items-end border-b border-stone-300 pb-8">
          <div>
            <span className="text-cinnabar font-sans font-bold tracking-[0.2em] text-sm uppercase block mb-2">
              {language === 'en' ? 'Chapter III' : '第三章'}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-ink-black">
              {language === 'en' ? 'Intangible Heritage' : '非物质文化遗产'}
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-stone-600 max-w-md text-right font-serif italic text-sm">
            {language === 'en' 
              ? 'In 2006, the Legend of Liang Zhu was included in the first batch of National Intangible Cultural Heritage in China.'
              : '2006年，梁祝传说被列入中国第一批国家级非物质文化遗产名录。'}
          </p>
        </header>

        {/* Yue Opera Feature */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row bg-stone-50 overflow-hidden shadow-lg rounded-sm">
            <div className="md:w-1/2 relative min-h-[400px]">
              <img 
                src="https://picsum.photos/seed/yueopera/800/800" 
                alt="Yue Opera Performer" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 px-4 py-1 text-xs font-bold uppercase tracking-widest text-ink-black">
                {language === 'en' ? 'Key Form' : '主要形式'}
              </div>
            </div>
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-6">
                <Mic2 className="text-cinnabar" size={24} />
                <h3 className="font-serif text-3xl text-ink-black">
                  {language === 'en' ? 'Yue Opera (Shaoxing Opera)' : '越剧'}
                </h3>
              </div>
              <p className="text-stone-600 leading-relaxed mb-6">
                {language === 'en' 
                  ? 'Yue Opera is the second most popular opera genre in China. The "Butterfly Lovers" is its most renowned repertoire. Known for its soft, melodic singing and elegant stylization, it perfectly captures the romantic and tragic essence of the story.'
                  : '越剧是中国第二大剧种。《梁祝》是其最负盛名的剧目。越剧以唱腔柔美婉转、表演细腻典雅著称，完美地诠释了这个故事的浪漫与悲剧本质。'}
              </p>
              <div className="space-y-4">
                <div className="border-l-2 border-stone-300 pl-4">
                   <h4 className="font-bold text-sm text-ink-black mb-1">{language === 'en' ? 'Notable Aria' : '著名唱段'}</h4>
                   <p className="text-sm text-stone-500 italic">{language === 'en' ? '"Seeing Off for 18 Miles" (Shi Ba Xiang Song)' : '《十八相送》'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid for other forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Music */}
          <div className="group">
             <div className="overflow-hidden aspect-[4/3] mb-6 relative">
               <img src="https://picsum.photos/seed/violin/800/600" alt="Violin Concerto" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div className="flex items-start">
                <Music className="text-cinnabar mt-1 mr-4 shrink-0" size={20} />
                <div>
                  <h3 className="font-serif text-2xl text-ink-black mb-3">
                    {language === 'en' ? 'The Violin Concerto' : '小提琴协奏曲'}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {language === 'en' 
                      ? 'Composed by He Zhanhao and Chen Gang in 1959, this orchestral masterpiece combines Western classical music structures with Chinese pentatonic melodies. It is one of the most recognized Chinese symphonic works globally.'
                      : '由何占豪、陈钢于1959年创作。这部管弦乐杰作将西方古典音乐结构与中国五声音阶旋律相结合。它是全球最著名的中国交响乐作品之一。'}
                  </p>
                </div>
             </div>
          </div>

          {/* Visual Arts */}
          <div className="group">
             <div className="overflow-hidden aspect-[4/3] mb-6 relative">
               <img src="https://picsum.photos/seed/papercut/800/600" alt="Paper Cutting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div className="flex items-start">
                <Palette className="text-cinnabar mt-1 mr-4 shrink-0" size={20} />
                <div>
                  <h3 className="font-serif text-2xl text-ink-black mb-3">
                    {language === 'en' ? 'Folk Art & Symbolism' : '民间艺术与象征'}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {language === 'en' 
                      ? 'The butterfly pair has become a universal symbol of undying love in Chinese culture, appearing frequently in paper-cutting, embroidery, and porcelain art. It represents the soul\'s liberation and the triumph of love over death.'
                      : '成双的蝴蝶已成为中国文化中至死不渝爱情的象征，频繁出现在剪纸、刺绣和瓷器艺术中。它代表了灵魂的解放和爱战胜死亡。'}
                  </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Heritage;