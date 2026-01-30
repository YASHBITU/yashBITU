import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, ShieldCheck, AlertCircle } from 'lucide-react';

const BOOT_STEPS = [
  "INITIATING_AUDIT_PROTOCOL_V4.2...",
  "ESTABLISHING_SECURE_TUNNEL...",
  "BYPASSING_WAF_PROTECTION...",
  "DECODING_TLS_HANDSHAKE...",
  "EXTRACTING_DOM_METADATA...",
  "MEASURING_CORE_WEB_VITALS...",
  "ANALYZING_LAYOUT_STABILITY...",
  "SCANNING_REVENUE_LEAKS..."
];

const ISSUES_POOL = [
  "FAIL: LCP (Largest Contentful Paint) exceeds 3.5s.",
  "CRITICAL: Missing H1 tag on entry node.",
  "WARNING: 42 render-blocking resources detected.",
  "FAIL: CLS (Cumulative Layout Shift) threshold breached.",
  "SECURITY: Missing X-Frame-Options headers.",
  "PERF: Unused JavaScript (820KB) impacting main thread.",
  "CONV: Primary CTA contrast ratio below WCAG AA.",
  "SEO: Meta descriptions exceed 160 characters.",
  "FAIL: Latency on LCP killing mobile retention.",
  "WARNING: No social proof detected above the fold."
];

const ProjectTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "Initializing Audit Protocol v4.2...",
    "System: Ready. Waiting for target URL."
  ]);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, message]);
  };

  const runSimulation = async (target: string) => {
    setIsScanning(true);
    addLog(`> STARTING_SCAN_FOR: ${target}`);

    // Simulation sequence for technical boot steps
    for (const step of BOOT_STEPS) {
      await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 400));
      addLog(`> ${step} [OK]`);
    }

    // Final calculations pause
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate Believable Random Score
    const score = Math.floor(Math.random() * (85 - 60 + 1)) + 60;
    
    addLog(`--------------------------------`);
    addLog(`SCAN COMPLETE: ${target}`);
    addLog(`AUDIT_SCORE: ${score}/100`);
    addLog(`STATUS: CRITICAL_ISSUES_DETECTED`);
    addLog(`--------------------------------`);
    
    // Pick 3-4 random issues from the pool
    const numIssues = Math.floor(Math.random() * 2) + 3;
    const shuffled = [...ISSUES_POOL].sort(() => 0.5 - Math.random());
    const selectedIssues = shuffled.slice(0, numIssues);

    for (const issue of selectedIssues) {
      await new Promise(resolve => setTimeout(resolve, 300));
      addLog(`[!] ${issue}`);
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    addLog(`> RECOMMENDATION: Immediate conversion architecture required.`);
    setIsScanning(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input || isScanning) return;
    
    if (!input.includes('.')) {
      addLog(`> [ERROR]: Invalid Domain Protocol. extension required.`);
      return;
    }

    const target = input;
    setInput('');
    runSimulation(target);
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">STOP COMPETING. <br/>START DOMINATING.</h2>
        <p className="text-zinc-500 uppercase tracking-[0.3em] font-bold text-sm">Real-time Technical Revenue Audit</p>
      </div>

      <div className="glass rounded-xl overflow-hidden border border-zinc-800 shadow-2xl relative">
        <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-zinc-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <Terminal size={12} />
            REVENUE_AUDIT_CORE_V4
          </div>
          <div className="w-10" />
        </div>

        <div className="p-6 font-mono text-sm h-[400px] overflow-y-auto flex flex-col scrollbar-hide bg-black/90">
          <div className="space-y-2 mb-8 flex-grow">
            {logs.map((log, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }} 
                key={i} 
                className={`
                  ${log.startsWith('[!]') ? "text-red-500 font-bold" : 
                    log.includes('AUDIT_SCORE') ? "text-yellow-400 font-bold" :
                    log.startsWith('>') ? "text-blue-400 font-bold" : 
                    "text-zinc-500"}
                `}
              >
                {log}
              </motion.div>
            ))}
            <div ref={logEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="relative mt-auto pt-4 border-t border-zinc-800/50">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-blue-500 font-bold">$</span>
            <input 
              type="text" 
              placeholder={isScanning ? "Scanning Domain..." : "Enter your website URL"}
              className="w-full bg-transparent border-none outline-none pl-6 text-white placeholder:text-zinc-700 text-lg py-2 disabled:opacity-50"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isScanning}
            />
            <button 
              type="submit"
              disabled={isScanning || !input}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-lg transition-colors neon-glow"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-8 flex items-center justify-center gap-6 opacity-40 grayscale">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} />
          <span className="text-[10px] uppercase font-bold tracking-widest">OFFLINE_SANDBOX_STABLE</span>
        </div>
        <div className="w-[1px] h-4 bg-zinc-800" />
        <span className="text-[10px] uppercase font-bold tracking-widest">BUILD_STABLE_V4.2</span>
      </div>
    </div>
  );
};

export default ProjectTerminal;