import React from 'react';
import { motion } from 'framer-motion';
import { SlideData, SlideLayout } from '../types';
import { Check, Star, ArrowRight, Shield, Zap, TrendingUp, ChevronRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { RoiChart } from './Charts';

interface SlideRendererProps {
  data: SlideData;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export const SlideRenderer: React.FC<SlideRendererProps> = ({ data }) => {
  
  const Header = () => (
    <div className="mb-8">
      <motion.h2 variants={itemVariants} className="text-gold-400 text-sm font-bold tracking-widest uppercase mb-2">
        {data.subtitle}
      </motion.h2>
      <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
        {data.title}
      </motion.h1>
      <div className="w-24 h-1 bg-gold-500 mt-6 rounded-full" />
    </div>
  );

  switch (data.layout) {
    case SlideLayout.TITLE:
      return (
        <div className="flex flex-col items-center justify-center h-full text-center px-6 relative overflow-hidden">
          {/* Changed background image to a darker, more premium architectural shot */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 to-navy-900" />
          
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 max-w-4xl">
             <motion.div variants={itemVariants} className="mb-6 inline-block px-4 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold tracking-wider">
              PROPOSAL 2026
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              {data.title.split(':')[0]} <span className="text-gold-400 block mt-2 text-3xl md:text-5xl font-sans font-light">{data.title.split(':')[1]}</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 font-light mb-12">
              {data.content}
            </motion.p>
            <motion.div variants={itemVariants} className="text-sm text-slate-500 border-t border-slate-700 pt-8 mt-8">
              {data.footer}
            </motion.div>
          </motion.div>
        </div>
      );

    case SlideLayout.SPLIT:
      return (
        <div className="grid md:grid-cols-2 gap-12 h-full items-center p-8 md:p-16">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Header />
            <motion.p variants={itemVariants} className="text-slate-300 text-lg leading-relaxed mb-8">
              {data.content}
            </motion.p>
            <div className="space-y-4">
              {data.highlights?.map((hl, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-start gap-3 p-4 bg-navy-800 rounded-lg border-l-4 border-gold-500">
                   <div className="flex-1 font-semibold text-white">{hl}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3 }}
            className="hidden md:block h-full min-h-[400px] bg-slate-800 rounded-2xl overflow-hidden relative shadow-2xl border border-white/10"
          >
            {data.visualPrompt && (
              <img src={data.visualPrompt} alt="Visual" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" />
            )}
          </motion.div>
        </div>
      );

    case SlideLayout.COLUMNS:
      return (
        <div className="flex flex-col h-full p-8 md:p-16">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-12">
            <Header />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 flex-1">
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
                 <p className="text-slate-400 leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
          </div>
          {data.footer && (
             <div className="mt-8 pt-4 border-t border-slate-800 text-center text-gold-400 font-semibold">{data.footer}</div>
          )}
        </div>
      );

    case SlideLayout.PAIN_POINTS:
      return (
        <div className="flex flex-col h-full p-8 md:p-16">
           <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Header />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {data.extra?.map((item: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="bg-gradient-to-br from-navy-800 to-navy-900 p-8 rounded-2xl border border-red-500/20 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 p-4 opacity-10 ${item.color}`}>
                  <item.icon size={100} />
                </div>
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-2 ${item.color}`}>{item.title}</h3>
                <div className="text-3xl font-bold text-white mb-4">{item.value}</div>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-auto bg-navy-800 border border-gold-500/30 p-4 rounded-lg text-center mt-8">
             <span className="text-gold-400 font-bold tracking-widest">{data.footer}</span>
          </div>
        </div>
      );

    case SlideLayout.FEATURES:
      return (
         <div className="flex flex-col h-full p-8 md:p-16">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Header />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 mt-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif text-white border-b border-blue-500/50 pb-2 mb-4">Tenant App</h3>
              {data.extra.left.map((item: any, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1"><div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center"><Check size={14} className="text-blue-400"/></div></div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif text-white border-b border-gold-500/50 pb-2 mb-4">Admin Dashboard</h3>
               {data.extra.right.map((item: any, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1"><div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center"><Check size={14} className="text-gold-400"/></div></div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
         </div>
      );

    case SlideLayout.TECH_STACK:
      return (
         <div className="flex flex-col h-full p-8 md:p-16 justify-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-12">
               <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-2">{data.subtitle}</h2>
               <h1 className="text-4xl font-serif text-white font-bold">{data.title}</h1>
            </motion.div>
            <div className="space-y-4">
              {data.extra?.map((item: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex flex-col md:flex-row items-center gap-6 bg-navy-800 p-6 rounded-xl border border-white/5"
                >
                  <div className="p-4 bg-navy-900 rounded-full border border-slate-700">
                    <item.icon className="text-blue-400 w-8 h-8" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white">{item.tech}</h3>
                      <span className="bg-slate-700 text-xs px-2 py-1 rounded text-slate-300">{item.badge}</span>
                    </div>
                    <div className="text-sm text-slate-400 uppercase tracking-wide mb-2">{item.category}</div>
                    <p className="text-slate-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
         </div>
      );

    case SlideLayout.ROI:
      return (
        <div className="grid md:grid-cols-2 gap-12 h-full items-center p-8 md:p-16">
           <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Header />
            <ul className="space-y-4 mb-8">
              {data.highlights?.map((hl, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg text-slate-300">
                  <Check className="text-green-400" /> {hl}
                </li>
              ))}
            </ul>
             <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <p className="text-center text-green-400 font-bold text-xl">{data.footer}</p>
            </div>
           </motion.div>
           
           <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                {data.stats?.map((stat, idx) => (
                   <motion.div 
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className={`bg-navy-800 p-6 rounded-xl text-center border ${idx === 2 ? 'border-gold-500 col-span-2' : 'border-white/10'}`}
                   >
                     <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                     <div className={`text-3xl font-bold ${idx === 2 ? 'text-gold-400' : 'text-white'}`}>{stat.value}</div>
                   </motion.div>
                ))}
              </div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                 <RoiChart />
              </motion.div>
           </div>
        </div>
      );
      
    case SlideLayout.PRICING:
      return (
        <div className="flex flex-col h-full p-8 md:p-16">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-serif text-white font-bold">{data.title}</h1>
            <p className="text-slate-400 mt-2">{data.subtitle}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 flex-1 items-center">
            {data.extra?.map((plan: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 rounded-2xl flex flex-col h-auto
                  ${plan.rec 
                    ? 'bg-gradient-to-b from-navy-800 to-navy-900 border-2 border-gold-500 shadow-[0_0_30px_rgba(234,179,8,0.2)] md:scale-105 z-10' 
                    : 'bg-navy-800/50 border border-slate-700 opacity-90'
                  }`}
              >
                {plan.rec && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-navy-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Recommended
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-2 ${plan.rec ? 'text-gold-400' : 'text-slate-200'}`}>{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-6">{plan.price}</div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat: string, fIdx: number) => (
                    <li key={fIdx} className="text-sm text-slate-300 border-b border-slate-700/50 pb-2">{feat}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-all ${plan.rec ? 'bg-gold-500 text-navy-900 hover:bg-gold-400' : 'border border-slate-500 text-slate-300 hover:bg-slate-700'}`}>
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      );

    case SlideLayout.TIMELINE:
      return (
         <div className="flex flex-col h-full p-8 md:p-16 justify-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-16">
              <Header />
            </motion.div>
            <div className="relative">
              {/* Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -translate-y-1/2 hidden md:block" />
              <div className="grid md:grid-cols-4 gap-8">
                {data.extra?.map((item: any, idx: number) => (
                   <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="relative bg-navy-800 p-6 rounded-xl border border-white/10 z-10"
                   >
                     <div className="text-gold-400 font-bold mb-1">{item.week}</div>
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
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="max-w-3xl w-full bg-navy-800/80 p-12 rounded-3xl border border-gold-500/20 backdrop-blur-sm"
             >
                <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-400">
                  <Zap size={32} />
                </div>
                <h2 className="text-gold-400 font-bold tracking-widest uppercase mb-4">Final Step</h2>
                <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">{data.title}</h1>
                <p className="text-xl text-slate-300 mb-8">{data.subtitle}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-10">
                  {data.extra.map((step: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-300">
                      <div className="bg-navy-900 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold border border-slate-600">
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-red-500/10 border border-red-500/30 text-red-200 p-3 rounded-lg mb-8 inline-block px-8">
                  {data.content}
                </div>
                
                <button className="block w-full md:w-auto mx-auto bg-gold-500 text-navy-900 px-12 py-4 rounded-full font-bold text-lg hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20">
                  PARTNER WITH FLOWMIND TODAY
                </button>
             </motion.div>
          </div>
        );

    default:
      // Fallback for simple layouts like CHECKLIST or COMPARISON which are similar to SPLIT/COLUMNS simplified
      return (
        <div className="flex flex-col h-full p-8 md:p-16">
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
                {data.layout === SlideLayout.COMPARISON && (
                   <div className="grid md:grid-cols-3 gap-4 mt-8">
                      {data.extra.map((comp: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${comp.highlight ? 'bg-navy-700 border-gold-500' : 'bg-navy-900 border-slate-700'}`}>
                          <h4 className={`font-bold mb-4 text-center ${comp.highlight ? 'text-gold-400' : 'text-slate-400'}`}>{comp.name}</h4>
                          {comp.pros.length > 0 && (
                            <div className="mb-4">
                              {comp.pros.map((p:string, i:number) => <div key={i} className="text-green-400 text-sm flex gap-2 mb-1"><Check size={14}/> {p}</div>)}
                            </div>
                          )}
                           {comp.cons.length > 0 && (
                            <div>
                              {comp.cons.map((c:string, i:number) => <div key={i} className="text-red-400 text-sm flex gap-2 mb-1"><AlertTriangle size={14}/> {c}</div>)}
                            </div>
                          )}
                        </div>
                      ))}
                   </div>
                )}
             </div>
           </motion.div>
           {data.footer && (
             <div className="mt-6 text-center text-slate-400 bg-navy-900/50 py-3 rounded-lg border border-white/5">
               {data.footer}
             </div>
           )}
        </div>
      );
  }
};