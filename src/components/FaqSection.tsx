import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircleQuestion } from 'lucide-react';
import { FAQS_DATA, BUSINESS_INFO } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-5']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 bg-[#05080e] relative border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            EVERYTHING YOU NEED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TO KNOW</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have questions about our mobile setup, water/power needs, or service durations? Here are clear, straightforward answers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-slate-950/90 border-cyan-500/40 shadow-lg shadow-cyan-950/20'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 font-mono text-xs font-semibold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                      {faq.category}
                    </span>
                    <span className="font-heading font-bold text-base sm:text-lg text-white">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                    isOpen ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-900 text-slate-400'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900/80">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Support Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <MessageCircleQuestion className="w-8 h-8 text-cyan-400 shrink-0" />
            <div>
              <div className="text-white text-sm font-bold">Still have a question about your car?</div>
              <div className="text-xs text-slate-400">Our detailing team is happy to answer your questions and help you choose the right service for your vehicle.</div>
            </div>
          </div>
          <div>
            <a
              id="faq-text-us-btn"
              href={BUSINESS_INFO.smsLink}
              title={`Text us at ${BUSINESS_INFO.displayPhone}`}
              aria-label={`Text us at ${BUSINESS_INFO.displayPhone}`}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-750 hover:border-cyan-500 text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Text Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
