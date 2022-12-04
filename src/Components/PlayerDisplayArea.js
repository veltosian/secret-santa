import React from 'react';
import PlayerDisplay from './PlayerDisplay';
import Card from './UI/Card';
import styles from './PlayerDisplayArea.module.css';

const PlayerDisplayArea = (props) => {
  const { players } = props;

  return (
    <Card className={styles['player-display-area']}>
      {players
        .sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        )
        .map((player) => (
          <PlayerDisplay
            key={player.id}
            player={player}
            players={players}
            onPlayerDelete={props.onPlayerDelete}
            onPlayerEdit={props.onPlayerEdit}
            onRuleNameClick={props.onRuleNameClick}
          />
        ))}
    </Card>
  );
};

export default PlayerDisplayArea;
