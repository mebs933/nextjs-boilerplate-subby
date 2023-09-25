//DynamicUIConsole.tsx
'use client'

import React, { useState, ChangeEvent } from "react";
import { Slider, Select, Button } from "@nextui-org/react";
import Recorder from "./Recorder";
import Transcript from "./Transcript";
import RecorderControls from "./RecorderControls";
import TranscriptControls from "./TranscriptControls";
import LanguageSelect from './LanguageSelect';
import { languages, Language } from "./languages";
import { useClient } from 'react';

enum RecordingState {
  NotRecording,
  Recording,
  Paused
}

export default function DynamicUIConsole(): JSX.Element {
  const [textSize, setTextSize] = useState<number>(16);
  const [language, setLanguage] = useState<Language>(languages[0]);
  const [recordingState, setRecordingState] = useState<RecordingState>(RecordingState.NotRecording);

  const handleTextSizeChange = (value: number): void => {
    setTextSize(value);
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedLanguage = languages.find((lang) => lang.code === e.target.value);
    setLanguage(selectedLanguage);
  };

  const handleRecordingChange = (value: RecordingState): void => {
    setRecordingState(value);
  };

  const handlePauseChange = (): void => {
    setRecordingState(RecordingState.Paused);
  };

  const handleStopRecording = (): void => {
    // Logic to stop recording
  };

  const handleStartRecording = (): void => {
    // Logic to start recording
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-row items-center justify-center space-x-4 p-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm border border-blue-300 rounded-md shadow-md">
        <RecorderControls
          language={language.code}
          onRecordingChange={handleRecordingChange}
          isRecording={recordingState === RecordingState.Recording}
          isPaused={recordingState === RecordingState.Paused}
          handleStopRecording={handleStopRecording}
          handleStartRecording={handleStartRecording}
          handlePauseChange={handlePauseChange}
        />
        <LanguageSelect
          value={language.code}
          onChange={(e) => handleLanguageChange(e.target.value)}
          languages={languages}
        />
        <Button color={recordingState === RecordingState.Recording ? 'error' : 'primary'} onClick={recordingState === RecordingState.Recording ? handleStopRecording : handleStartRecording}>
          {recordingState === RecordingState.Recording ? 'Stop' : 'Start'}
        </Button>
        <Button color={recordingState === RecordingState.Paused ? 'warning' : 'secondary'} onClick={handlePauseChange}>{recordingState === RecordingState.Paused ? 'Resume' : 'Pause'}</Button>
        <Slider
          value={textSize}
          min={10}
          max={30}
          step={1}
          onChange={(value) => handleTextSizeChange(value)}
          className="w-40 h-8"
        />
      </div>
      <div className="w-full max-w-screen-lg p-4 mt-8 overflow-y-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm border border-blue-300 rounded-md shadow-md">
        <TranscriptControls
          textSize={textSize}
          isPaused={recordingState === RecordingState.Paused}
        />
      </div>
    </div>
  );
}