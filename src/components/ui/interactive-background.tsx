import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface InteractiveBackgroundProps {
  className?: string;
}

export function InteractiveBackground({ className = '' }: InteractiveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!container || !cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      cursor.style.transform = `translate(${cursorX - 100}px, ${cursorY - 100}px)`;
      
      // Update particles to follow cursor with delay
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          const delay = (index + 1) * 0.02;
          const targetX = cursorX + Math.sin(Date.now() * 0.001 + index) * 20;
          const targetY = cursorY + Math.cos(Date.now() * 0.001 + index) * 20;
          
          particle.style.transform = `translate(${targetX - 10}px, ${targetY - 10}px)`;
          particle.style.opacity = `${0.6 - index * 0.1}`;
        }
      });
      
      requestAnimationFrame(animateCursor);
    };

    container.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Main cursor glow */}
      <div
        ref={cursorRef}
        className="absolute w-48 h-48 rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(270 91% 65% / 0.4) 0%, hsl(290 95% 70% / 0.2) 50%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) particlesRef.current[i] = el;
          }}
          className="absolute w-5 h-5 rounded-full pointer-events-none"
          style={{
            background: `hsl(${270 + i * 10} 91% 65% / ${0.3 - i * 0.03})`,
            filter: 'blur(2px)',
          }}
        />
      ))}
      
      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}