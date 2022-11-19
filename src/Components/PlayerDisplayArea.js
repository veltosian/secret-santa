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
          onPlayerDelete={props.onPlayerDelete}
          onPlayerEdit={props.onPlayerEdit}
        />
      ))}
    </React.Fragment>
  );
};

export default PlayerDisplayArea;
