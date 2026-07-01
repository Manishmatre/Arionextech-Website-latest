import { useEffect, useRef, useState } from 'react';

const FLOATING_TAGS = [
  { text: 'React', top: '12%', left: '8%', delay: 0 },
  { text: '{ API }', top: '28%', left: '88%', delay: 2 },
  { text: 'TypeScript', top: '55%', left: '5%', delay: 4 },
  { text: '0x1A4F', top: '72%', left: '92%', delay: 1 },
  { text: 'Cloud', top: '85%', left: '15%', delay: 3 },
  { text: '</>', top: '18%', left: '78%', delay: 5 },
  { text: 'AI · ML', top: '42%', left: '94%', delay: 2.5 },
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const PARTICLE_COUNT = 55;
const CONNECT_DIST = 140;

export default function TechAmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const scrollRef = useRef(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    setEnabled(true);

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;

    const initParticles = () => {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.5 + 0.5,
      }));
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      if (particlesRef.current.length === 0) initParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const particles = particlesRef.current;
      const parallax = scrollRef.current * 0.08;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(a.x, a.y - parallax * 0.02);
            ctx.lineTo(b.x, b.y - parallax * 0.02);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(165, 180, 252, 0.55)';
        ctx.arc(p.x, p.y - parallax * 0.03, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="tech-ambient" aria-hidden>
      <canvas ref={canvasRef} className="tech-ambient-canvas" />
      <div className="tech-ambient-mesh" />
      <div className="tech-ambient-grid-3d" />
      <div className="tech-ambient-scan" />

      <div className="tech-wire-shape tech-wire-cube">
        <div className="tech-wire-cube-inner">
          <span className="tech-wire-face" />
          <span className="tech-wire-face" />
          <span className="tech-wire-face" />
          <span className="tech-wire-face" />
          <span className="tech-wire-face" />
          <span className="tech-wire-face" />
        </div>
      </div>

      <div className="tech-wire-shape tech-wire-ring" />

      {FLOATING_TAGS.map((tag) => (
        <span
          key={tag.text}
          className="tech-floating-tag"
          style={{
            top: tag.top,
            left: tag.left,
            animationDelay: `${tag.delay}s`,
          }}
        >
          {tag.text}
        </span>
      ))}
    </div>
  );
}
