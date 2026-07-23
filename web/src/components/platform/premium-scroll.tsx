"use client";

import {
  type ReactNode,
  type TouchEvent,
  type WheelEvent,
  useRef,
  useState,
} from "react";

interface PremiumScrollProps {
  children: ReactNode;
}

export function PremiumScroll({ children }: PremiumScrollProps) {
  const [edgeOffset, setEdgeOffset] = useState(0);
  const touchStartY = useRef<number | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function resetOffset(delay = 80) {
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }

    resetTimer.current = setTimeout(() => {
      setEdgeOffset(0);
    }, delay);
  }

  function getScrollPosition() {
    const root = document.documentElement;

    return {
      atTop: window.scrollY <= 0,
      atBottom:
        Math.ceil(window.scrollY + window.innerHeight) >= root.scrollHeight,
    };
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    const { atTop, atBottom } = getScrollPosition();

    if (atTop && event.deltaY < 0) {
      setEdgeOffset(Math.min(18, Math.abs(event.deltaY) * 0.07));
      resetOffset();
      return;
    }

    if (atBottom && event.deltaY > 0) {
      setEdgeOffset(-Math.min(18, event.deltaY * 0.07));
      resetOffset();
    }
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartY.current = event.touches[0]?.clientY ?? null;
  }

  function handleTouchMove(event: TouchEvent<HTMLDivElement>) {
    const currentY = event.touches[0]?.clientY;

    if (touchStartY.current === null || currentY === undefined) {
      return;
    }

    const difference = currentY - touchStartY.current;
    const { atTop, atBottom } = getScrollPosition();

    if (atTop && difference > 0) {
      setEdgeOffset(Math.min(20, difference * 0.12));
      return;
    }

    if (atBottom && difference < 0) {
      setEdgeOffset(Math.max(-20, difference * 0.12));
    }
  }

  function handleTouchEnd() {
    touchStartY.current = null;
    setEdgeOffset(0);
  }

  return (
    <div
      className="premium-page min-h-screen will-change-transform"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `translate3d(0, ${edgeOffset}px, 0)`,
        transition: "transform 420ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}