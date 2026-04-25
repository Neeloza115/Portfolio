'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent, ReactNode } from 'react';

type TiltCardProps = {
  tiltLimit?: number;
  scale?: number;
  perspective?: number;
  effect?: 'gravitate' | 'evade';
  spotlight?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

function joinClassNames(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function TiltCard({
  tiltLimit = 15,
  scale = 1.05,
  perspective = 1200,
  effect = 'evade',
  spotlight = true,
  className,
  style,
  children,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  const baseTransform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  const direction = effect === 'evade' ? -1 : 1;

  useEffect(() => {
    const updateInteractivity = () => {
      setIsInteractive(
        window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
          !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    };

    updateInteractivity();

    const hoverMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

    hoverMedia.addEventListener('change', updateInteractivity);
    motionMedia.addEventListener('change', updateInteractivity);

    return () => {
      hoverMedia.removeEventListener('change', updateInteractivity);
      motionMedia.removeEventListener('change', updateInteractivity);
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = baseTransform;
    card.style.setProperty('--tilt-spotlight-x', '50%');
    card.style.setProperty('--tilt-spotlight-y', '50%');
  }, [baseTransform]);

  const handlePointerEnter = () => {
    if (!isInteractive) return;
    setIsHovered(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isInteractive) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const xRotation = (py - 0.5) * (tiltLimit * 2) * direction;
    const yRotation = (px - 0.5) * -(tiltLimit * 2) * direction;

    card.style.transform = `perspective(${perspective}px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(${scale}, ${scale}, ${scale})`;
    card.style.setProperty('--tilt-spotlight-x', `${px * 100}%`);
    card.style.setProperty('--tilt-spotlight-y', `${py * 100}%`);
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = baseTransform;
    }

    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      data-hovered={isHovered}
      className={joinClassNames('tilt-card-active', className)}
      style={{
        ...style,
        transform: baseTransform,
      }}
    >
      {spotlight ? (
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s ease' }}
        >
          <div
            className="absolute h-[200%] w-[200%] rounded-full"
            style={{
              left: 'var(--tilt-spotlight-x, 50%)',
              top: 'var(--tilt-spotlight-y, 50%)',
              transform: 'translate(-50%, -50%)',
              background:
                'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 40%)',
            }}
          />
        </div>
      ) : null}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
