import React, { useEffect } from 'react';

const RippleEffect = () => {
  useEffect(() => {
    const createRipple = (x, y) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    };

    const handleClick = (e) => createRipple(e.clientX, e.clientY);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return null;
};

export default RippleEffect;

/* Add this to your CSS:
.ripple {
  position: fixed;
  width: 20px;
  height: 20px;
  background: rgba(0, 200, 255, 0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: rippleEffect 1s ease-out forwards;
  pointer-events: none;
  z-index: 9999;
}

@keyframes rippleEffect {
  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
}
*/