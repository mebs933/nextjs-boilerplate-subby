// TextScroll.tsx
import React, { useRef } from 'react';
import { useScrollToTop } from './useScrollToTop'; // import the custom hook from the useScrollToTop.tsx file

interface TextScrollProps {
  segments: string[]; // the transcript segments from the Transcript component
  textSize: number; // the text size from the console
}

function TextScroll({ segments, textSize }: TextScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null); // create a ref for the scroll container

  useScrollToTop({ ref: scrollRef, segments: segments }); // use the custom hook to scroll to the top of the container when a new segment is added

  return (
    <div id="text-scroll" className="h-full overflow-y-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm border border-blue-300 rounded-md shadow-md" ref={scrollRef} style={{ direction: "rtl", transform: "rotate(180deg)" }}> {/* add the background color, opacity, filter, border, border radius and box shadow styles to the scroll container */}
      {segments.map((segment, index) => (
        <p key={index} className="text-gray-900 font-rubik" style={{ fontSize: `${textSize}px`, transform: "rotate(180deg)" }}>{segment}</p> // keep the text color, font and rotation styles for each segment
      ))}
    </div>
  );
}

export default TextScroll;
