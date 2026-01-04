import React, { useState, useEffect } from 'react';
import { Language, SectionId } from '../types';
import { Film, Monitor, Zap, ChevronRight, ArrowUpRight, ArrowLeft, Users, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContemporaryProps {
  language: Language;
  onNavigate?: (id: SectionId) => void;
}

type SubPageId = 'overview' | 'stage' | 'digital' | 'pop' | 'thematic';

// Fixing the truncated component by adding missing return logic and default export
const Contemporary: React.FC<ContemporaryProps> = ({ language, onNavigate }) => {
  const [activeSubPage, setActiveSubPage] = useState<SubPageId>('overview');

  // Ensure scroll to top when changing internal views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSubPage]);

  // Image Placeholder Component for structural consistency
  const ImagePlaceholder = ({ aspect = "aspect-video" }) => (
    <div className={`w-full ${aspect} bg-ink/5 border border-ink/5 flex items-center justify-center relative overflow-hidden group`}>
      <img src="/images/placeholder.jpg" alt="placeholder" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
    </div>
  );

  // Sub-page Bottom Navigation
  const SubPageNav = ({ current }: { current: SubPageId }) => {
    const pages = [
      { id: 'stage', label: { en: 'Stage & Cinema', zh: '现代舞台与影像' } },
      { id: 'digital', label: { en: 'Digital & Interaction', zh: '数字媒介与交互' } },
      { id: 'pop', label: { en: 'Pop Culture', zh: '流行文化与传播' } },
      { id: 'thematic', label: { en: 'Thematic Translation', zh: '主题与现代视角' } },
    ] as const;

    return (
      <div className="mt-32 pt-12 border-t border-ink/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <button 
            onClick={() => setActiveSubPage('overview')}
            className="flex items-center gap-2 text-ink/60 hover:text-cinnabar transition-all font-serif text-sm uppercase tracking-widest border border-ink/10 px-6 py-3 bg-white"
          >
            <ArrowLeft size={16} /> {language === 'en' ? 'Back to Overview' : '返回当代演绎总览'}
          </button>
          
          <div className="flex flex-wrap justify-center gap-6">
            {pages.filter(p => p.id !== current).map(p => (
              <button
                key={p.id}
                onClick={() => setActiveSubPage(p.id as SubPageId)}
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink/30 hover:text-gold transition-colors flex items-center gap-2"
              >
                {language === 'en' ? p.label.en : p.label.zh} <ChevronRight size={12} />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // --- Sub-Pages Implementation ---

  const StageCinemaPage = () => (
    <div className="max-w-5xl mx-auto py-24 px-8">
      <button 
        onClick={() => setActiveSubPage('overview')}
        className="flex items-center gap-2 text-ink/40 hover:text-cinnabar transition-colors mb-12 font-serif text-sm uppercase tracking-widest group"
      >
        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {language === 'en' ? 'Back to Overview' : '返回总览'}
      </button>
      <header className="mb-20">
        <ImagePlaceholder aspect="aspect-[21/9]" />
        <h2 className="font-serif text-4xl md:text-5xl italic mt-12 mb-6 text-ink">
          {language === 'en' ? 'Modern Stage & Cinema' : '现代舞台与影像表达'}
        </h2>
        <p className="text-ink-soft font-serif text-lg md:text-xl italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'Exploring how traditional narratives are reconstructed through modern choreography and cinematic language. In the contemporary era, the stage becomes a laboratory where the 1,700-year-old script is stripped of its regional limitations to uncover universal truths about human desire and social resistance. Directors utilize non-linear editing in film and abstract bodily movement in dance to deconstruct the classic tropes of "Three Years of Study" and "Eighteen-Mile Send-off," transforming them into profound meditations on memory and loss.' 
            : '探索传统叙事如何通过现代舞台语言与影像技术完成时空重构。在当代语境下，舞台成为了一个实验场，将拥有1700年历史的文本剥离地域局限，转而挖掘人类欲望与社会抗争的普世真理。导演们利用电影的非线性剪辑与舞蹈的抽象肢体动作，解构了“三载同窗”与“十八相送”的经典范式，将其转化为关于记忆、丧失与重生的深刻冥想。'}
        </p>
      </header>
      <section className="space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Cinematic Deconstruction' : '影像对叙事的解构'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Modern film adaptations move away from linear storytelling, focusing on the psychological tension between the protagonists. Visual symbolism—especially the use of color and shadow—replaces literal explanations. By utilizing high-contrast lighting and fragmented montages, contemporary filmmakers frame the legend as a subjective experience rather than a historical record. This shift allows the audience to confront the internalized struggle of Zhu Yingtai, where every gaze and silence carries the weight of structural oppression, ultimately redefining the tragedy as a sophisticated cinematic dialogue between tradition and modernity.'
                : '现代影视改编逐渐脱离线性叙事，转向对主角内心张力的挖掘。色彩与光影的符号化运用取代了直白的台词，使经典悲剧具备了现代电影的深邃感。通过高对比度的用光与碎片化的蒙太奇，当代电影人将这一传说塑造为一种主观体验而非单纯的历史记录。这种转变使观众得以直面祝英台内心的挣扎，每一处凝视与沉默都承载着结构性压迫的重量，最终将这段悲剧重新定义为传统与现代之间精致的影像对话。'}
            </p>
          </div>
          <ImagePlaceholder aspect="aspect-square" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
          <ImagePlaceholder aspect="aspect-square" />
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Experimental Performance' : '实验剧场与舞剧'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Contemporary dance companies interpret "Metamorphosis" as a spiritual awakening. Body language transcends spoken word, turning the ancient legend into a universal expression of liberation. In these experimental settings, the stage design often employs minimalism to emphasize the raw vulnerability of the dancers. The physical exhaustion of the performers mimics the characters\' exhaustion within a rigid social hierarchy. By stripping away traditional operatic costumes and ornate sets, experimental theater focuses on the kinetic energy of love and the violent rupture of the soul, offering a visceral reconnection to the legend’s emotional core.'
                : '当代舞团将“化蝶”视为一种精神觉醒。肢体语言超越了言语的界限，将古老传说转化为一种关于解放与重生的普世表达。在实验性的剧场设置中，舞台设计往往采用极简主义，以强调舞者那未加修饰的脆弱感。表演者体力的消耗模拟了角色在僵化社会阶层中的精疲力竭。通过剥离传统的戏曲装束与华丽布景，实验剧场聚焦于爱之动能与灵魂的剧烈决裂，为观众提供了一种与传说情感核心最直观的感官连接。'}
            </p>
          </div>
        </div>
        <p className="text-ink-soft font-serif text-base leading-loose">
          {language === 'en'
            ? 'Overall, modern stage and cinematic adaptations of the Liang-Zhu legend serve as a vital bridge between historical reverence and avant-garde exploration, ensuring the narrative remains a living, breathing component of global performance culture that resonates with audiences across disparate aesthetic backgrounds.'
            : '总而言之，现代舞台与影视对梁祝传说的改编，充当了历史敬畏与先锋探索之间至关重要的桥梁，确保了这一叙事始终是全球表演文化中一个鲜活且具有生命力的组成部分，并能引起不同审美背景观众的深切共鸣。'}
        </p>
      </section>
      <SubPageNav current="stage" />
    </div>
  );

  const DigitalInteractionPage = () => (
    <div className="max-w-5xl mx-auto py-24 px-8">
      <button 
        onClick={() => setActiveSubPage('overview')}
        className="flex items-center gap-2 text-ink/40 hover:text-cinnabar transition-colors mb-12 font-serif text-sm uppercase tracking-widest group"
      >
        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {language === 'en' ? 'Back to Overview' : '返回总览'}
      </button>
      <header className="mb-20">
        <ImagePlaceholder aspect="aspect-[21/9]" />
        <h2 className="font-serif text-4xl md:text-5xl italic mt-12 mb-6 text-ink">
          {language === 'en' ? 'Digital Arts & Interaction' : '数字艺术与交互体验'}
        </h2>
        <p className="text-ink-soft font-serif text-lg md:text-xl italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'Redefining the relationship between the viewer and the legend through immersive technology. The digital frontier offers a new topography for the Butterfly Lovers, where historical data, algorithmic patterns, and sensory environments converge to create a non-linear museum experience. By leveraging Virtual Reality (VR) and Augmented Reality (AR), cultural curators can reconstruct the lost landscapes of the Eastern Jin, allowing participants to inhabit the story space. This technological mediation does not replace tradition but rather reactivates it, making the ancient narrative accessible to a generation raised on interactivity and digital fluidity.' 
            : '通过沉浸式技术重新定义观众与传说之间的交互关系。数字前沿为梁祝提供了全新的图景，历史数据、算法模式与感官环境在此交汇，构筑出非线性的博物馆体验。通过利用虚拟现实（VR）与增强现实（AR），文化策展人得以重建东晋已消逝的景观，让参与者栖居于故事空间之中。这种技术中介并非取代传统，而是激活了传统，使古老的叙事能够被在交互性与数字流动性中成长的一代人所触达。'}
        </p>
      </header>
      <section className="space-y-32">
        <div className="p-12 bg-ink text-paper border border-white/10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-[10px] font-bold tracking-[0.4em] text-gold uppercase mb-4 block">Future Practice</span>
              <h3 className="font-serif text-3xl italic mb-6">{language === 'en' ? 'UE Liang-Zhu Project' : 'UE 梁祝交互实验项目'}</h3>
              <p className="text-paper/60 font-serif text-base leading-loose">
                {language === 'en'
                  ? 'A conceptual exploration using real-time engines to create a responsive digital garden. This project focuses on spatial narrative and first-person agency in traditional heritage preservation. By integrating procedural generation with traditional ink-wash aesthetics, the environment reacts to the user\'s physical movements, symbolizing the symbiotic bond between the two souls. As users navigate the virtual Wansong Academy, their presence triggers shifts in the weather and audio landscape, mirroring the emotional arc of the legend. This experiment demonstrates how game engines can be repurposed as powerful tools for cultural documentation and emotional storytelling.'
                  : '基于实时引擎构建的感应式数字园林。该项目聚焦于传统遗产保护中的空间叙事与第一人称参与感。通过将程序化生成技术与传统水墨审美相结合，环境会根据用户的肢体动作产生感应，象征着两颗灵魂之间共生的羁绊。当用户在虚拟的万松书院中游走时，他们的存在将触发天气与音频景观的变换，以此映射传说的情感曲线。这一实验展示了游戏引擎如何被转化为文化记录与情感叙事的强大工具。'}
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <ImagePlaceholder aspect="aspect-square" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ImagePlaceholder aspect="aspect-video" />
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Immersive Participation' : '沉浸式参与叙事'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Digital exhibitions use sensors to bridge the gap between myth and reality. The audience no longer watches the metamorphosis; they influence its movement through presence. Contemporary interactive installations often employ bioluminescent projections and sound-mapping to envelop the visitor in the narrative. This immersive approach transforms the legend from a distant folk memory into an immediate, lived experience. By participating in digital rituals of send-off and reunion, the audience develops a deeper empathetic connection to the characters, proving that the core values of loyalty and sacrifice can be powerfully amplified through modern sensory engineering.'
                : '数字展览通过感应技术架起了神话与现实的桥。观众不再仅仅是旁观者，他们的介入直接影响着数字蝴蝶的飞舞轨迹。当代交互装置常利用生物荧光投影与声音映射将参观者包裹在叙事之中。这种沉浸式方法将传说从遥远的民间记忆转化为当下的、活态的体验。通过参与数字化的送别与重逢仪式，观众与角色之间建立了更深的情感共鸣，证明了忠诚与牺牲的核心价值可以通过现代感官工程得到强有力的放大。'}
            </p>
          </div>
        </div>
        <p className="text-ink-soft font-serif text-base leading-loose">
          {language === 'en'
            ? 'In summary, the digital transmediation of the Butterfly Lovers legend transforms the archive into an active participant in contemporary cultural life, proving that ancient myths can flourish within the most advanced technological infrastructures without losing their poetic essence.'
            : '总而言之，梁祝传说的数字化转译将静态的档案转化为当代文化生活的积极参与者，证明了古老的神话可以在最先进的技术架构中焕发生机，而不失其诗意本质。'}
        </p>
      </section>
      <SubPageNav current="digital" />
    </div>
  );

  const PopCulturePage = () => (
    <div className="max-w-5xl mx-auto py-24 px-8">
      <button 
        onClick={() => setActiveSubPage('overview')}
        className="flex items-center gap-2 text-ink/40 hover:text-cinnabar transition-colors mb-12 font-serif text-sm uppercase tracking-widest group"
      >
        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {language === 'en' ? 'Back to Overview' : '返回总览'}
      </button>
      <header className="mb-20">
        <ImagePlaceholder aspect="aspect-[21/9]" />
        <h2 className="font-serif text-4xl md:text-5xl italic mt-12 mb-6 text-ink">
          {language === 'en' ? 'Pop Culture' : '流行文化与社会传播'}
        </h2>
        <p className="text-ink-soft font-serif text-lg md:text-xl italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'How the legend continues to permeate music, fashion, and social media. In the era of mass communication, the Butterfly Lovers has undergone a process of iconization, where complex historical narratives are distilled into recognizable visual motifs. This commodification allows the legend to circulate beyond regional borders, embedding itself in the collective consciousness of a global audience. Whether through the stylistic tropes of contemporary illustration or the rhythmic structures of pop ballads, the legend is continuously reinvented to suit the consumption habits of modern society, acting as a flexible vehicle for romantic idealism.' 
            : '这段传说如何继续渗透到音乐、时尚和社交媒体中。在大众传播时代，梁祝经历了一个符号化的过程，复杂的历史叙事被凝练为可识别的视觉母题。这种商业化的运作使传说跨越了地域国界，嵌入全球观众的集体意识中。无论是通过当代插画的风格化表达，还是流行歌曲的节奏构造，这一传说都在不断被重塑，以适应现代社会的消费习惯，成为了浪漫理想主义的灵活载体。'}
        </p>
      </header>
      <section className="space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Visual Iconography' : '视觉符号的大众化'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'From modern animation character designs to commercial brand collaborations, the Butterfly Lovers have become a stable visual icon for romantic idealism in the Asian cultural market. The imagery of the "double butterfly" is now a universal shorthand for eternal union, appearing on everything from high-fashion textiles to digital emojis. This visual ubiquity ensures that the legend remains relevant in a fast-paced media environment. By adapting the traditional aesthetic into modern graphic languages—such as minimalist line art or vibrant pop-art palettes—designers maintain the narrative’s legacy while appealing to contemporary tastes, ensuring the story’s visual survival in an image-saturated world.'
                : '从现代动漫角色设计到商业跨界合作，“梁祝”已成为亚洲文化市场中代表浪漫理想主义的稳态视觉符号。“双蝶”意象如今已成为永恒结合的普世缩影，从高级时装的面料纹样到数字表情包无处不在。这种视觉上的无孔不入，确保了传说在快节奏的媒介环境中依然保有一席之地。通过将传统审美转译为现代图形语言——如极简线条艺术或鲜艳的波普风格色彩——设计师在迎合当代口味的同时维护了叙事遗产，确保故事在图像饱和的世界中实现视觉存续。'}
            </p>
          </div>
          <ImagePlaceholder aspect="aspect-video" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
          <ImagePlaceholder aspect="aspect-video" />
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Musical Remakes' : '流行音乐的再创作'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Pop musicians integrate Yue Opera arias into modern ballads, creating a bridge between traditional heritage and contemporary listeners. This fusion of "Guofeng" (national style) music utilizes orchestral arrangements and electronic beats to revitalize the classical pentatonic melodies. By re-recording the legendary violin concerto themes with modern synthesizers or incorporating spoken-word poetry into the lyrics, contemporary artists invite a younger generation to explore the story\'s emotional depth. These musical remakes function as a form of cultural archiving, where the auditory DNA of the legend is preserved and evolved through the dynamic currents of the global recording industry.'
                : '流行音乐人将越剧唱腔融入现代曲风，在传统文化遗产与当代听众之间搭建了一座审美之桥。这种“国风”音乐的融合利用管弦乐编排与电子节拍，使古典的五声音阶旋律重获新生。通过用现代合成器重新录制经典的小提琴协奏曲主题，或在歌词中加入朗诵诗词，当代艺术家邀请年轻一代探索故事的情感深度。这些音乐再创作充当了文化归档的一种形式，传说的听觉基因在全球录音工业的动态潮流中得到了保留与演进。'}
            </p>
          </div>
        </div>
        <p className="text-ink-soft font-serif text-base leading-loose">
          {language === 'en'
            ? 'Conclusively, the integration of Liang-Zhu motifs into popular culture and mass communication demonstrates the legend\'s enduring elasticity, allowing it to function as both a cherished heritage and a vibrant commercial icon in the modern world, bridging the gap between historical weight and light consumption.'
            : '总结而言，梁祝元素与流行文化及大众传播的融合，展现了这一传说持久的适应力，使其在现代世界中既作为珍贵的文化遗产，又作为充满活力的商业符号存在，在历史的厚重感与轻巧的消费习惯之间架起了桥梁。'}
        </p>
      </section>
      <SubPageNav current="pop" />
    </div>
  );

  const ThematicPage = () => (
    <div className="max-w-5xl mx-auto py-24 px-8">
      <button 
        onClick={() => setActiveSubPage('overview')}
        className="flex items-center gap-2 text-ink/40 hover:text-cinnabar transition-colors mb-12 font-serif text-sm uppercase tracking-widest group"
      >
        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {language === 'en' ? 'Back to Overview' : '返回总览'}
      </button>
      <header className="mb-20">
        <ImagePlaceholder aspect="aspect-[21/9]" />
        <h2 className="font-serif text-4xl md:text-5xl italic mt-12 mb-6 text-ink">
          {language === 'en' ? 'Thematic Translation' : '当代主题转化'}
        </h2>
        <p className="text-ink-soft font-serif text-lg md:text-xl italic opacity-70 max-w-3xl">
          {language === 'en' 
            ? 'Analyzing the eternal relevance of Liang-Zhu through modern sociological and philosophical lenses. Beyond the romantic surface, the tragedy of the Butterfly Lovers serves as a critical site for exploring the friction between individual desire and institutional power. Contemporary scholars and artists use the legend as a diagnostic tool to examine current social structures, framing the protagonists\' sacrifice as a radical act of defiance. This thematic repositioning moves the narrative away from mere sentimentality, transforming it into a rigorous intellectual framework for discussing autonomy, justice, and the transformative potential of love in an often-rigid world.' 
            : '通过现代社会学与哲学视角，剖析梁祝传说在当代的永恒启示。在浪漫的表象之下，梁祝悲剧成为了探讨个人欲望与制度权力之间摩擦的关键场域。当代学者与艺术家将这一传说作为一种诊断工具来审视当前的社会结构，将主角的牺牲塑造为一种激进的反抗行为。这种主题上的重定位使叙事脱离了单纯的感伤，将其转化为一个严谨的知识框架，用于讨论自治、公正以及在僵化世界中爱的变革潜力。'}
        </p>
      </header>
      <section className="space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Gender & Identity' : '性别意识与身份认同'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'Modern academic discourse re-examines Zhu Yingtai\'s cross-dressing as an early pursuit of gender equality and intellectual freedom, resonating deeply with modern identity politics. Her act of disguise is no longer seen as a mere plot device, but as a deliberate subversion of the patriarchal order. In contemporary queer studies and feminist theory, Zhu Yingtai is celebrated as a pioneer who challenged binary constraints. This reading emphasizes the fluidity of identity and the courage required to navigate spaces that deny one\'s true self. By re-framing the legend through these lenses, contemporary society finds a mirrors of its own struggles for recognition and the right to define one\'s own existence beyond traditional categories.'
                : '现代学术语境重新审视祝英台的女扮男装，将其视为对性别平等与精神自由的早期追求，与当代的身份政治产生了深刻共鸣。她的易装行为不再被仅仅视为一种剧情设定，而是对父权秩序的蓄意颠覆。在当代的酷儿研究与女性主义理论中，祝英台被誉为挑战二元局限的先驱。这种解读强调了身份的流动性，以及在被否定自我真实性的空间中穿行所需的勇气。通过这些视角重新审视传说，当代社会找到了自身争取认同、争取超越传统范畴定义自身存在权力的映射。'}
            </p>
          </div>
          <ImagePlaceholder aspect="aspect-square" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
          <ImagePlaceholder aspect="aspect-square" />
          <div>
            <h3 className="font-calligraphy text-3xl mb-6">{language === 'en' ? 'Individual vs. Structure' : '个体意志与社会结构'}</h3>
            <p className="text-ink-soft font-serif text-base leading-loose">
              {language === 'en'
                ? 'The tragedy is no longer viewed as purely romantic but as a critique of structural constraints. It serves as a fertile ground for discussing individual agency within rigid systems. The collision between the protagonists\' private feelings and the public obligations of their families mirrors the modern conflict between personal happiness and systemic expectations. Contemporary artists often emphasize the "immovability" of the grave as a metaphor for the stubbornness of social hierarchies. By focusing on the systemic forces that drive the characters to their end, the legend becomes a powerful commentary on the cost of non-conformity. This perspective invites the audience to question the unseen architectures of their own lives and the enduring power of those who choose to transform rather than submit.'
                : '这段悲剧不再仅仅被视为爱情故事，而是被解读为对结构性压迫的批判。它为探讨个体在僵化体制下的能动性提供了丰沃的土壤。主角私人情感与家族公共义务之间的碰撞，映射了当代个人幸福与系统预期之间的冲突。当代艺术家常强调“坟墓的不可移动性”，以此隐喻社会阶层的顽固。通过聚焦于将人物逼入绝境的系统性力量，这一传说成为了关于“不顺从代价”的有力评述。这一视角邀请观众质疑自身生活中看不见的建筑结构，并致敬那些选择自我转化而非屈服于体制的人们所拥有的持久力量。'}
            </p>
          </div>
        </div>
        <p className="text-ink-soft font-serif text-base leading-loose">
          {language === 'en'
            ? 'Ultimately, these contemporary thematic reinterpretations affirm that the Liang-Zhu tragedy is not a static relic of the past, but a flexible intellectual framework that continues to offer profound insights into the human condition and the universal pursuit of individual freedom across all cultural epochs.'
            : '归根结底，这些当代主题的重构肯定了梁祝悲剧并非一段静止的历史遗迹，而是一个灵活的知识框架，持续为人类境遇以及在所有文化时代中对个体自由的普世追求提供深刻的见解。'}
        </p>
      </section>
      <SubPageNav current="thematic" />
    </div>
  );

  const renderActiveView = () => {
    switch (activeSubPage) {
      case 'stage': return <StageCinemaPage />;
      case 'digital': return <DigitalInteractionPage />;
      case 'pop': return <PopCulturePage />;
      case 'thematic': return <ThematicPage />;
      default:
        return (
          <div className="max-w-7xl mx-auto px-8 py-24">
            <header className="mb-24 text-center">
              <span className="text-xs font-bold tracking-[0.4em] text-cinnabar/60 uppercase mb-4 block">Reimagining the Eternal</span>
              <h2 className={`text-ink mb-8 ${language === 'zh' ? 'font-calligraphy text-7xl' : 'font-serif text-5xl md:text-7xl italic font-medium'}`}>
                {language === 'en' ? 'Modern Interpretation' : '当代演绎 · 演绎视界'}
              </h2>
              <div className="w-24 h-[0.5px] bg-ink/20 mx-auto mb-10"></div>
              <p className="text-ink-soft font-serif text-lg md:text-xl max-w-3xl mx-auto leading-loose italic opacity-80">
                {language === 'en'
                  ? 'Beyond history and heritage, the legend lives on through contemporary art, digital media, and pop culture.'
                  : '超越历史与遗产，这段传说在当代艺术、数字媒体与流行文化中焕发新生。'}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { 
                  id: 'stage', 
                  title: { en: 'Stage & Cinema', zh: '舞台与影像' }, 
                  icon: <Film className="text-ink/40 group-hover:text-cinnabar transition-colors" size={32} strokeWidth={1} />, 
                  desc: { 
                    en: 'Contemporary reconstructions through choreography and cinematic language.', 
                    zh: '通过现代编舞与影视语言进行的当代叙事重构。' 
                  } 
                },
                { 
                  id: 'digital', 
                  title: { en: 'Digital Arts', zh: '数字艺术' }, 
                  icon: <Monitor className="text-ink/40 group-hover:text-jade transition-colors" size={32} strokeWidth={1} />, 
                  desc: { 
                    en: 'Interactive storytelling, VR/AR, and digital installations.', 
                    zh: '交互式叙事、VR/AR与数字装置艺术。' 
                  } 
                },
                { 
                  id: 'pop', 
                  title: { en: 'Pop Culture', zh: '流行文化与大众传播' }, 
                  icon: <Zap className="text-ink/40 group-hover:text-gold transition-colors" size={32} strokeWidth={1} />, 
                  desc: { 
                    en: 'How the legend enters the global mainstream through animation, music, and daily symbols.', 
                    zh: '梁祝如何通过动画、流行音乐与日常符号进入全球主流文化语境。' 
                  } 
                },
                { 
                  id: 'thematic', 
                  title: { en: 'Thematic Translation', zh: '当代视角下的主题转译' }, 
                  icon: <Users className="text-ink/40 group-hover:text-gold transition-colors" size={32} strokeWidth={1} />, 
                  desc: { 
                    en: 'Analyzing the eternal relevance of Liang-Zhu through modern sociological and philosophical lenses.', 
                    zh: '通过现代社会学与哲学视角，剖析梁祝传说在当代的永恒启示。' 
                  } 
                }
              ].map((module) => (
                <div 
                  key={module.id}
                  onClick={() => setActiveSubPage(module.id as SubPageId)}
                  className="group cursor-pointer bg-white border border-ink/5 p-8 shadow-sm hover:border-ink/20 transition-all flex flex-col"
                >
                  <div className="mb-6">
                    <ImagePlaceholder aspect="aspect-[16/9]" />
                  </div>
                  <div className="mb-8">{module.icon}</div>
                  <h3 className="font-calligraphy text-4xl mb-6 text-ink">{language === 'en' ? module.title.en : module.title.zh}</h3>
                  <p className="text-ink-soft font-serif text-base leading-loose mb-8 flex-grow">
                    {language === 'en' ? module.desc.en : module.desc.zh}
                  </p>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold flex items-center gap-2 mt-auto">
                    {language === 'en' ? 'Explore Unit' : '探索单元'} <ArrowUpRight size={12} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full bg-paper min-h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSubPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderActiveView()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Contemporary;