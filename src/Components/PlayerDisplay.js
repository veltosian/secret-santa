import React from 'react';
import Card from './UI/Card';

const PlayerDisplay = (props) => {
  const handlePlayerDelete = () => {
    props.onPlayerDelete(props.player.id);
  };
  return (
    <Card>
      <p>{props.player.name}</p>
      <span
        className="material-symbols-outlined"
        onClick={handlePlayerDelete}
        style={{ cursor: 'pointer' }}
      >
        delete
      </span>
    </Card>
  );
};

export default PlayerDisplay;
