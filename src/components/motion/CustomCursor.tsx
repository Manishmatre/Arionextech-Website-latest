import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, label, .portfolio-card, .btn-primary, .btn-ghost, [data-cursor-hover]';

function isInteractive(el: EventTarget | null) {
  return el instanceof Element && Boolean(el.closest(INTERACTIVE));
}

export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const glowX = useSpring(mouseX, { stiffness: 55, damping: 18 });
  const glowY = useSpring(mouseY, { stiffness: 55, damping: 18 });
  const glowInnerX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const glowInnerY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 24 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 24 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    setActive(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) setHovering(true);
    };

    const onOut = (e: MouseEvent) => {
      if (!isInteractive(e.relatedTarget)) setHovering(false);
    };

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [mouseX, mouseY]);

  if (!active) return null;

  const fade = visible ? 1 : 0;

  return (
    <div className="cursor-fx-layer" aria-hidden>
      <motion.div
        className="cursor-floor-glow"
        style={{ x: glowX, y: glowY, opacity: fade }}
        animate={{ scale: hovering ? 1.12 : 1 }}
        transition={{ duration: 0.35 }}
      />
      <motion.div
        className="cursor-floor-glow-inner"
        style={{ x: glowInnerX, y: glowInnerY, opacity: fade }}
        animate={{ scale: clicking ? 0.92 : hovering ? 1.08 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="custom-cursor-ring"
        style={{ x: ringX, y: ringY, opacity: fade }}
        animate={{ scale: clicking ? 0.9 : hovering ? 1.5 : 1 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="custom-cursor-dot"
        style={{ x: mouseX, y: mouseY, opacity: fade * 0.85 }}
        animate={{ scale: clicking ? 0.6 : hovering ? 1.2 : 1 }}
        transition={{ duration: 0.12 }}
      />
    </div>
  );
}
