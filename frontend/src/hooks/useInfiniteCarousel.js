import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function useInfiniteCarousel(items, cloneCount = 3) {
  const total = items.length;
  const [trackIndex, setTrackIndex] = useState(cloneCount);
  const [enableTransition, setEnableTransition] = useState(true);
  const pointerStartX = useRef(null);
  const lockRef = useRef(false);

  const extendedItems = useMemo(() => {
    if (total === 0) return [];
    const prefix = [];
    const suffix = [];
    for (let i = 0; i < cloneCount; i += 1) {
      prefix.unshift(items[(total - 1 - (i % total) + total) % total]);
      suffix.push(items[i % total]);
    }
    return [...prefix, ...items, ...suffix];
  }, [items, total, cloneCount]);

  const step = useCallback(
    (delta) => {
      if (total <= 1 || lockRef.current) return;
      lockRef.current = true;
      setEnableTransition(true);
      setTrackIndex((prev) => prev + delta);
    },
    [total]
  );

  const next = useCallback(() => step(1), [step]);
  const prev = useCallback(() => step(-1), [step]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      lockRef.current = false;
      if (trackIndex >= cloneCount + total) {
        setEnableTransition(false);
        setTrackIndex((current) => current - total);
      } else if (trackIndex < cloneCount) {
        setEnableTransition(false);
        setTrackIndex((current) => current + total);
      }
    }, 520);
    return () => window.clearTimeout(timer);
  }, [trackIndex, cloneCount, total]);

  const handleTransitionEnd = useCallback(
    (event) => {
      if (event.target !== event.currentTarget) return;
      lockRef.current = false;
      if (trackIndex >= cloneCount + total) {
        setEnableTransition(false);
        setTrackIndex((current) => current - total);
      } else if (trackIndex < cloneCount) {
        setEnableTransition(false);
        setTrackIndex((current) => current + total);
      }
    },
    [trackIndex, cloneCount, total]
  );

  useEffect(() => {
    if (!enableTransition) {
      const id = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
      return () => window.cancelAnimationFrame(id);
    }
    return undefined;
  }, [enableTransition]);

  const onPointerDown = useCallback((event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStartX.current = event.clientX;
  }, []);

  const onPointerUp = useCallback(
    (event) => {
      if (pointerStartX.current === null) return;
      const dx = event.clientX - pointerStartX.current;
      pointerStartX.current = null;
      if (Math.abs(dx) > 44) {
        step(dx < 0 ? 1 : -1);
      }
    },
    [step]
  );

  const onPointerCancel = useCallback(() => {
    pointerStartX.current = null;
  }, []);

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
    },
    [prev, next]
  );

  return {
    extendedItems,
    trackIndex,
    enableTransition,
    next,
    prev,
    handleTransitionEnd,
    gestureProps: {
      onPointerDown,
      onPointerUp,
      onPointerCancel,
      onKeyDown,
    },
  };
}
