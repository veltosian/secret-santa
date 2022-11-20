import React, { useState } from 'react';
import PlayerEdit from './PlayerEdit';
import Card from './UI/Card';
import Icon from './UI/Icon';

const PlayerDisplay = (props) => {
  const [editOpen, setEditOpen] = useState(false);

  const handlePlayerDelete = () => {
    props.onPlayerDelete(props.player);
  };

  const openEditMenu = () => {
    setEditOpen(true);
  };

  const closeEditMenu = () => {
    setEditOpen(false);
  };

  return (
    <Card>
      <p>{props.player.name}</p>
      {editOpen && (
        <PlayerEdit
          onPlayerEdit={props.onPlayerEdit}
          onClose={closeEditMenu}
          player={props.player}
        />
      )}
      <Icon variant="edit" onClick={openEditMenu} />
      <Icon variant="delete" onClick={handlePlayerDelete} />
    </Card>
  );
};

export default PlayerDisplay;
