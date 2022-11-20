import React from 'react';
import styles from './RulesPlayerDisplay.module.css';

const RulesPlayerDisplay = (props) => {
  let className = '';
  if (props.selected) {
    className = styles['selected-player'];
  }

  const handlePlayerOnClick = () => {
    props.onClick(props.player.id);
    console.log(`Selected: ${props.selected}`);
  };

  return (
    <li className={`${className} ${styles.li}`} onClick={handlePlayerOnClick}>
      {props.player.name}
    </li>
  );
};

export default RulesPlayerDisplay;
