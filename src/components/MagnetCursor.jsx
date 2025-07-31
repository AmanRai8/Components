import React, { useEffect } from 'react';

const MagnetCursor = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.magnet');
    const handleMove = (e) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          item.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
        } else {
          item.style.transform = '';
        }
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div style={{ padding: '100px' }}>
      <button className="magnet" style={{ fontSize: 24, margin: 20 }}>Hover Me</button>
      <button className="magnet" style={{ fontSize: 24, margin: 20 }}>I'm Magnet</button>
    </div>
  );
};

export default MagnetCursor;