import { useEffect, useRef, useState } from "react";

export function useScrollReveal(options?: { threshold?: number; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options?.once !== false) observer.unobserve(el);
        }
      },
      { threshold: options?.threshold ?? 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.once]);

  return { ref, isVisible };
}
