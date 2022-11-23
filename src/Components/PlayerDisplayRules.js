import React, { useEffect, useState } from 'react';
import styles from './PlayerRules.module.css';
import PlayerRuleCheckbox from './PlayerRuleCheckbox';
import Icon from './UI/Icon';

const PlayerDisplayRules = (props) => {
  const handleRecipientRuleClick = (checked, invalidId) => {
    props.onRuleNameClick(checked, props.player.id, invalidId);
  };
  return (
    <React.Fragment>
      <h5>Gifts can be given to...</h5>
      <ul className={styles['player-list']}>
        {props.players
          .filter((self) => self.id !== props.player.id)
          .map((player) => {
            return (
              <PlayerRuleCheckbox
                key={player.id}
                player={player}
                onClick={handleRecipientRuleClick}
                invalid={props.player.invalidRecipients.includes(player.id)}
              />
            );
          })}
      </ul>
      <Icon onClick={props.onClose} variant={'close'} />
    </React.Fragment>
  );
};

export default PlayerDisplayRules;
