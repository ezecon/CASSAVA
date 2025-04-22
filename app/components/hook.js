// hooks/useOnScreen.js
import { useEffect, useRef, useState } from "react";

export default function useOnScreen(threshold = 0.1) {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [ref, isVisible];
}
