import React, { useState } from 'react';
import StartButton from './Components/StartButton';
import SecretSantaSetup from './Components/SecretSantaSetup';
import Card from './Components/UI/Card';
import styles from './App.module.css';

function App() {
  const [started, setStarted] = useState(false);

  const handleStartupClick = (e) => {
    setStarted((prevState) => {
      return !prevState;
    });
  };

  if (!started) {
    return (
      <Card
        className={`${styles['App-greeting']} ${styles['vertical-center']}`}
      >
        <h1>Salutations from the Secret Santa Setup System!</h1>
        <h2>
          If you want to organize a secret santa game over the holidays this is
          the way to do it!
        </h2>
        <StartButton onClick={handleStartupClick} />
      </Card>
    );
  } else {
    return <SecretSantaSetup />;
  }
}

export default App;
