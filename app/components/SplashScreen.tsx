import React, { useState } from 'react';
import { Card, Button, Select } from 'shadcnui'; // You may need to adjust the import based on your UI library


interface SplashScreenProps {
  onStartButtonClick: () => void;
  onLanguageChange: (selectedLanguage: string) => void;
  selectedLanguage: string;
}

const SplashScreen: React.FC<SplashScreenProps> = ({
  onStartButtonClick,
  onLanguageChange,
  selectedLanguage,
}) => {
  const [buttonText, setButtonText] = useState('Start');

  // Function to handle button click
  const handleButtonClick = () => {
    if (buttonText === 'Start') {
      // If the button says "Start," change it to "Stop" and perform start action
      setButtonText('Stop');
      onStartButtonClick();
    } else {
      // If the button says "Stop," change it back to "Start" and perform stop action
      setButtonText('Start');
    }
  };

  // Function to handle language selection change
  const handleLanguageChange = (value: string) => {
    onLanguageChange(value);
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <img src="/path/to/your/logo.png" alt="Your Logo" width="200" height="100" />
      </div>
      <Card>
        <p>
          Introducing Subby: a groundbreaking solution that empowers people with hearing impairments to fully engage in social situations. Our innovative solution offers real-time, accurate transcription, even in noisy environments, bridging the gap left by traditional hearing aids and transcription apps.
        </p>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          options={['Dutch', 'English', 'Spanish', /* Add more languages here */]}
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Button onClick={handleButtonClick} variant="primary">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default SplashScreen;
