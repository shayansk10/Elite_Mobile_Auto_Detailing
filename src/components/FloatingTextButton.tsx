import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingTextButton: React.FC = () => {
  return (
    <aside
      aria-label="Quick SMS Contact"
      className="fixed bottom-20 right-4 sm:right-6 lg:bottom-7 lg:right-7 z-40 pointer-events-auto"
    >
      <a
        id="global-floating-text-btn"
        href="sms:+18322840769"
        className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#06101e]/95 via-[#09182d]/95 to-[#06101e]/95 border border-cyan-400/50 hover:border-cyan-300 text-white font-heading font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl animate-subtle-float animate-pulse-glow transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
        aria-label="Text us at (832) 284-0769"
      >
        {/* Subtle pulsing live indicator dot */}
        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-cyan-400" />
        </span>

        {/* Message / Chat Icon */}
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:text-cyan-200 group-hover:bg-cyan-500/30 transition-colors shrink-0">
          <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
        </div>

        {/* Button Text */}
        <span className="font-heading font-black text-xs sm:text-sm tracking-wider text-white group-hover:text-cyan-300 transition-colors select-none">
          TEXT US
        </span>
      </a>
    </aside>
  );
};
