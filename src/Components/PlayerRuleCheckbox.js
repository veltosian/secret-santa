import React, { useEffect, useState } from 'react';
import styles from './PlayerRuleCheckbox.module.css';

const PlayerRuleCheckbox = (props) => {
  const [checked, setChecked] = useState(!props.invalid);

  const handleClick = () => {
    setChecked((prevState) => !prevState);
  };

  useEffect(() => {
    props.onClick(checked, props.player.id);
  }, [checked, props.player.id]);

  return (
    <li
      key={props.player.id}
      className={checked ? styles.checked : styles.unchecked}
      onClick={handleClick}
    >
      {props.player.name}
    </li>
  );
};

export default PlayerRuleCheckbox;
