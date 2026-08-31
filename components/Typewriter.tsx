"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  start?: boolean;
  speed?: number;
  className?: string;
}

export default function Typewriter({
  text,
  start = false,
  speed = 80,
  className,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!start) return;

    let index = 0;

    const interval = setInterval(() => {
      index += 1;

      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [start, text, speed]);

  return <span className={className}>{displayedText}</span>;
}
