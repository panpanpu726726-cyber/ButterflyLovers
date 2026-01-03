import React from 'react';
import { Language } from '../types';
import { Scroll, Users, BookOpen, Sparkles, Map, Landmark, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContextProps {
  language: Language;
}

const Context: React.FC<ContextProps> = ({ language }) => {
  return (
    <div className="w-full bg-paper min-h-screen relative overflow-hidden">
      {/* 1. Cinematic Opening Module */}
      <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center border-b border-ink/5 bg-paper/50 overflow-hidden">
        {/* Visual Background Placeholder Structure */}
        <figure className="absolute inset-0 z-0 pointer-events-none image-placeholder">
          <div className="absolute inset-0 opacity-[0.03] grayscale brightness-110">
            <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=2000" alt="Historical atmosphere" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-paper/80 via-transparent to-paper"></div>
          {/* Abstract geometric structure acting as an architectural placeholder */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[0.5px] border-ink/5 rounded-full opacity-20"></div>
        </figure>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <span className="font-script text-4xl text-cinnabar/60 mb-6 block tracking-widest">
            {language === 'en' ? 'A Millennial Mirror' : '千年之鉴'}
          </span>
          <h1 className={`text-ink mb-10 leading-tight ${language === 'zh' ? 'font-calligraphy text-7xl md:text-8xl' : 'font-serif text-5xl md:text-7xl tracking-tighter'}`}>
            {language === 'en' ? 'Historical Context' : '时代背景'}
          </h1>
          <div className="w-32 h-[1px] bg-ink/20 mx-auto mb-10"></div>
          <p className="text-ink-soft font-serif text-xl md:text-2xl max-w-3xl mx-auto italic leading-relaxed opacity-90">
            {language === 'en' 
              ? 'A tragic love story is never accidental. The fate of Liang Shanbo and Zhu Yingtai was deeply embedded in the social structures and value systems of the Eastern Jin Dynasty.' 
              : '一段爱情悲剧，从来不是偶然。梁山伯与祝英台的命运，深深嵌入东晋时代的社会结构、价值体系与文化观念之中。'}
          </p>
        </motion.div>
      </section>

      {/* 2. Intro Narrative Module */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6 text-gold">
              <Quote size={24} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase">{language === 'en' ? 'Perspective' : '视角'}</span>
            </div>
            <p className="text-ink font-serif text-lg leading-loose italic opacity-80">
              {language === 'en'
                ? 'To understand the butterfly, one must first understand the walls of the cocoon. These cultural lenses reveal why their tragedy was not just a twist of fate, but an inevitable consequence of their era.'
                : '要理解那双破茧而出的彩蝶，必须先理解那层厚重的蚕茧。透过这些关键词，我们得以窥见悲剧为何在那个时代必然发生。'}
            </p>
          </div>
          <div className="hidden md:block w-px h-32 bg-ink/10"></div>
          <div className="flex-none md:w-1/3 text-center md:text-left">
             <span className="font-calligraphy text-6xl text-ink/10 select-none block leading-none mb-2">晋</span>
             <span className="text-[10px] font-bold text-ink/30 tracking-[0.4em] uppercase">Eastern Jin (317-420 AD)</span>
          </div>
        </div>
      </section>

      {/* 3. Era Supplement Module - "The Pillars of Reality" */}
      <section className="w-full bg-ink/5 py-12 mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { en: '317–420 AD', zh: '公元317–420年', icon: <Landmark size={16}/> },
              { en: 'Jiangnan Region', zh: '江南地域', icon: <Map size={16}/> },
              { en: 'Scholarly Migration', zh: '士族南迁', icon: <Scroll size={16}/> },
              { en: 'Confucian Order', zh: '儒家礼制', icon: <BookOpen size={16}/> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 opacity-60">
                <span className="text-cinnabar">{item.icon}</span>
                <span className="font-serif text-[11px] md:text-xs font-bold tracking-widest uppercase">{language === 'en' ? item.en : item.zh}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Knowledge Card Module - The 7 Lenses */}
      <section className="max-w-6xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="context-card group bg-white/30 border border-ink/5 relative overflow-hidden transition-all duration-500 hover:border-cinnabar/20 hover:bg-white/60"
          >
            <div className="image-placeholder w-full aspect-[21/9] bg-ink/[0.03] border-b border-ink/5 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ink/20 via-transparent to-transparent"></div>
            </div>
            <div className="p-8 pt-6">
              <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:scale-110 transition-transform">
                <Scroll size={80} />
              </div>
              <span className="text-cinnabar font-script text-2xl mb-2 block">01</span>
              <h3 className="font-calligraphy text-2xl mb-4 text-ink">{language === 'en' ? 'Social Hierarchy' : '门第制度'}</h3>
              <p className="text-ink-soft font-serif text-[13px] leading-relaxed relative z-10">
                {language === 'en'
                  ? 'Lineage determined one’s future, and class-bound marriage was an unbreakable rule. Their tragedy was rooted in this rigid hierarchy.'
                  : '东晋时期，门阀士族掌握社会资源，家族出身决定人生道路。“士庶不通婚”是铁律。祝英台的婚姻必须服务于家族利益，梁山伯的寒门身份奠定了悲剧根源。'}
              </p>
              <div className="w-8 h-px bg-ink/20 mt-6 group-hover:w-16 transition-all"></div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="context-card group bg-white/30 border border-ink/5 relative overflow-hidden transition-all duration-500 hover:border-cinnabar/20 hover:bg-white/60"
          >
            <div className="image-placeholder w-full aspect-[21/9] bg-ink/[0.03] border-b border-ink/5 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-700 bg-[conic-gradient(from_0deg_at_center,_var(--tw-gradient-stops))] from-ink/10 via-transparent to-transparent"></div>
            </div>
            <div className="p-8 pt-6">
              <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:scale-110 transition-transform">
                <Sparkles size={80} />
              </div>
              <span className="text-cinnabar font-script text-2xl mb-2 block">02</span>
              <h3 className="font-calligraphy text-2xl mb-4 text-ink">{language === 'en' ? 'Wei–Jin Elegance' : '魏晋风度'}</h3>
              <p className="text-ink-soft font-serif text-[13px] leading-relaxed relative z-10">
                {language === 'en'
                  ? 'Influenced by Daoist philosophy, scholars valued individuality and emotional expression, a spirit called “Wei–Jin elegance.” This climate made her pursuit of education possible.'
                  : '战乱频仍催生了思想解放。玄学兴盛，士人追求个性、情感与精神自由。这种“魏晋风度”使祝英台突破女性禁锢、选择求学在精神上成为可能。'}
              </p>
              <div className="w-8 h-px bg-ink/20 mt-6 group-hover:w-16 transition-all"></div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="context-card group bg-white/30 border border-ink/5 relative overflow-hidden transition-all duration-500 hover:border-cinnabar/20 hover:bg-white/60"
          >
            <div className="image-placeholder w-full aspect-[21/9] bg-ink/[0.03] border-b border-ink/5 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-700 bg-[linear-gradient(to_bottom_right,_var(--tw-gradient-stops))] from-ink/20 via-transparent to-transparent"></div>
            </div>
            <div className="p-8 pt-6">
              <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:scale-110 transition-transform">
                <Users size={80} />
              </div>
              <span className="text-cinnabar font-script text-2xl mb-2 block">03</span>
              <h3 className="font-calligraphy text-2xl mb-4 text-ink">{language === 'en' ? 'Traveling Scholars' : '女子游学'}</h3>
              <p className="text-ink-soft font-serif text-[13px] leading-relaxed relative z-10">
                {language === 'en'
                  ? 'In the Six Dynasties, women’s education was relatively tolerated, but traveling to study remained extraordinary and challenged gender norms.'
                  : '汉魏六朝时期，江南地区对女性才学相对宽容，但离家游学仍属惊世之举。祝英台女扮男装求学不仅挑战性别秩序，也埋下了身份必然暴露的隐忧。'}
              </p>
              <div className="w-8 h-px bg-ink/20 mt-6 group-hover:w-16 transition-all"></div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="context-card group bg-white/30 border border-ink/5 relative overflow-hidden transition-all duration-500 hover:border-cinnabar/20 hover:bg-white/60"
          >
            <div className="image-placeholder w-full aspect-[21/9] bg-ink/[0.03] border-b border-ink/5 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-700 bg-paper/20"></div>
            </div>
            <div className="p-8 pt-6">
              <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:scale-110 transition-transform">
                <Landmark size={80} />
              </div>
              <span className="text-cinnabar font-script text-2xl mb-2 block">04</span>
              <h3 className="font-calligraphy text-2xl mb-4 text-ink">{language === 'en' ? 'Academic Culture' : '同窗文化'}</h3>
              <p className="text-ink-soft font-serif text-[13px] leading-relaxed relative z-10">
                {language === 'en'
                  ? 'The rise of private academies allowed students to study across regions. Their shared years as classmates reflected genuine educational practices of the time.'
                  : '游学与私学兴盛，使不同地域的学子得以结伴。书院成为思想交流的空间。“三年同窗”并非浪漫虚构，而是当时知识流动背景下的真实社会场景。'}
              </p>
              <div className="w-8 h-px bg-ink/20 mt-6 group-hover:w-16 transition-all"></div>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="context-card group bg-white/30 border border-ink/5 relative overflow-hidden transition-all duration-500 hover:border-cinnabar/20 hover:bg-white/60"
          >
            <div className="image-placeholder w-full aspect-[21/9] bg-ink/[0.03] border-b border-ink/5 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-700 bg-ink/5"></div>
            </div>
            <div className="p-8 pt-6">
              <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:scale-110 transition-transform">
                <Scroll size={80} />
              </div>
              <span className="text-cinnabar font-script text-2xl mb-2 block">05</span>
              <h3 className="font-calligraphy text-2xl mb-4 text-ink">{language === 'en' ? 'Marital Ethics' : '婚姻伦理'}</h3>
              <p className="text-ink-soft font-serif text-[13px] leading-relaxed relative z-10">
                {language === 'en'
                  ? 'Marriage served family alliances. Arranged unions were moral and legal obligations, making Zhu’s betrothal a social norm rather than individual cruelty.'
                  : '婚姻是家族事务而非个人选择。“父母之命，媒妁之言”具有法律效力。祝英台被许配马家，是父亲履行家族责任的行为，而非单纯的情感压迫。'}
              </p>
              <div className="w-8 h-px bg-ink/20 mt-6 group-hover:w-16 transition-all"></div>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="context-card group bg-white/30 border border-ink/5 relative overflow-hidden transition-all duration-500 hover:border-cinnabar/20 hover:bg-white/60"
          >
            <div className="image-placeholder w-full aspect-[21/9] bg-ink/[0.03] border-b border-ink/5 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-700 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-cinnabar/10 via-transparent to-transparent"></div>
            </div>
            <div className="p-8 pt-6">
              <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:scale-110 transition-transform">
                <BookOpen size={80} />
              </div>
              <span className="text-cinnabar font-script text-2xl mb-2 block">06</span>
              <h3 className="font-calligraphy text-2xl mb-4 text-ink">{language === 'en' ? 'Soul Beliefs' : '灵魂观念'}</h3>
              <p className="text-ink-soft font-serif text-[13px] leading-relaxed relative z-10">
                {language === 'en'
                  ? 'Belief in the soul led to spirit marriage. The shared grave symbolizes a posthumous reunion, offering resolution beyond social constraints.'
                  : '古人相信灵魂不灭，未竟之缘可在死后完成。“坟裂合葬”源于冥婚与亡灵信仰，是民间对现实悲剧的一种精神补偿，赋予了结局超越时空的重逢。'}
              </p>
              <div className="w-8 h-px bg-ink/20 mt-6 group-hover:w-16 transition-all"></div>
            </div>
          </motion.div>

          {/* Card 7 - Featured Landscape Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 lg:col-span-3 context-card group flex flex-col lg:flex-row gap-8 bg-paper border border-ink/10 p-8 shadow-sm transition-all duration-700 hover:border-gold/30"
          >
            <figure className="lg:w-1/2 aspect-video overflow-hidden grayscale opacity-80 group-hover:grayscale-0 transition-all duration-1000 image-placeholder">
               <img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1200" alt="Metamorphosis visualization" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform" />
            </figure>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={24} className="text-gold/60" />
                <h3 className="font-calligraphy text-3xl text-ink leading-none">{language === 'en' ? 'The Symbolism of Metamorphosis' : '化蝶：浪漫的终曲'}</h3>
              </div>
              <p className="text-ink-soft font-serif text-base leading-loose mb-6">
                {language === 'en'
                  ? 'The transformation into butterflies was a later addition, symbolizing freedom, love, and spiritual transcendence. It elevated the story from tragedy to an enduring cultural myth.'
                  : '“化蝶”并非故事最早结局，而是后世民间的浪漫升华。蝴蝶象征自由、爱情与灵魂重生，使梁祝从现实悲剧升华为跨越生死的文化象征。'}
              </p>
              <div className="flex gap-4">
                <span className="px-3 py-1 border border-ink/10 text-[10px] uppercase font-bold tracking-widest text-ink/40">Symbol: Rebirth</span>
                <span className="px-3 py-1 border border-ink/10 text-[10px] uppercase font-bold tracking-widest text-ink/40">Myth: Freedom</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. Synthesis Module - Final Reflection */}
      <footer className="w-full py-40 bg-ink flex flex-col items-center justify-center text-center px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-2xl"
        >
          <p className="text-paper/60 font-script text-3xl mb-12">
            {language === 'en' ? 'The butterfly is the soul breaking the cycle...' : '化蝶，是灵魂对轮回的决绝抗辩。'}
          </p>
          <div className="h-px w-20 bg-paper/20 mx-auto mb-12"></div>
          <p className="text-paper/40 font-serif text-sm tracking-[0.2em] leading-relaxed italic">
            {language === 'en' 
              ? 'To understand the legend is to understand the struggle of the spirit against the chains of time.' 
              : '理解这段传说，便是理解灵魂在时光锁链下的不屈抗争。'}
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Context;