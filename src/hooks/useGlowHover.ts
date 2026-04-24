'use client';

import { useEffect } from 'react';

export function useGlowHover() {
  useEffect(() => {
    if (window.innerWidth < 1024 || !window.matchMedia('(min-width: 768px)').matches) {
      return;
    }

    const cleanup = Array.from(document.querySelectorAll<HTMLElement>('.glow-hover')).map((card) => {
      const handleMouseMove = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
      };

      card.addEventListener('mousemove', handleMouseMove);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
      };
    });

    return () => {
      cleanup.forEach((removeListener) => removeListener());
    };
  }, []);
}
