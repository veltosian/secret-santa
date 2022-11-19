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
      <p>{formatName(props.player.name)}</p>
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

const formatName = (name) => {
  const nameArr = name.split(' ');
  return nameArr.map(capitalizeFirstLetter).join(' ');
};

const capitalizeFirstLetter = (word) => {
  const charArr = word.split('');
  charArr[0] = charArr[0].toUpperCase();
  return charArr.join('');
};

export default PlayerDisplay;
