import React, { useState, useEffect } from 'react';
import { X, MapPin, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface ZipAvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAvailabilityConfirmed: (zipCode: string) => void;
}

export const ZipAvailabilityModal: React.FC<ZipAvailabilityModalProps> = ({
  isOpen,
  onClose,
  onAvailabilityConfirmed,
}) => {
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setError(null);
      setIsSuccess(false);
    }
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isSuccess) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isSuccess, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipCode.trim();

    // Standard US ZIP code format: 5 digits or 5+4 digits (e.g. 77001 or 12345-6789)
    const usZipRegex = /^\d{5}(-\d{4})?$/;

    if (!usZipRegex.test(cleanZip)) {
      setError('Please enter a valid US ZIP code.');
      return;
    }

    setError(null);
    setIsSuccess(true);

    // After 1.25 seconds (between 1 and 1.5s), close modal and trigger callback
    setTimeout(() => {
      onAvailabilityConfirmed(cleanZip);
      onClose();
    }, 1250);
  };

  return (
    <div
      id="zip-availability-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={() => {
        if (!isSuccess) onClose();
      }}
    >
      <div
        className="relative w-full max-w-md bg-gradient-to-b from-[#0a1120] via-[#050912] to-black border border-cyan-500/40 rounded-2xl p-4 sm:p-8 shadow-2xl shadow-cyan-950/60 text-left my-8 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glowing top line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-t-2xl" />

        {/* Close Button */}
        {!isSuccess && (
          <button
            id="close-zip-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-slate-750 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {isSuccess ? (
          /* Success State */
          <div className="py-4 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-cyan-950/90 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/30">
              <CheckCircle2 className="w-9 h-9 text-cyan-400" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                AVAILABILITY CONFIRMED
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
                ZIP {zipCode.trim()} IS ELIGIBLE
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto leading-relaxed">
                Great news! We currently accept mobile detailing requests in your area.
              </p>
            </div>

            <div className="pt-3 flex items-center justify-center gap-2 text-xs text-cyan-400/90 font-mono">
              <span className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              <span>Continuing to estimate form...</span>
            </div>
          </div>
        ) : (
          /* Input Form */
          <div>
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 shadow-lg shadow-cyan-950/50">
              <MapPin className="w-6 h-6" />
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-black text-white tracking-tight">
              CHECK YOUR SERVICE AVAILABILITY
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 mb-6 leading-relaxed">
              Enter your ZIP code to check availability in your area.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  ZIP CODE
                </label>
                <input
                  id="zip-availability-input"
                  type="text"
                  inputMode="numeric"
                  value={zipCode}
                  onChange={(e) => {
                    setZipCode(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Enter your ZIP code"
                  autoFocus
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-750 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-base font-mono transition-all"
                />

                {error && (
                  <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-2 font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
              </div>

              <button
                id="submit-zip-check-btn"
                type="submit"
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>CHECK AVAILABILITY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
