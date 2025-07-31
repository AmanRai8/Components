import React, { useEffect, useRef } from 'react';

const SpeedVisualizer = () => {
  const lastTime = useRef(Date.now());
  const lastPos = useRef({ x: 0, y: 0 });
  const speedRef = useRef(0);

  useEffect(() => {
    const speedBox = document.getElementById('speed-box');
    const handleMove = (e) => {
      const now = Date.now();
      const dt = (now - lastTime.current) / 1000;
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      speedRef.current = distance / dt;
      lastTime.current = now;
      lastPos.current = { x: e.clientX, y: e.clientY };

      speedBox.textContent = `Speed: ${Math.round(speedRef.current)} px/s`;
      speedBox.style.left = `${e.clientX + 20}px`;
      speedBox.style.top = `${e.clientY + 20}px`;
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      id="speed-box"
      style={{
        position: 'fixed',
        background: 'black',
        color: 'lime',
        padding: '4px 8px',
        fontSize: '12px',
        borderRadius: '4px',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
};

export default SpeedVisualizer;