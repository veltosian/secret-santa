import React from 'react';
import PlayerDisplay from './PlayerDisplay';

const PlayerDisplayArea = (props) => {
  const { players } = props;

  return (
    <React.Fragment>
      {players.map((player) => (
        <PlayerDisplay
          key={player.id}
          player={player}
          players={players}
          onPlayerDelete={props.onPlayerDelete}
          onPlayerEdit={props.onPlayerEdit}
          onRuleNameClick={props.onRuleNameClick}
        />
      ))}
    </React.Fragment>
  );
};

export default PlayerDisplayArea;
