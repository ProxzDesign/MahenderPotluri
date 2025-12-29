"use client";

import { useEffect, type ReactNode } from "react";

export default function ButtonAnimProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const DURATION = 1000;

    const buttons = Array.from(
      document.querySelectorAll<HTMLElement>("[data-anim-btn]")
    );

    type AnimState = {
      isHovering: boolean;
      isFinishing: boolean;
      startTime: number | null;
      frameId: number | null;
      icon: HTMLElement;
    };

    const states = new Map<HTMLElement, AnimState>();

    const setProgress = (icon: HTMLElement, t: number) => {
      const c = Math.max(0, Math.min(1, t));
      const x = 100 * c;
      const y = -100 * c;
      icon.style.transform = `translate3d(${x}%, ${y}%, 0)`;
    };

    const reset = (icon: HTMLElement) => setProgress(icon, 0);

    const makeLoop =
      (btn: HTMLElement) =>
      (timestamp: number): void => {
        const state = states.get(btn);
        if (!state) return;

        if (state.startTime === null) state.startTime = timestamp;
        const elapsed = timestamp - state.startTime;
        const cycleProgress = (elapsed % DURATION) / DURATION;

        if (state.isHovering) {
          setProgress(state.icon, cycleProgress);
          state.frameId = requestAnimationFrame(makeLoop(btn));
        } else if (state.isFinishing) {
          const remaining = DURATION - (elapsed % DURATION);
          setProgress(state.icon, cycleProgress);
          if (remaining <= 16) {
            state.isFinishing = false;
            reset(state.icon);
            state.startTime = null;
            state.frameId = null;
          } else {
            state.frameId = requestAnimationFrame(makeLoop(btn));
          }
        } else {
          reset(state.icon);
          state.startTime = null;
          state.frameId = null;
        }
      };

    const listeners: { btn: HTMLElement; enter: () => void; leave: () => void }[] = [];

    for (const btn of buttons) {
      const icon = btn.querySelector<HTMLElement>("[data-anim-icon]");
      if (!icon) continue;

      states.set(btn, {
        isHovering: false,
        isFinishing: false,
        startTime: null,
        frameId: null,
        icon,
      });

      const enter = () => {
        const state = states.get(btn);
        if (!state) return;
        state.isHovering = true;
        state.isFinishing = false;
        state.startTime = null;
        if (state.frameId === null) {
          state.frameId = requestAnimationFrame(makeLoop(btn));
        }
      };

      const leave = () => {
        const state = states.get(btn);
        if (!state) return;
        state.isHovering = false;
        state.isFinishing = true;
        if (state.frameId === null) {
          state.startTime = null;
          state.frameId = requestAnimationFrame(makeLoop(btn));
        }
      };

      btn.addEventListener("mouseenter", enter);
      btn.addEventListener("mouseleave", leave);
      listeners.push({ btn, enter, leave });
    }

    return () => {
      for (const { btn, enter, leave } of listeners) {
        btn.removeEventListener("mouseenter", enter);
        btn.removeEventListener("mouseleave", leave);
      }
      for (const [, state] of states) {
        if (state.frameId !== null) cancelAnimationFrame(state.frameId);
      }
      states.clear();
    };
  }, []);

  return <>{children}</>;
}
