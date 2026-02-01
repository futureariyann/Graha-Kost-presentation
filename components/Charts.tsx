import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, LabelList, YAxis } from 'recharts';

const data = [
  {
    name: 'Manual/Platform',
    amount: 900,
    label: "Cost Mahal",
    fill: 'url(#gradientManual)' // Using gradient ID
  },
  {
    name: 'Flowmind System',
    amount: 60,
    label: "Cost Hemat",
    fill: 'url(#gradientSystem)' // Using gradient ID
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy-900/95 backdrop-blur-md border border-gold-500/30 p-4 rounded-xl shadow-[0_0_15px_rgba(234,179,8,0.1)]">
        <p className="font-bold text-white mb-2 text-sm uppercase tracking-wider">{label}</p>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-serif font-bold text-white">Rp {payload[0].value}</span>
          <span className="text-xs text-slate-400">Juta/Tahun</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-2 max-w-[200px]">
          {label === 'Manual/Platform' 
            ? 'Termasuk: Gaji 10 Admin + 5% Komisi Platform (Linear Cost).' 
            : 'Termasuk: Maintenance Flowmind + Server (Fixed Cost).'}
        </p>
      </div>
    );
  }
  return null;
};

export const RoiChart: React.FC = () => {
  return (
    <div className="h-80 w-full bg-navy-800/40 p-6 rounded-2xl border border-white/5 flex flex-col items-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex justify-between items-end w-full mb-2 px-2">
         <h3 className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">
            Operational Cost Comparison
         </h3>
         <div className="flex gap-4 text-[10px] text-slate-500 font-mono">
            <div className="flex items-center gap-1.5">
               <div className="w-2 h-2 rounded-full bg-red-500"></div> Manual
            </div>
            <div className="flex items-center gap-1.5">
               <div className="w-2 h-2 rounded-full bg-gold-500"></div> System
            </div>
         </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 40,
            right: 20,
            left: 20,
            bottom: 20,
          }}
          barSize={80}
        >
          <defs>
            <linearGradient id="gradientManual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ef4444" stopOpacity={1}/>
              <stop offset="100%" stopColor="#991b1b" stopOpacity={0.8}/>
            </linearGradient>
            <linearGradient id="gradientSystem" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity={1}/>
              <stop offset="100%" stopColor="#d97706" stopOpacity={0.8}/>
            </linearGradient>
          </defs>

          <XAxis 
            dataKey="name" 
            stroke="#94a3b8" 
            tick={{fontSize: 11, fontWeight: 600, fill: '#cbd5e1', fontFamily: 'Inter, sans-serif'}}
            axisLine={false}
            tickLine={false}
            dy={10}
          />
          
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{fill: 'rgba(255,255,255,0.03)', radius: 8}} 
          />
          
          <Bar dataKey="amount" radius={[8, 8, 8, 8]}>
             {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.fill} 
                  stroke={index === 1 ? '#f59e0b' : 'transparent'}
                  strokeWidth={index === 1 ? 1 : 0}
                  className="transition-all duration-500 hover:opacity-90"
                />
              ))}
              <LabelList 
                dataKey="amount" 
                position="top" 
                fill="#ffffff" 
                fontSize={22} 
                fontWeight="bold" 
                fontFamily="Playfair Display, serif"
                formatter={(val: number) => `Rp ${val} Jt`}
                offset={10}
              />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};