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
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Respect user's motion preference immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      setIsComplete(true);
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsRevealed(true);
      setIsComplete(true);
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

  // When revealed, schedule transition completion to cleanly reset transforms and classes
  useEffect(() => {
    if (!isRevealed || isComplete) return;

    const timeoutDuration = Math.max(0, delay) + Math.max(0, duration) + 80;
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, timeoutDuration);

    return () => clearTimeout(timer);
  }, [isRevealed, isComplete, delay, duration]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLElement>) => {
    if (e.target === elementRef.current) {
      setIsComplete(true);
    }
  };

  const getVariantClasses = () => {
    if (isComplete) return '';
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

  const animationClasses = isComplete ? '' : `reveal-base ${getVariantClasses()}`;

  return (
    <Component
      ref={elementRef as any}
      onTransitionEnd={handleTransitionEnd}
      className={`${animationClasses} ${className}`.trim()}
      style={
        isComplete
          ? undefined
          : {
              transitionDelay: isRevealed ? `${delay}ms` : '0ms',
              transitionDuration: `${duration}ms`,
            }
      }
    >
      {children}
    </Component>
  );
};
