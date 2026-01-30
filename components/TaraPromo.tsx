import React, { useCallback, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, ExternalLink, Cpu } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const TaraPromo: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative group gpu-accelerated"
      >
        {/* Animated Background Glow - Simplified on mobile */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-10 md:opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

        {/* Main Card */}
        <div className="relative bg-zinc-950/95 md:bg-zinc-950/90 md:backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:p-12 overflow-hidden shadow-2xl">

          {/* Particle Field */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30 md:opacity-40 group-hover:opacity-60 transition-opacity duration-500">
            <Particles
              id="tara-particles"
              init={particlesInit}
              options={{
                fullScreen: { enable: false },
                background: { color: "transparent" },
                fpsLimit: 60,
                interactivity: {
                  events: {
                    onHover: { enable: !isMobile, mode: "repulse" }, // Disable repulsion on mobile
                    resize: true,
                  },
                  modes: {
                    repulse: { distance: 100, duration: 0.4 },
                  },
                },
                particles: {
                  color: { value: ["#06b6d4", "#a855f7", "#ffffff"] },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: { default: "out" },
                    random: true,
                    speed: isMobile ? 0.3 : 0.6, // Slower on mobile
                    straight: false,
                  },
                  number: {
                    density: { enable: true, area: 800 },
                    value: isMobile ? 30 : 70, // 60% reduction on mobile
                  },
                  opacity: {
                    value: { min: 0.1, max: 0.4 },
                  },
                  shape: { type: "circle" },
                  size: {
                    value: { min: 1, max: isMobile ? 2 : 3 },
                  },
                },
                detectRetina: false, // Save memory on high-DPI mobiles
              }}
              className="w-full h-full"
            />
          </div>

          {/* Cyberpunk Accents */}
          <div className="absolute top-0 right-0 p-4 opacity-10 md:opacity-20 group-hover:opacity-100 transition-opacity z-10">
            <Cpu className="text-cyan-500 animate-pulse" size={isMobile ? 24 : 32} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Left Side: Visual Core */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 flex items-center justify-center relative border border-cyan-500/30">
                <div className="absolute inset-0 rounded-full animate-ping bg-cyan-500/5 md:bg-cyan-500/10" />
                <Bot className="text-cyan-400 group-hover:scale-110 transition-transform duration-500 w-12 h-12 md:w-16 md:h-16" />

                {/* Floating Particles */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 text-purple-500"
                >
                  <Sparkles size={isMobile ? 20 : 24} />
                </motion.div>
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="bg-cyan-500 text-black text-[8px] md:text-[10px] font-mono font-black px-2 py-0.5 rounded uppercase tracking-tighter">
                  Core_Online
                </span>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="flex-grow text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-4">
                <span className="font-mono text-[10px] text-zinc-500 tracking-[0.2em] uppercase">Project_Tara // V1.0</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </div>

              <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase mb-3 md:mb-4 leading-none">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">TARA</span>
              </h2>

              <p className="text-zinc-400 text-base md:text-xl font-medium max-w-md leading-relaxed mb-6 md:mb-8">
                The Advanced Reliable Assistant. <br />
                <span className="text-zinc-500 text-[10px] md:text-sm font-mono tracking-wider italic">Architected by Bitu.</span>
              </p>

              <a
                href="https://tara.yashbitu.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-black font-black uppercase tracking-tighter text-base md:text-lg rounded-sm hover:bg-cyan-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-cyan-500/40 relative group/btn"
              >
                Initialize TARA 🚀
                <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Decorative Technical Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Scanning Line Animation - Optimized with translateZ */}
          <motion.div
            animate={{ top: ['-10%', '110%'] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-10 gpu-accelerated"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TaraPromo;