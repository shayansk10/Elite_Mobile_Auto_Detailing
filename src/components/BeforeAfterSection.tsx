import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { BEFORE_AFTER_SHOWCASES } from '../data/content';

interface BeforeAfterSectionProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const currentShowcase = BEFORE_AFTER_SHOWCASES[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clampedPercentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section id="before-after" className="py-20 sm:py-24 bg-[#05080e] relative border-t border-slate-900 overflow-hidden w-full max-w-full">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none max-w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Proof of Transformation
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            SEE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ELITE DIFFERENCE</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Drag the interactive slider below to inspect the complete transformation from dull, swirled, road-worn paint to a mirror-deep showroom finish.
          </p>
        </div>

        {/* ONE Interactive Comparison Slider Container */}
        <div className="max-w-4xl mx-auto w-full">
          <div
            id="before-after-slider-container"
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 cursor-ew-resize select-none bg-black touch-none w-full max-w-full"
          >
            {/* AFTER Image (Full width background) */}
            <img
              src={currentShowcase.afterImage}
              alt="Elite Finish After Detailing"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              referrerPolicy="no-referrer"
            />
            
            {/* After Label Badge */}
            <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-10 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/50 text-cyan-300 font-heading font-black text-[10px] sm:text-xs md:text-sm tracking-wider uppercase shadow-lg select-none pointer-events-none">
              AFTER: ELITE FINISH
            </div>

            {/* BEFORE Image (Clipped by slider percentage) */}
            <img
              src={currentShowcase.beforeImage}
              alt="Needs Detailing Before"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              referrerPolicy="no-referrer"
            />

            {/* Before Label Badge */}
            <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-slate-700 text-slate-300 font-heading font-black text-[10px] sm:text-xs md:text-sm tracking-wider uppercase shadow-lg select-none pointer-events-none">
              BEFORE: NEEDS DETAILING
            </div>

            {/* Draggable Vertical Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(6,182,212,0.9)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Center Handle Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/95 border-2 border-cyan-400 shadow-xl shadow-cyan-500/50 flex items-center justify-center text-cyan-400">
                <MoveHorizontal className="w-4 h-4 sm:w-6 sm:h-6 animate-pulse" />
              </div>
            </div>

            {/* Bottom instruction hint */}
            <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/80 backdrop-blur-md border border-slate-800 text-[9px] sm:text-xs text-slate-300 font-mono flex items-center gap-1 sm:gap-1.5 pointer-events-none select-none max-w-[90%] justify-center shadow-md">
              <MoveHorizontal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">Drag slider horizontally to compare</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
