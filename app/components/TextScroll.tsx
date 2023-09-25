//TextScroll.tsx

'use client'
import React, { useRef, useEffect } from 'react';
import { useScrollToTop } from './useScrollToTop';

interface TextScrollProps {
  segments: string[]; // the transcript segments from the Transcript component
  textSize: number; // the text size from the console
}

const TextScroll: React.FC<TextScrollProps> = ({ segments, textSize }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useScrollToTop({ ref: scrollRef, segments });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [segments]);

  return (
    <div
      id="text-scroll"
      className="h-full overflow-y-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm border border-blue-300 rounded-md shadow-md"
      ref={scrollRef}
      style={{ direction: "rtl", transform: "rotate(180deg)" }}
    >
      {segments.map((segment, index) => (
        <p
          key={index}
          className="text-gray-900 font-rubik"
          style={{ fontSize: `${textSize}px`, transform: "rotate(180deg)" }}
        >
          {segment}
        </p>
      ))}
    </div>
  );
};

export default TextScroll;