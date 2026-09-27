import React from 'react';
import {
  Star,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { REVIEWS_DATA } from '../data/content';
import { ReviewItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface ReviewsSectionProps {
  onOpenBooking?: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = () => {
  // Exactly 3 balanced reviews displayed on desktop / stacked on mobile
  const displayedReviews: ReviewItem[] = REVIEWS_DATA.slice(0, 3);

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#05080e] relative border-t border-slate-900 overflow-hidden">
      {/* Subtle background ambient blue glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider shadow-sm shadow-cyan-950/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            Client Satisfaction
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            CLIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TESTIMONIALS</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real experiences from customers who trust Elite Mobile Auto Detailing with their vehicles.
          </p>
        </ScrollReveal>

        {/* 3 Review Cards (1 row on desktop, stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {displayedReviews.map((review, index) => {
            // Compute or use initials
            const initials = review.initials || review.name
              .split(' ')
              .map((part) => part.replace(/[^a-zA-Z]/g, ''))
              .filter(Boolean)
              .map((part) => part[0].toUpperCase())
              .slice(0, 2)
              .join('') || 'CU';

            return (
              <ScrollReveal
                key={review.id}
                variant="fade-up"
                delay={index * 100}
                className="flex"
              >
                <div
                  id={`testimonial-card-${review.id}`}
                  className="relative rounded-2xl bg-gradient-to-b from-slate-950/90 to-[#070c18]/90 border border-slate-800/80 hover:border-cyan-500/40 p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-cyan-950/30 group flex-1 w-full"
                >
                  {/* Top Section: Stars & Review Text */}
                  <div>
                    {/* Rating Stars (5 Stars) */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                        ))}
                      </div>

                      {/* ONLY display Verified Customer if strictly verified */}
                      {review.verified && (
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Verified Customer</span>
                        </div>
                      )}
                    </div>

                    {/* Customer Review Text */}
                    <p className="text-slate-300 text-sm sm:text-[13.5px] leading-relaxed mb-6 font-normal">
                      "{review.reviewText}"
                    </p>
                  </div>

                  {/* Bottom Section: Divider & Customer Details */}
                  <div className="pt-4 border-t border-slate-800/70 flex items-center gap-3.5">
                    {/* Subtle, Clean Initials Avatar */}
                    <div className="w-10 h-10 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 font-heading font-bold text-xs tracking-wider flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all">
                      {initials}
                    </div>

                    {/* Customer Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-heading font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
                          {review.name}
                        </span>
                      </div>

                      <div className="flex flex-col text-[11px] mt-0.5 gap-0.5">
                        {review.vehicleModel && (
                          <span className="text-cyan-400/90 font-mono truncate">
                            {review.vehicleModel}
                          </span>
                        )}
                        {review.serviceType && (
                          <span className="text-slate-400 truncate">
                            {review.serviceType}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
