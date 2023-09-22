// useScrollToTop.tsx
import { useEffect } from 'react';

interface UseScrollToTopProps {
  ref: React.RefObject<HTMLDivElement>; // a ref object that refers to the scroll container
  segments: string[]; // the transcript segments from the Transcript component
}

export function useScrollToTop({ ref, segments }: UseScrollToTopProps) {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0; // scroll to the top of the container when a new segment is added
    }
  }, [ref, segments]); // add ref and segments as dependencies to run the useEffect hook when they change
}
