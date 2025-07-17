'use client';

import { useEffect, useRef } from 'react';

const SwirlBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Particle system for swirl animation
    const particles = [];
    const particleCount = 120;
    let time = 0;

    // Initialize particles in a spiral pattern
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        angle: (i / particleCount) * Math.PI * 4, // Multiple spirals
        radius: 50 + (i / particleCount) * 200,
        speed: 0.005 + Math.random() * 0.01,
        size: 1 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.5,
        hue: 200 + Math.random() * 80, // Blue to cyan range
        originalRadius: 50 + (i / particleCount) * 200,
      });
    }

    const animate = () => {
      time += 0.01;
      
      // Clear with slight trail effect for smoother motion
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      particles.forEach((particle, index) => {
        // Update particle angle for rotation
        particle.angle += particle.speed;
        
        // Create breathing/pulsing effect
        const pulse = Math.sin(time * 2 + index * 0.1) * 0.3 + 1;
        const currentRadius = particle.originalRadius * pulse;
        
        // Add some drift to make it more organic
        const drift = Math.sin(time * 0.5 + index) * 10;
        
        // Calculate position
        const x = centerX + Math.cos(particle.angle) * currentRadius + drift;
        const y = centerY + Math.sin(particle.angle) * currentRadius + Math.sin(particle.angle * 2) * 20;

        // Draw particle with glow effect
        const alpha = particle.opacity * (0.5 + Math.sin(time + index * 0.3) * 0.5);
        
        // Outer glow
        ctx.save();
        ctx.globalAlpha = alpha * 0.3;
        ctx.fillStyle = `hsl(${particle.hue}, 70%, 60%)`;
        ctx.beginPath();
        ctx.arc(x, y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Main particle
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `hsl(${particle.hue}, 80%, 70%)`;
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Connect nearby particles
        if (index % 8 === 0) {
          for (let j = index + 1; j < Math.min(index + 4, particles.length); j++) {
            const other = particles[j];
            const otherX = centerX + Math.cos(other.angle) * other.originalRadius * pulse + Math.sin(time * 0.5 + j) * 10;
            const otherY = centerY + Math.sin(other.angle) * other.originalRadius * pulse + Math.sin(other.angle * 2) * 20;
            
            const distance = Math.sqrt((x - otherX) ** 2 + (y - otherY) ** 2);
            if (distance < 80) {
              ctx.save();
              ctx.globalAlpha = (1 - distance / 80) * 0.1;
              ctx.strokeStyle = `hsl(${particle.hue}, 60%, 60%)`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(otherX, otherY);
              ctx.stroke();
              ctx.restore();
            }
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize
    handleResize();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: -1,
        backgroundColor: 'transparent'
      }}
    />
  );
};

export default SwirlBackground;
