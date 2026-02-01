import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  {
    name: 'Year 1',
    Investment: 25,
    Savings: 240,
  },
];

export const RoiChart: React.FC = () => {
  return (
    <div className="h-64 w-full bg-navy-800/50 p-4 rounded-xl border border-white/10">
      <h3 className="text-center text-white mb-4 text-sm uppercase tracking-widest">Investment vs Annual Savings (Juta IDR)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#fbbf24', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
          <Legend />
          <Bar dataKey="Investment" fill="#94a3b8" name="Cost (Rp 25jt)" />
          <Bar dataKey="Savings" fill="#fbbf24" name="Savings (Rp 240jt)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
