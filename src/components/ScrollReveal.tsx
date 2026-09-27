import React, { useEffect, useRef, useState } from 'react';

export type RevealVariant = 'fade-up' | 'fade-in' | 'fade-scale' | 'fade-left' | 'fade-right';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number; // milliseconds delay
  duration?: number; // milliseconds duration
  threshold?: number; // 0 to 1
  className?: string;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 650,
  threshold = 0.1,
  className = '',
  as: Component = 'div',
}) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Respect user's motion preference immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -30px 0px',
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getVariantClasses = () => {
    switch (variant) {
      case 'fade-scale':
        return isRevealed ? 'reveal-scale-active' : 'reveal-scale-hidden';
      case 'fade-in':
        return isRevealed ? 'reveal-fade-active' : 'reveal-fade-hidden';
      case 'fade-left':
        return isRevealed ? 'reveal-left-active' : 'reveal-left-hidden';
      case 'fade-right':
        return isRevealed ? 'reveal-right-active' : 'reveal-right-hidden';
      case 'fade-up':
      default:
        return isRevealed ? 'reveal-up-active' : 'reveal-up-hidden';
    }
  };

  return (
    <Component
      ref={elementRef}
      className={`reveal-base ${getVariantClasses()} ${className}`}
      style={{
        transitionDelay: isRevealed ? `${delay}ms` : '0ms',
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </Component>
  );
};
