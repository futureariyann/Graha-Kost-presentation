import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SlideData, SlideLayout } from '../types';
import { 
  Check, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle, 
  Zap,
  ArrowDown,
  TrendingUp,
  Scale,
  X,
  Star,
  ShieldCheck
} from 'lucide-react';
import { RoiChart } from './Charts';

interface SlideRendererProps {
  data: SlideData;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1, ease: "easeOut" }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export const SlideRenderer: React.FC<SlideRendererProps> = ({ data }) => {
  
  const Header = () => (
    <div className="mb-6 md:mb-8 text-left">
      <motion.h2 variants={itemVariants} className="text-gold-400 text-sm font-bold tracking-widest uppercase mb-2">
        {data.subtitle}
      </motion.h2>
      <motion.h1 variants={itemVariants} className="text-[28px] md:text-5xl font-serif text-white font-bold leading-tight">
        {data.title}
      </motion.h1>
      <div className="w-16 md:w-24 h-1 bg-gold-500 mt-4 md:mt-6 rounded-full" />
    </div>
  );

  switch (data.layout) {
    case SlideLayout.TITLE:
      return (
        <div className="flex flex-col items-center justify-center min-h-full text-center px-5 relative overflow-hidden py-8 md:py-12 bg-navy-900">
          {/* Background Image (Building Element) */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2000&auto=format&fit=crop')] opacity-40 bg-cover bg-center mix-blend-overlay" />
          
          {/* Primary Gradient Overlay (Navy) */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 via-navy-900/80 to-navy-900" />
          
          {/* Subtle Gold Gradient Accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
          
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 max-w-5xl flex flex-col items-center justify-between h-full py-6">
            <div className="flex-1 flex flex-col justify-center items-center w-full">
               <motion.div variants={itemVariants} className="mb-6 inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs font-semibold tracking-[0.2em] backdrop-blur-sm shadow-[0_0_15px_rgba(234,179,8,0.1)] uppercase">
                Proposal 2026
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-[40px] md:text-8xl font-serif font-bold text-white mb-2 leading-tight drop-shadow-2xl tracking-tight">
                {data.title.split(':')[0]}
              </motion.h1>
              
              <motion.div variants={itemVariants} className="text-2xl md:text-5xl font-sans font-light text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 mb-10 tracking-wide">
                {data.title.split(':')[1]}
              </motion.div>

              {/* Decorative Separator */}
              <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-10 opacity-50" />

              {/* Subtitle / Tagline (New Addition to fill gap) */}
              {data.subtitle && (
                 <motion.h2 variants={itemVariants} className="text-gold-400 font-mono text-sm md:text-lg tracking-[0.3em] uppercase mb-4 font-bold opacity-90">
                    {data.subtitle}
                 </motion.h2>
              )}

              {/* Main Content (The English Text) */}
              <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed px-4">
                {data.content}
              </motion.p>
            </div>
            
            <motion.div variants={itemVariants} className="w-full">
              <div className="text-sm text-slate-500 border-t border-slate-700/50 pt-6 mb-4 flex flex-col md:flex-row justify-center items-center gap-2">
                <span>{data.footer.split('|')[0]}</span>
                <span className="hidden md:inline text-gold-500/50">•</span>
                <span className="text-slate-600">{data.footer.split('|')[1]}</span>
              </div>
              <div className="text-gold-500/50 text-xs animate-pulse font-mono md:hidden">
                Swipe to explore &rarr;
              </div>
            </motion.div>
          </motion.div>
        </div>
      );

    case SlideLayout.SPLIT:
      const hasImage = !!data.visualPrompt;
      return (
        <div className={`flex flex-col ${hasImage ? 'md:grid md:grid-cols-2' : ''} gap-8 min-h-full p-5 md:p-16`}>
          {/* Text Content */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            className={`order-2 md:order-1 flex flex-col justify-center ${hasImage ? '' : 'w-full md:max-w-4xl mx-auto'}`}
          >
            <Header />
            
            {/* Standard Content with Bold Support */}
            {data.content && (
              <motion.div variants={itemVariants} className="text-slate-300 text-lg leading-relaxed mb-6 whitespace-pre-line">
                {data.content.split('**').map((part, i) => 
                  i % 2 === 1 ? <span key={i} className="text-white font-bold text-xl block mb-2 mt-4">{part}</span> : part
                )}
              </motion.div>
            )}

            {/* Standard Highlights */}
            {data.highlights && (
              <div className={`flex flex-col gap-4 mb-6 ${hasImage ? '' : 'md:grid md:grid-cols-2'}`}>
                {data.highlights.map((hl, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex flex-col md:flex-row items-start gap-3 p-4 bg-navy-800 rounded-lg border-l-4 border-gold-500 shadow-lg">
                    <div className="flex-1 font-semibold text-white text-base md:text-base">{hl}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Special Highlight Box */}
            {data.extra?.specialBox && (
              <motion.div 
                variants={itemVariants}
                className="bg-navy-800/60 p-6 rounded-xl border border-gold-500/30 my-6 shadow-xl backdrop-blur-sm relative overflow-hidden"
              >
                {/* Decorative background element for special box */}
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <ShieldCheck size={120} className="text-white" />
                </div>

                <h3 className="font-bold text-xl mb-2 text-white relative z-10 flex items-center gap-2">
                   {data.extra.specialBox.title}
                </h3>
                <p className="mb-4 font-light text-slate-300 relative z-10">{data.extra.specialBox.content}</p>
                
                {/* Highlight Inner Box */}
                <div className="bg-gradient-to-r from-gold-500/10 to-transparent p-4 rounded-lg border-l-4 border-gold-500 mb-3 relative z-10">
                  <div className="text-gold-400 font-bold text-lg mb-1">
                    {data.extra.specialBox.highlight}
                  </div>
                  <p className="text-xs text-slate-400 italic leading-relaxed">
                    {data.extra.specialBox.subtext}
                  </p>
                </div>
                
                {data.extra.specialBox.details && (
                   <ul className={`space-y-2 mt-2 relative z-10 ${hasImage ? '' : 'grid md:grid-cols-2 gap-x-6'}`}>
                     {data.extra.specialBox.details.map((d: string, i: number) => (
                       <li key={i} className="text-sm text-slate-300 flex items-start gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" /> 
                         <span className="leading-relaxed">{d}</span>
                       </li>
                     ))}
                   </ul>
                )}
              </motion.div>
            )}
            
            {data.footer && (
              <motion.div variants={itemVariants} className="mt-8 text-sm text-slate-500 border-t border-slate-800 pt-4">
                {data.footer}
              </motion.div>
            )}
          </motion.div>

          {/* Image Content (Only renders if visualPrompt exists) */}
          {hasImage && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3 }}
              className="order-1 md:order-2 w-full h-64 md:h-full md:min-h-[400px] relative bg-slate-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-4 md:mb-0"
            >
                <img 
                  key={data.id}
                  src={data.visualPrompt} 
                  alt="Visual" 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" 
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1080&q=80"; 
                  }}
                />
            </motion.div>
          )}
        </div>
      );

    case SlideLayout.COLUMNS:
      return (
        <div className="flex flex-col min-h-full p-5 md:p-16">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-8">
            <Header />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
             {data.extra?.map((item: any, idx: number) => (
               <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="bg-navy-800/50 p-6 rounded-xl border border-white/5 hover:border-gold-500/30 transition-colors group"
              >
                 <div className="w-12 h-12 bg-navy-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
                    {item.icon && <item.icon className="text-gold-400 group-hover:text-navy-900 w-6 h-6" />}
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                 <p className="text-slate-400 leading-relaxed text-lg md:text-base">{item.desc}</p>
               </motion.div>
             ))}
          </div>
          {data.footer && (
             <div className="mt-8 pt-4 border-t border-slate-800 text-center text-gold-400 font-semibold text-sm md:text-base">{data.footer}</div>
          )}
        </div>
      );

    case SlideLayout.CHECKLIST:
      return (
        <div className="flex flex-col min-h-full p-5 md:p-16">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Header />
            {data.content && <p className="text-slate-300 text-lg md:text-xl mb-8 -mt-4 leading-relaxed">{data.content}</p>}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
               {data.extra?.map((item: any, idx: number) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 + (idx * 0.1) }}
                   className="bg-navy-800/40 p-5 rounded-xl border border-white/10 hover:border-gold-500/40 hover:bg-navy-800/60 transition-all flex flex-col md:flex-row gap-4 group shadow-lg"
                 >
                   <div className="shrink-0">
                     <div className={`w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center border border-slate-700 group-hover:border-gold-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.1)] transition-all`}>
                        {item.icon && <item.icon size={26} className={item.color || 'text-gold-400'} />}
                     </div>
                   </div>
                   <div className="flex-1">
                     <h3 className={`text-lg font-bold mb-3 ${item.color || 'text-white'}`}>{item.title}</h3>
                     <ul className="space-y-2">
                       {item.items.map((sub: string, i: number) => (
                         <li key={i} className="text-slate-300 text-sm flex items-start gap-2.5">
                           <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0 group-hover:bg-gold-500 transition-colors" />
                           <span className="leading-snug">{sub}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 </motion.div>
               ))}
            </div>

            {/* Special Footer for Warranty */}
            {data.footer && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 bg-gradient-to-r from-gold-500/10 to-navy-800 border border-gold-500/40 p-4 rounded-xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="text-gold-400 font-bold text-base md:text-lg tracking-widest uppercase flex items-center justify-center gap-2">
                   {data.footer}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      );

    case SlideLayout.PAIN_POINTS:
      return (
        <div className="flex flex-col min-h-full p-5 md:p-16">
           <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Header />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 md:mt-8">
            {data.extra?.map((item: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="bg-gradient-to-br from-navy-800 to-navy-900 p-8 rounded-2xl border border-red-500/20 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 p-4 opacity-10 ${item.color} group-hover:opacity-20 transition-opacity`}>
                  <item.icon size={100} />
                </div>
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-2 ${item.color}`}>{item.title}</h3>
                <div className="text-3xl font-bold text-white mb-4">{item.value}</div>
                <p className="text-slate-400 text-lg md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-auto mb-4 bg-navy-800 border border-gold-500/30 p-6 rounded-lg text-center mt-12 shadow-lg">
             <span className="text-gold-400 font-bold tracking-widest text-lg">{data.footer}</span>
          </div>
        </div>
      );

    case SlideLayout.FEATURES:
      return (
         <div className="flex flex-col min-h-full p-5 md:p-12">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Header />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 flex-1 mt-4">
             {data.extra.features?.map((feature: any, idx: number) => (
               <motion.div 
                 key={idx} 
                 initial={{ opacity: 0, y: 15 }} 
                 animate={{ opacity: 1, y: 0 }} 
                 transition={{ delay: 0.2 + (idx * 0.1) }}
                 className="bg-navy-800/40 p-6 rounded-xl border border-white/5 hover:border-gold-500/20 transition-all"
               >
                 <div className="flex items-center gap-4 mb-4">
                   <div className="p-3 bg-navy-900 rounded-lg text-gold-400 border border-gold-500/20">
                     {feature.icon && <feature.icon size={24} />}
                   </div>
                   <h3 className="font-bold text-white text-lg md:text-xl">{feature.title}</h3>
                 </div>
                 <ul className="space-y-3">
                   {feature.items.map((subItem: string, sIdx: number) => (
                     <li key={sIdx} className="flex gap-3 text-slate-300 text-base leading-relaxed">
                       <div className="min-w-[6px] h-[6px] rounded-full bg-slate-500 mt-2.5 shrink-0" />
                       <span>{subItem}</span>
                     </li>
                   ))}
                 </ul>
               </motion.div>
             ))}
          </div>
          
          {data.footer && (
            <div className="mt-8 pt-4 border-t border-slate-800 text-center text-sm text-slate-500 font-mono">
              {data.footer}
            </div>
          )}
         </div>
      );

    case SlideLayout.TECH_STACK:
      return (
         <div className="flex flex-col min-h-full p-5 md:p-16 justify-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-8 md:mb-12">
               <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-2 text-sm">{data.subtitle}</h2>
               <h1 className="text-3xl md:text-4xl font-serif text-white font-bold">{data.title}</h1>
            </motion.div>
            <div className="space-y-4">
              {data.extra?.map((item: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex flex-col md:flex-row items-center gap-6 bg-navy-800 p-6 rounded-xl border border-white/5 hover:bg-navy-700/50 transition-colors"
                >
                  <div className="p-4 bg-navy-900 rounded-full border border-slate-700">
                    <item.icon className="text-blue-400 w-8 h-8" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1 justify-center md:justify-start">
                      <h3 className="text-xl font-bold text-white">{item.tech}</h3>
                      <span className="bg-slate-700 text-xs px-2 py-1 rounded text-slate-300">{item.badge}</span>
                    </div>
                    <div className="text-sm text-slate-400 uppercase tracking-wide mb-2">{item.category}</div>
                    <p className="text-slate-300 text-lg md:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
         </div>
      );

    case SlideLayout.ROI:
      return (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 min-h-full items-center p-5 md:p-16">
           <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Header />
            {data.content && <p className="text-slate-300 text-lg mb-6 leading-relaxed border-l-4 border-gold-500 pl-4">{data.content}</p>}
            <ul className="space-y-4 mb-8">
              {data.highlights?.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-3 text-lg text-slate-300">
                   <div className="mt-1 shrink-0">
                     {idx === 0 ? <TrendingUp className="text-blue-400 w-5 h-5" /> : 
                      idx === 1 ? <AlertTriangle className="text-red-400 w-5 h-5" /> : 
                      <CheckCircle2 className="text-green-400 w-5 h-5" />}
                   </div>
                   <span>{hl}</span>
                </li>
              ))}
            </ul>
           </motion.div>
           
           <div className="flex flex-col gap-6 w-full">
              <div className="grid grid-cols-2 gap-4">
                {data.stats?.map((stat, idx) => (
                   <motion.div 
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className={`bg-navy-800 p-4 md:p-5 rounded-xl text-center border ${idx === 0 ? 'border-gold-500 col-span-2' : 'border-white/10'}`}
                   >
                     <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                     <div className={`text-xl md:text-2xl font-bold ${idx === 0 ? 'text-gold-400' : 'text-white'}`}>{stat.value}</div>
                     <div className="text-xs text-slate-500 mt-1">{stat.desc}</div>
                   </motion.div>
                ))}
              </div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="w-full h-[250px] md:h-auto">
                 <RoiChart />
              </motion.div>
              <div className="text-center text-xs text-slate-500 italic">
                {data.footer}
              </div>
           </div>
        </div>
      );
      
    case SlideLayout.PRICING:
      return (
        <div className="flex flex-col min-h-full p-5 md:p-16">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-8 md:mb-10">
            <h1 className="text-3xl md:text-5xl font-serif text-white font-bold">{data.title}</h1>
            <p className="text-slate-400 mt-2">{data.subtitle}</p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-6 flex-1 items-stretch justify-center relative">
            {data.extra?.map((plan: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-6 md:p-8 rounded-2xl flex flex-col h-auto w-full md:w-1/3
                  ${plan.rec 
                    ? 'bg-gradient-to-b from-navy-800 to-navy-900 border-2 border-gold-500 shadow-[0_0_40px_rgba(234,179,8,0.25)] z-20 md:-translate-y-4 md:scale-105 ring-4 ring-gold-500/20' 
                    : 'bg-navy-800/50 border border-slate-700 opacity-90 z-10'
                  }`}
              >
                {plan.rec && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gold-500 text-navy-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg whitespace-nowrap">
                    <Star size={16} fill="currentColor" />
                    Best Value
                  </div>
                )}
                
                <h3 className={`text-xl font-bold mb-2 ${plan.rec ? 'text-gold-400 mt-2' : 'text-slate-200'}`}>{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-6">{plan.price}</div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat: string, fIdx: number) => (
                    <li key={fIdx} className="text-sm text-slate-300 border-b border-slate-700/50 pb-2 flex gap-2">
                       <span className="text-gold-500">›</span> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 md:py-3 rounded-lg font-bold transition-all text-lg md:text-base ${plan.rec ? 'bg-gold-500 text-navy-900 hover:bg-gold-400 shadow-lg shadow-gold-500/20' : 'border border-slate-500 text-slate-300 hover:bg-slate-700'}`}>
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
          {data.footer && (
              <motion.div variants={itemVariants} className="mt-8 text-center bg-navy-800/80 py-4 px-6 rounded-lg border border-gold-500/20 shadow-lg text-gold-400 font-bold text-lg">
                {data.footer}
              </motion.div>
            )}
        </div>
      );
    
    case SlideLayout.COMPARISON:
      return (
        <div className="flex flex-col min-h-full p-5 md:p-16 justify-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-8 md:mb-12">
               <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-2 text-sm">Strategic Decision</h2>
               <h1 className="text-3xl md:text-5xl font-serif text-white font-bold">{data.title}</h1>
               <p className="text-slate-400 mt-2 text-lg">{data.subtitle}</p>
            </motion.div>

             <motion.div 
               variants={containerVariants} 
               initial="hidden" 
               animate="visible"
               className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
             >
                {data.extra.map((comp: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className={`relative p-6 md:p-8 rounded-2xl border flex flex-col transition-all
                      ${comp.highlight 
                        ? 'bg-gradient-to-br from-navy-800 to-navy-900 border-gold-500 shadow-[0_0_20px_rgba(234,179,8,0.15)] z-10 md:-translate-y-4 md:scale-105' 
                        : 'bg-navy-900/60 border-slate-800 opacity-80 hover:opacity-100 hover:border-slate-600'}`}
                  >
                    {comp.highlight && (
                      <div className="absolute top-0 right-0 bg-gold-500 text-navy-900 px-3 py-1 rounded-bl-xl rounded-tr-xl font-bold text-xs uppercase tracking-wide">
                        Best Value
                      </div>
                    )}
                    
                    <div className="mb-6 flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${comp.highlight ? 'bg-gold-500/20 text-gold-400' : 'bg-slate-800 text-slate-400'}`}>
                         {comp.icon && <comp.icon size={28} />}
                      </div>
                      <h3 className={`text-xl font-bold ${comp.highlight ? 'text-white' : 'text-slate-300'}`}>
                        {comp.name}
                      </h3>
                    </div>

                    <div className="flex-1 space-y-6">
                      {/* Pros */}
                      {comp.pros.length > 0 && (
                        <div>
                           <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Keuntungan</div>
                           <ul className="space-y-2">
                             {comp.pros.map((p:string, i:number) => (
                               <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                                 <Check className="text-green-500 w-4 h-4 mt-0.5 shrink-0" />
                                 <span className="leading-snug">{p}</span>
                               </li>
                             ))}
                           </ul>
                        </div>
                      )}

                      {/* Cons */}
                      {comp.cons.length > 0 && (
                        <div>
                           <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Resiko</div>
                           <ul className="space-y-2">
                             {comp.cons.map((c:string, i:number) => (
                               <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                                 <X className="text-red-500 w-4 h-4 mt-0.5 shrink-0" />
                                 <span className="leading-snug">{c}</span>
                               </li>
                             ))}
                           </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
             </motion.div>
        </div>
      );

    case SlideLayout.TIMELINE:
      return (
         <div className="flex flex-col min-h-full p-5 md:p-16 justify-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-12 md:mb-16">
              <Header />
            </motion.div>
            <div className="relative">
              {/* Desktop Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -translate-y-1/2 hidden md:block" />
              {/* Mobile Line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-slate-700 md:hidden" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {data.extra?.map((item: any, idx: number) => (
                   <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="relative bg-navy-800 p-6 rounded-xl border border-white/10 z-10 ml-8 md:ml-0"
                   >
                     {/* Mobile dot */}
                     <div className="absolute -left-[38px] top-1/2 -translate-y-1/2 w-5 h-5 bg-gold-500 rounded-full border-4 border-navy-900 md:hidden" />
                     
                     <div className="text-gold-400 font-bold mb-1 text-sm">{item.week}</div>
                     <div className="text-xl text-white font-bold mb-2">{item.phase}</div>
                     <p className="text-sm text-slate-400">{item.desc}</p>
                   </motion.div>
                ))}
              </div>
            </div>
         </div>
      );
      
    case SlideLayout.CTA:
        return (
          <div className="flex flex-col items-center justify-center min-h-full text-center p-5 md:p-8">
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="max-w-3xl w-full bg-navy-800/80 p-8 md:p-12 rounded-3xl border border-gold-500/20 backdrop-blur-sm"
             >
                <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-400">
                  <Zap size={32} />
                </div>
                <h2 className="text-gold-400 font-bold tracking-widest uppercase mb-4">Final Step</h2>
                <h1 className="text-3xl md:text-5xl font-serif text-white font-bold mb-6">{data.title}</h1>
                <p className="text-lg md:text-xl text-slate-300 mb-8">{data.subtitle}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-10">
                  {data.extra.map((step: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-300 bg-navy-900/50 p-3 rounded-lg border border-white/5">
                      <div className="bg-navy-800 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold border border-slate-600 shrink-0">
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-red-500/10 border border-red-500/30 text-red-200 p-3 rounded-lg mb-8 inline-block px-4 md:px-8 text-sm md:text-base">
                  {data.content}
                </div>
                
                <button 
                  className="block w-full md:w-auto mx-auto bg-gold-500 text-navy-900 px-12 py-5 rounded-lg font-bold text-xl hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20 animate-pulse"
                  onClick={() => window.open('https://wa.me/6281533300446', '_blank')}
                >
                   HUBUNGI KAMI (0815-3330-0446)
                </button>
             </motion.div>
          </div>
        );

    default:
      // Fallback
      return (
        <div className="flex flex-col min-h-full p-5 md:p-16">
          <Header />
           <motion.div variants={containerVariants} initial="hidden" animate="visible" className="bg-navy-800/50 p-8 rounded-2xl border border-white/5 flex-1">
             <div className="space-y-6">
                {data.highlights?.map((hl, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex items-center gap-4">
                    <CheckCircle2 className="text-gold-400 min-w-[24px]" />
                    <span className="text-lg text-slate-200">{hl}</span>
                  </motion.div>
                ))}
                {data.content && <p className="text-slate-300 mt-4 text-lg">{data.content}</p>}
             </div>
           </motion.div>
           {data.footer && (
             <div className="mt-6 text-center text-slate-400 bg-navy-900/50 py-3 rounded-lg border border-white/5 text-sm">
               {data.footer}
             </div>
           )}
        </div>
      );
  }
};