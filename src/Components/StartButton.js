import React from 'react';
import styles from './StartButton.module.css';

const StartButton = (props) => {
  return (
    <button className={styles['start-button']} onClick={props.onClick}>
      Let's get Started!
    </button>
  );
};

export default StartButton;
