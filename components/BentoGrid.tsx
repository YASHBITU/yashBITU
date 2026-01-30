
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Zap, Target, BarChart3, Activity } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  metric: string;
  icon: React.ReactNode;
  span: string;
  img: string;
  link: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Titan",
    category: "Direct Response",
    metric: "+142% Revenue",
    icon: <TrendingUp className="text-emerald-400" size={18} />,
    span: "md:col-span-2 md:row-span-2",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop",
    link: "https://ecom.yashbitu.xyz",
    color: "emerald"
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "Lead Gen Engine",
    metric: "2.4x CVR",
    icon: <Zap className="text-blue-400" size={18} />,
    span: "md:col-span-2 md:row-span-1",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    link: "https://saas.yashbitu.xyz",
    color: "blue"
  },
  {
    id: 3,
    title: "Venture Capital",
    category: "Authority Platform",
    metric: "High Ticket Leads",
    icon: <Target className="text-purple-400" size={18} />,
    span: "md:col-span-1 md:row-span-1",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    link: "https://capital.yashbitu.xyz",
    color: "purple"
  },
  {
    id: 4,
    title: "Growth Funnel",
    category: "Scaling Systems",
    metric: "-40% CPA",
    icon: <BarChart3 className="text-cyan-400" size={18} />,
    span: "md:col-span-1 md:row-span-1",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
    link: "https://growth.yashbitu.xyz",
    color: "cyan"
  }
];

const BentoGrid: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-6 h-auto md:h-[800px] mt-12">
      {projects.map((project) => (
        <motion.a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${project.span} relative group overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 transition-all duration-700 block gpu-accelerated ${
            hoveredId !== null && hoveredId !== project.id ? 'opacity-30 scale-[0.98] blur-[2px]' : 'opacity-100 scale-100'
          }`}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
          whileHover={{ y: -8 }}
        >
          {/* Background Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src={project.img} 
              alt={project.title}
              className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60 z-10" />
          </div>

          {/* Content Layer */}
          <div className="relative z-30 p-6 md:p-8 h-full flex flex-col justify-between">
            {/* Top Bar: Category & Metric (Always Visible) */}
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono font-black text-white/40 uppercase tracking-[0.2em]">
                  {project.category}
                </span>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-sm border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  {project.icon}
                  <span className="text-xs font-mono font-black text-white uppercase tracking-tighter">
                    {project.metric}
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-full bg-black/40 border border-white/5 text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-400/30 transition-all">
                <ExternalLink size={16} />
              </div>
            </div>

            {/* Bottom Section: Title & Status */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <div className="flex items-center gap-4 pt-4 border-t border-white/5 group-hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                    PROTOCOL_ACTIVE
                  </span>
                </div>
                <div className="hidden group-hover:flex items-center gap-2 transition-opacity">
                   <Activity size={10} className="text-blue-500" />
                   <span className="text-[8px] font-mono text-blue-500/60 uppercase">Realtime_Stream</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] z-20" />
          
          {/* Hover Border Glow */}
          <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/40 transition-colors duration-500 rounded-2xl z-40" />
        </motion.a>
      ))}
    </div>
  );
};

export default BentoGrid;
