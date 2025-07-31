import React, { useEffect } from 'react';

const BlobCursor = () => {
  useEffect(() => {
    const blob = document.getElementById('blob-cursor');
    const move = (e) => {
      blob.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        { duration: 500, fill: 'forwards' }
      );
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      id="blob-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'rgba(255, 0, 200, 0.4)',
        backdropFilter: 'blur(5px)',
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default BlobCursor;