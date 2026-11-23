"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useHoverColorStore } from "../store/hoverColorStore";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const hoverColor = useHoverColorStore((state) => state.hoverColor);
  // We crossfade between two gradient layers because CSS cannot smoothly interpolate `background: radial-gradient(...)`.
  const [frontColor, setFrontColor] = useState<string>("transparent");
  const [backColor, setBackColor] = useState<string>("transparent");
  const [frontOpacity, setFrontOpacity] = useState<number>(0);
  const [backOpacity, setBackOpacity] = useState<number>(0);
  const [instantSwap, setInstantSwap] = useState(false);

  // When moving directly between cards, `hoverColor` often briefly becomes `null` (mouse leave),
  // which would otherwise start fading out. This delay prevents a visible "dip".
  const LEAVE_DELAY_MS = 120;
  const FADE_DURATION_S = 0.6;
  const FADE_DURATION_MS = FADE_DURATION_S * 1000;

  // Keep timers in refs so we can cancel/restart transitions when hoverColor changes rapidly.
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const frontColorRef = useRef(frontColor);
  const frontOpacityRef = useRef(frontOpacity);

  useEffect(() => {
    frontColorRef.current = frontColor;
    frontOpacityRef.current = frontOpacity;
  }, [frontColor, frontOpacity]);

  useEffect(() => {
    // Cancel any scheduled transitions before starting a new one.
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    if (transitionTimeoutRef.current)
      clearTimeout(transitionTimeoutRef.current);

    const applyInstantSwapToFront = (next: string) => {
      setInstantSwap(true);
      setFrontColor(next);
      setFrontOpacity(1);
      setBackOpacity(0);
      setBackColor("transparent");
      // Turn transitions back on after this render.
      requestAnimationFrame(() => setInstantSwap(false));
    };

    if (!hoverColor) {
      // Graceful fade-out after a short delay (prevents a visible dip when switching cards).
      leaveTimeoutRef.current = setTimeout(() => {
        setFrontOpacity(0);
        setBackOpacity(0);
      }, LEAVE_DELAY_MS);
      return;
    }

    const currentFrontColor = frontColorRef.current;
    const currentFrontOpacity = frontOpacityRef.current;

    // If we were hidden (or haven't set anything yet), just show the new gradient.
    if (!currentFrontColor || currentFrontColor === "transparent" || currentFrontOpacity <= 0.01) {
      requestAnimationFrame(() => {
        setFrontColor(hoverColor);
        setBackColor("transparent");
        setBackOpacity(0);
        setFrontOpacity(1);
      });
      return;
    }

    // No change.
    if (hoverColor === currentFrontColor) {
      requestAnimationFrame(() => setFrontOpacity(1));
      return;
    }

    // Crossfade: old front -> opacity 0, new back -> opacity 1.
    requestAnimationFrame(() => {
      setBackColor(hoverColor);
      setBackOpacity(1);
      setFrontOpacity(0);
    });

    transitionTimeoutRef.current = setTimeout(() => {
      applyInstantSwapToFront(hoverColor);
    }, FADE_DURATION_MS);

    return () => {
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
      if (transitionTimeoutRef.current)
        clearTimeout(transitionTimeoutRef.current);
    };
  }, [hoverColor]);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-[var(--background)]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 will-change-opacity"
        style={{ background: frontColor }}
        initial={false}
        animate={{ opacity: frontOpacity }}
        transition={{
          duration: instantSwap ? 0 : FADE_DURATION_S,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 will-change-opacity"
        style={{ background: backColor }}
        initial={false}
        animate={{ opacity: backOpacity }}
        transition={{
          duration: instantSwap ? 0 : FADE_DURATION_S,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}