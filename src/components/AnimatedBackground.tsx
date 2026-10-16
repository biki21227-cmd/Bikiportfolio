import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse coordinates in viewport
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
      isActive: false
    };

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      // Adjust density based on screen dimensions
      const count = Math.min(Math.floor((width * height) / 22000), 75);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.6 + 0.9,
          baseAlpha: Math.random() * 0.35 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    handleResize();

    let frameCount = 0;

    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      
      // Dynamic colors based on theme
      const dotRgb = isDark ? '147, 197, 253' : '59, 130, 246'; // lighter blue in dark, rich blue in light
      const lineRgb = isDark ? '129, 140, 248' : '99, 102, 241'; // indigo
      const maxConnectDist = 110;

      // Draw connecting filaments between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const factor = 1 - dist / maxConnectDist;
            const alpha = factor * (isDark ? 0.16 : 0.10);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineRgb}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw mouse connection web when hovering
      if (mouse.isActive && !prefersReducedMotion) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const factor = 1 - dist / mouse.radius;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${dotRgb}, ${factor * 0.25})`;
            ctx.lineWidth = 1;
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.stroke();
          }
        }
      }

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap edges smoothly
          if (p.x < 0) p.x = width;
          else if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          else if (p.y > height) p.y = 0;

          // Cursor interactive push deflection
          if (mouse.isActive) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius && dist > 0) {
              const force = (mouse.radius - dist) / mouse.radius;
              const angle = Math.atan2(dy, dx);
              p.x += Math.cos(angle) * force * 1.8;
              p.y += Math.sin(angle) * force * 1.8;
            }
          }

          p.pulsePhase += p.pulseSpeed;
        }

        const pulse = Math.sin(p.pulsePhase) * 0.2 + 0.8;
        const alpha = p.baseAlpha * pulse * (isDark ? 1 : 0.85);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotRgb}, ${alpha})`;
        ctx.fill();

        // Subtle glow halo around larger particles
        if (p.radius > 1.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dotRgb}, ${alpha * 0.2})`;
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden"
    >
      {/* Dynamic Animated Grid Pattern */}
      <div className="bg-grid-pattern absolute inset-0 h-full w-full opacity-60 dark:opacity-40" />

      {/* Floating Animated Gradient Aurora Orbs */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        {/* Top Right Cyan/Blue Orb */}
        <div 
          className="animate-float-1 absolute -top-24 -right-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-400/20 via-indigo-500/15 to-transparent blur-[100px] dark:from-blue-600/20 dark:via-cyan-500/15"
        />

        {/* Center Left Violet/Indigo Orb */}
        <div 
          className="animate-float-2 absolute top-1/3 -left-36 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-purple-400/15 via-blue-500/15 to-transparent blur-[110px] dark:from-purple-600/20 dark:via-indigo-600/15"
        />

        {/* Bottom Right Emerald/Cyan Glow Orb */}
        <div 
          className="animate-float-3 absolute -bottom-32 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-t from-emerald-400/15 via-teal-500/10 to-transparent blur-[100px] dark:from-teal-600/15 dark:via-emerald-500/10"
        />

        {/* Subtle Horizontal Aurora Horizon Ribbon */}
        <div 
          className="animate-aurora absolute top-1/2 left-0 right-0 h-72 w-full bg-gradient-to-r from-transparent via-blue-400/5 to-transparent blur-3xl dark:via-blue-500/10 pointer-events-none"
        />
      </div>

      {/* Interactive Canvas Particle & Filament Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
};
