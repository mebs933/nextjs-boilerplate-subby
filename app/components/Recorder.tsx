// Recorder.tsx
import React, { useEffect, useRef } from 'react';
import { Client } from '@deepgram/sdk';

interface RecorderProps {
  language: string; // the language code for the transcription
  onRecordingChange: (value: boolean) => void; // the function to change the recording state in the console
}

const Recorder: React.FC<RecorderProps> = ({ language, onRecordingChange }) => {
  const microphoneRef = useRef<MediaRecorder | null>(null); // the MediaRecorder object that captures the audio from the user's microphone
  const clientRef = useRef<Client>(new Client({ apiKey: process.env.DEEPGRAM_API_KEY })); // the Deepgram client that communicates with the Deepgram API
  const liveTranscriptionRef = useRef<LiveTranscription | null>(null); // the live transcription object that sends and receives data via a WebSocket

  const getMicrophone = async () => {
    // this function gets the user's permission to access the microphone and creates a MediaRecorder object
    try {
      const userMedia = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      microphoneRef.current = new MediaRecorder(userMedia); // assign the MediaRecorder object to the microphone ref
      microphoneRef.current.ondataavailable = (e) => {
        liveTranscriptionRef.current?.send(e.data); // send the data from the microphone to the live transcription object
      };
    } catch (error) {
      console.error(error);
    }
  };

  const openMicrophone = async () => {
    // this function starts the MediaRecorder object and adds event listeners to it
    if (microphoneRef.current) {
      await microphoneRef.current.start(500); // start recording with an interval of 500 milliseconds

      microphoneRef.current.onstart = () => {
        console.log('client: microphone opened');
        document.body.classList.add('recording');
      };

      microphoneRef.current.onstop = () => {
        console.log('client: microphone closed');
        document.body.classList.remove('recording');
      };
    }
  };

  const closeMicrophone = async () => {
    // this function stops the MediaRecorder object and removes event listeners from it
    if (microphoneRef.current) {
      await microphoneRef.current.stop(); // stop recording

      microphoneRef.current.onstart = null; // remove the onstart event listener
      microphoneRef.current.onstop = null; // remove the onstop event listener
      microphoneRef.current.ondataavailable = null; // remove the ondataavailable event listener
    }
  };

  const handleStartRecording = () => {
    // this function starts the recording and changes the recording state
    openMicrophone(); // open the microphone and add event listeners to it
    onRecordingChange(true); // change the recording state to true
  };

  const handleStopRecording = () => {
    // this function stops the recording and changes the recording state
    closeMicrophone(); // close the microphone and remove event listeners from it
    onRecordingChange(false); // change the recording state to false
  };

  const handlePauseRecording = () => {
    // this function pauses or resumes the recording and changes the pause state
    if (microphoneRef.current) {
      if (isPaused) {
        microphoneRef.current.resume(); // resume recording if paused
      } else {
        microphoneRef.current.pause(); // pause recording if not paused
      }
      handlePauseChange(); // toggle the pause state
    }
  };

  useEffect(() => {
    getMicrophone(); // get the user's permission to access the microphone and create a MediaRecorder object when the component mounts

    return () => {
      closeMicrophone(); // stop the MediaRecorder object and remove event listeners from it when the component unmounts
    };
  }, []); // no dependencies needed

  useEffect(() => {
    liveTranscriptionRef.current = clientRef.current.transcription.live({ language: language }); // create a live transcription object with the client ref and the language prop

    return () => {
      liveTranscriptionRef.current?.finish(); // finish the live transcription object when the component unmounts or when the language prop changes
    };
  }, [language]); // add language as a dependency to run the useEffect hook when it changes

  return (
    <div id="recorder">
      {/* remove the button element from the Recorder component */}
    </div>
  );
};

export default Recorder;
