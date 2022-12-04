import React, { useState } from 'react';
import PlayerEdit from './PlayerEdit';
import Card from './UI/Card';
import Icon from './UI/Icon';
import PlayerDisplayRules from './PlayerDisplayRules';
import styles from './PlayerDisplay.module.css';

const PlayerDisplay = (props) => {
  const [editOpen, setEditOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);

  const handlePlayerDelete = () => {
    props.onPlayerDelete(props.player.id);
  };

  const toggleEditMenu = () => {
    setEditOpen((prevState) => {
      return !prevState;
    });
  };

  const closeEditMenu = () => {
    setEditOpen(false);
  };

  const handleRulesOpenToggle = () => {
    setRulesOpen((prevState) => !prevState);
  };
  const handleRulesClose = () => {
    setRulesOpen(false);
  };

  return (
    <div className={styles['player-display']}>
      <div className={styles['player-control']}>
        <p className={styles['player-name']}>{props.player.name}</p>
        <div>
          <Icon variant="edit" onClick={toggleEditMenu} />
          <Icon variant="delete" onClick={handlePlayerDelete} />
          <Icon variant="gavel" onClick={handleRulesOpenToggle} />
        </div>
      </div>
      <div>
        {editOpen && (
          <PlayerEdit
            onPlayerEdit={props.onPlayerEdit}
            onClose={closeEditMenu}
            player={props.player}
          />
        )}
        {rulesOpen && (
          <PlayerDisplayRules
            player={props.player}
            players={props.players.filter(
              (player) => player.id !== props.player.id
            )}
            onClose={handleRulesClose}
            onRuleNameClick={props.onRuleNameClick}
          />
        )}
      </div>
    </div>
  );
};

export default PlayerDisplay;
