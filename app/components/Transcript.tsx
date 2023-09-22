// Transcript.tsx
import React, { useEffect, useState } from 'react';
import TextScroll from './TextScroll';

interface TranscriptProps {
  textSize: number; // the text size from the console
  isPaused: boolean; // the pause state from the console
}

function Transcript({ textSize, isPaused }: TranscriptProps) {
  const [segments, setSegments] = useState<string[]>([]); // the segments state that contains the transcript segments

  const reviseText = (segment: string) => {
    // this function takes a segment as a parameter and returns a revised version
    // you can use any NLP model or logic that you want to revise the text
    // for example, you can use a spelling or grammar checker, a sentiment analyzer, a summarizer, etc.
    // for simplicity, I will just return the segment as it is
    return segment;
  };

  useEffect(() => {
    liveTranscriptionRef.current?.on("result", (result) => {
      // this event is triggered when a new transcript segment is available from the Deepgram API
      const revisedSegment = reviseText(result.text); // revise the transcript text with the reviseText function
      setSegments((prevSegments) => [...prevSegments, revisedSegment]); // add the revised segment to the segments state
    });
  }, []); // no dependencies needed

  return (
    <TextScroll segments={segments} textSize={textSize} /> // pass the segments and textSize props to the TextScroll component
  );
}

export default Transcript;
