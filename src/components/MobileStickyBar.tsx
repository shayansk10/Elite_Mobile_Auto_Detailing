import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="mobile-sticky-cta-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#05080e]/95 backdrop-blur-lg border-t border-cyan-500/30 px-3 sm:px-4 py-2.5 shadow-2xl shadow-black"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Text button */}
        <a
          id="mobile-bar-text-btn"
          href="sms:+18322840769"
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-750 text-slate-200 active:bg-slate-800 flex items-center justify-center gap-1.5 text-xs font-semibold hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          aria-label={`Text ${BUSINESS_INFO.displayPhone}`}
        >
          <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
          <span>TEXT US</span>
        </a>

        {/* Primary Book Detail Button (Opens Modal) */}
        <button
          id="mobile-bar-book-btn"
          onClick={onOpenBooking}
          className="flex-[1.5] py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>BOOK DETAIL</span>
        </button>
      </div>
    </div>
  );
};
