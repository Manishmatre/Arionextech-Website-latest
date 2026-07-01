import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  /** Animate on mount (hero) instead of waiting for scroll into view */
  immediate?: boolean;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
  immediate = false,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4, margin: '0px 0px -40px 0px' });
  const [display, setDisplay] = useState(0);
  const shouldRun = immediate || inView;
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!shouldRun) return;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }
    setDisplay(0);
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [shouldRun, value, duration, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
