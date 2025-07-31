import React from 'react';

const GlowCursor = () => {
  return (
    <div
      id="glow-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'rgba(0, 255, 255, 0.4)',
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        transition: 'transform 0.05s ease-out',
      }}
    />
  );
};

export const useCursorFollow = () => {
  React.useEffect(() => {
    const glow = document.getElementById('glow-cursor');
    const move = (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
};

export default GlowCursor;