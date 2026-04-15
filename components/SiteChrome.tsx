"use client";

import { useEffect, useState } from "react";
import { useHoverColorStore } from "../store/hoverColorStore";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const hoverColor = useHoverColorStore((state) => state.hoverColor);
  const [overlayColor, setOverlayColor] = useState<string>("transparent");

  useEffect(() => {
    if (hoverColor) {
      setOverlayColor(hoverColor);
    }
  }, [hoverColor]);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-[var(--background)]"
    >
      <div
        className="pointer-events-none absolute inset-0 will-change-opacity transition-opacity duration-4000 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          opacity: hoverColor ? 1 : 0,
          background: overlayColor,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}