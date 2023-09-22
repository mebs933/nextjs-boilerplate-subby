// DynamicUIConsole.tsx
import React, { useState } from "react";
import { Slider } from "@nextui-org/react/slider";
import { Select } from "@nextui-org/react/select";
import { Button } from "@nextui-org/react/button";
import Recorder from "./Recorder"; // import the Recorder component from the Recorder.tsx file
import Transcript from "./Transcript";

const languages = [
  { name: "Nederlands", code: "nl" },
  { name: "English", code: "en" },
  { name: "Español", code: "es" },
  // add more languages here
];

export default function DynamicUIConsole() {
  const [textSize, setTextSize] = useState(16); // initial text size in pixels
  const [language, setLanguage] = useState(languages[0]); // initial language
  const [isRecording, setIsRecording] = useState(false); // initial recording state
  const [isPaused, setIsPaused] = useState(false); // initial pause state

  const handleTextSizeChange = (value) => {
    setTextSize(value);
  };

  const handleLanguageChange = (value) => {
    const selectedLanguage = languages.find((lang) => lang.code === value);
    setLanguage(selectedLanguage);
  };

  const handleRecordingChange = (value) => {
    setIsRecording(value);
  };

  const handlePauseChange = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-row items-center justify-center space-x-4 p-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm border border-blue-300 rounded-md shadow-md">
        <Recorder language={language.code} onRecordingChange={handleRecordingChange} /> {/* pass the language code and the recording change handler as props to the Recorder component */}
        <Select
          value={language.code} // use the language code as the select value
          onChange={(e) => handleLanguageChange(e.target.value)} // change the language state when an option is selected
          placeholder="Select a language"
          className="w-40"
        >
          {languages.map((lang) => (
            <Select.Option key={lang.code} value={lang.code}>
              {lang.name}
            </Select.Option>
          ))}
        </Select>
        <Button color={isRecording ? 'error' : 'primary'} onClick={isRecording ? handleStopRecording : handleStartRecording}>{isRecording ? 'Stop' : 'Start'}</Button> {/* move the start/stop button to the console and use the recording state to toggle it */}
        <Button color={isPaused ? 'warning' : 'secondary'} onClick={handlePauseChange}>{isPaused ? 'Resume' : 'Pause'}</Button> {/* add a pause/resume button to the console and use the pause state to toggle it */}
        <Slider
          value={textSize} // use the text size state as the slider value
          min={10} // minimum text size
          max={30} // maximum text size
          step={1} // increment by 1 pixel
          onChange={(value) => handleTextSizeChange(value)} // change the text size state when the slider value changes
          className="w-40 h-8"
        />
      </div>
      <div className="w-full max-w-screen-lg p-4 mt-8 overflow-y-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm border border-blue-300 rounded-md shadow-md">
        <Transcript textSize={textSize} isPaused={isPaused} /> {/* pass the text size and the pause state as props to the Transcript component */}
      </div>
    </div>
  );
}
