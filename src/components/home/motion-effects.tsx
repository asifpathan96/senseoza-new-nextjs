"use client";

import {
  useCallback,
  useRef,
  type PointerEvent,
  type ReactNode,
} from "react";

export const viewOnce = { once: true, amount: 0.12 as const, margin: "-80px 0px -10% 0px" };

export const easeOut = [0.22, 1, 0.36, 1] as const;

export function usePointerTilt(strength = 8) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      el.style.setProperty("--px", `${(x / rect.width) * 100}%`);
      el.style.setProperty("--py", `${(y / rect.height) * 100}%`);
      el.style.setProperty("--rx", `${(0.5 - y / rect.height) * strength}deg`);
      el.style.setProperty("--ry", `${(x / rect.width - 0.5) * strength}deg`);
    },
    [strength],
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--px", "50%");
    el.style.setProperty("--py", "50%");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}

export function TiltSurface({
  children,
  className = "",
  strength = 8,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const { ref, onPointerMove, onPointerLeave } = usePointerTilt(strength);

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`tilt-surface ${className}`}
    >
      <span className="pointer-glow" aria-hidden="true" />
      {children}
    </div>
  );
}
