import './App.css';
import React, { useState } from 'react';
import StartButton from './Components/StartButton';
import SecretSantaSetup from './Components/SecretSantaSetup';

function App() {
  const [started, setStarted] = useState(false);

  const handleStartupClick = (e) => {
    setStarted((prevState) => {
      return !prevState;
    });
  };

  if (!started) {
    return (
      <React.Fragment>
        <h1>Salutations from the Secret Santa Setup System!</h1>
        <h2>
          If you want to organize a secret santa game over the holidays this is
          the way to do it!
        </h2>
        <StartButton onClick={handleStartupClick} />
      </React.Fragment>
    );
  } else {
    // zy TODO
    return <SecretSantaSetup />;
  }
}

export default App;
