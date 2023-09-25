// TranscriptControls.tsx
import { Slider } from "@nextui-org/react/slider";
import Transcript from "./Transcript";

export default function TranscriptControls({ textSize, isPaused }) {
  return (
    <>
      <Transcript textSize={textSize} isPaused={isPaused} />
      <Slider
        value={textSize}
        min={10}
        max={30}
        step={1}
        onChange={(value) => handleTextSizeChange(value)}
        className="w-40 h-8"
      />
    </>
  );
}