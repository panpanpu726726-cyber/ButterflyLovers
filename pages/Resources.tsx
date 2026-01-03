
import React from 'react';
import { Language } from '../types';
import { ExternalLink, Landmark, BookOpen, MapPin, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResourcesProps {
  language: Language;
}

const Resources: React.FC<ResourcesProps> = ({ language }) => {
  
  // Reusable Link Component for standardized entry points
  // Fixed: typed as React.FC to properly support implicit props like 'key' in list rendering
  const ResourceLink: React.FC<{ label: string; url: string }> = ({ label, url }) => (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-paper/80 hover:text-white transition-all group py-2"
    >
      <span className="border-b border-paper/20 group-hover:border-white pb-1">{label}</span>
      <ExternalLink size={12} className="opacity-50 group-hover:opacity-100" />
    </a>
  );

  // Reusable Module Component
  // Fixed: typed as React.FC for consistent typing
  const ResourceModule: React.FC<{ 
    title: { en: string; zh: string }; 
    desc: { en: string; zh: string }; 
    links: { label: string; url: string }[]; 
    icon: React.ReactNode;
    placeholderLabel: string;
  }> = ({ 
    title, 
    desc, 
    links, 
    icon, 
    placeholderLabel 
  }) => (
    <section className="relative w-full min-h-[400px] flex items-center overflow-hidden border-b border-paper/10">
      {/* Module Background Placeholder */}
      <div className="absolute inset-0 z-0 bg-ink">
        <div className="absolute inset-0 opacity-20 grayscale brightness-50">
           {/* Structural Placeholder Pattern */}
           <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent flex items-center justify-center">
             <span className="text-[10px] font-bold tracking-[1em] uppercase text-white/5">{placeholderLabel}</span>
           </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-gold mb-6 opacity-80">
            {icon}
            <div className="h-px w-8 bg-gold/30"></div>
          </div>
          <h3 className={`text-paper mb-6 ${language === 'zh' ? 'font-calligraphy text-4xl' : 'font-serif text-3xl italic'}`}>
            {language === 'en' ? title.en : title.zh}
          </h3>
          <p className="text-paper/60 font-serif text-sm leading-loose mb-10 max-w-xl italic">
            {language === 'en' ? desc.en : desc.zh}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-12 gap-y-4">
            {links.map((link, idx) => (
              <ResourceLink key={idx} label={link.label} url={link.url} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="w-full bg-ink min-h-screen text-paper selection:bg-gold selection:text-ink">
      
      {/* 1. PAGE TOP / HERO */}
      <header className="max-w-6xl mx-auto pt-32 pb-20 px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl italic mb-8 tracking-tight">
            Resources <span className="text-paper/30 ml-4 font-normal not-italic">· Authoritative References</span>
          </h1>
          <div className="w-12 h-[1px] bg-gold/50 mb-8"></div>
          <p className="text-paper/50 font-serif text-base md:text-lg max-w-2xl leading-relaxed italic">
            {language === 'en' 
              ? 'A curated gateway to primary sources, institutional archives, and academic platforms dedicated to the preservation of the Liang-Zhu legacy.' 
              : '为您整理的梁祝文化权威资源入口，涵盖原始文献、机构档案及学术平台，致力于遗产的严谨存续。'}
          </p>
        </motion.div>
      </header>

      {/* 2. MODULE I: HISTORICAL & TEXTUAL */}
      <ResourceModule 
        icon={<BookOpen size={20} />}
        placeholderLabel="Textual Archive Visual"
        title={{ en: 'Historical & Textual Records', zh: '历史文献与古籍记录' }}
        desc={{ 
          en: 'Liang-Zhu stands as a foundational narrative within Chinese folk literature. These textual records trace its transformation from early Tang dynasty anecdotes to the codified literary and theatrical scripts established during the Ming and Qing periods.', 
          zh: '梁祝传说是中国民间文学体系中的重要母题。这一文献脉络完整呈现了其从唐代志怪文本的初步记载，逐步演变为明清时期戏曲与文学叙事定型的历史过程。' 
        }}
        links={[
          { label: language === 'en' ? 'National Digital Library of China' : '中国国家图书馆 - 中华古籍资源库', url: 'http://read.nlc.cn/allSearch/searchList?searchType=14' },
          { label: language === 'en' ? 'Ancient Books Digital Project' : '中国古籍保护网', url: 'http://www.nlc.cn/pcab/' },
          { label: language === 'en' ? 'Sinology Text Database' : '国家哲学社会科学文献中心', url: 'http://www.ncpssd.org/' }
        ]}
      />

      {/* 3. MODULE II: MUSEUMS & INSTITUTIONS */}
      <ResourceModule 
        icon={<Landmark size={20} />}
        placeholderLabel="Institutional Architecture Visual"
        title={{ en: 'Museums & Cultural Institutions', zh: '博物馆与文化机构' }}
        desc={{ 
          en: 'National and regional museums function as custodians of both material artifacts and intangible narratives, supporting the documentation, research, and public presentation of Liang-Zhu–related cultural heritage.', 
          zh: '国家级与地方级博物馆及文化机构作为文化记忆的守护者，承担着梁祝相关物质遗存与非物质文化内容的整理、研究与公共传播职责。' 
        }}
        links={[
          { label: language === 'en' ? 'China Intangible Heritage Net' : '中国非物质文化遗产网', url: 'https://www.ihchina.cn/' },
          { label: language === 'en' ? 'Zhejiang Provincial Museum' : '浙江省博物馆官方平台', url: 'http://www.zjmuseum.com.cn/' },
          { label: language === 'en' ? 'Ningbo Museum' : '宁波博物馆', url: 'https://www.nbmuseum.cn/' }
        ]}
      />

      {/* 4. MODULE III: SITES & ARCHITECTURE */}
      <ResourceModule 
        icon={<MapPin size={20} />}
        placeholderLabel="Historical Site Landscape"
        title={{ en: 'Sites & Architecture', zh: '历史遗迹与空间建筑' }}
        desc={{ 
          en: 'Sites such as Wansong Academy provide spatial anchors for the Liang-Zhu narrative, bridging literary tradition with physical landscapes and forming key reference points for historical interpretation.', 
          zh: '以万松书院为代表的历史空间，为梁祝传说提供了可被实地感知的文化坐标，使文学叙事得以与真实历史环境产生连接。' 
        }}
        links={[
          { label: language === 'en' ? 'Wansong Academy (West Lake)' : '杭州西湖风景名胜区 - 万松书院', url: 'https://westlake.hangzhou.gov.cn/' },
          { label: language === 'en' ? 'UNESCO Intangible Cultural Heritage Lists (China Entries)' : '联合国教科文组织非遗名录（中国项目总览）', url: 'https://ich.unesco.org/en/lists' }
        ]}
      />

      {/* 5. MODULE IV: ACADEMIC RESEARCH */}
      <ResourceModule 
        icon={<GraduationCap size={20} />}
        placeholderLabel="Academic Research Visual"
        title={{ en: 'Academic Research Platforms', zh: '学术研究与专业平台' }}
        desc={{ 
          en: 'Academic institutions and research platforms contribute critical perspectives on the Liang-Zhu narrative through folklore studies, cultural history, gender discourse, and heritage heritage conservation research.', 
          zh: '学术研究平台通过民俗学、文化史、性别研究及遗产保护等多重视角，对梁祝文化展开系统性研究，为其当代阐释与传承提供理论支持。' 
        }}
        links={[
          { label: language === 'en' ? 'CNKI - Folklore Studies' : '中国知网 - 民俗学研究', url: 'https://www.cnki.net/' },
          { label: language === 'en' ? 'Journal of Folklore Research' : '《民俗研究》学术期刊', url: 'http://www.msxyj.com/' }
        ]}
      />

      {/* 6. PAGE BOTTOM / FOOTER INFO */}
      <footer className="max-w-6xl mx-auto py-32 px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 opacity-40">
          <div className="max-w-md">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">Credibility Statement</span>
            <p className="text-xs font-serif italic leading-loose">
              {language === 'en'
                ? 'All listed resources are maintained by governmental bodies, accredited academic institutions, or internationally recognized heritage organizations. Content accuracy is ensured by the respective hosting authorities.'
                : '本页面所列资源均由政府机构、正式学术单位或国际认可的文化遗产组织维护，其内容准确性由对应平台负责。'}
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase">
            <span>Archive Status: Active</span>
            <div className="w-1.5 h-1.5 rounded-full bg-jade"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resources;
