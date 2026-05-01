import React from "react";

const dots = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: Math.random() * 90,
  top: Math.random() * 90,
  size: Math.random() * 18 + 6,
  opacity: Math.random() * 0.4 + 0.2,
  delay: `${Math.random() * 6}s`,
  duration: `${Math.random() * 7 + 7}s`,
}));

// Moving Dots Background Component
const MovingDotsBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-white/15 blur-sm"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            animation: `float ${dot.duration} ease-in-out ${dot.delay} infinite alternate`,
            boxShadow: `0 0 10px rgba(255,255,255,0.35)`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default MovingDotsBackground;
