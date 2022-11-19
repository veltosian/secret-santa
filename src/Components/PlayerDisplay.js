import React, { useState } from 'react';
import Card from './UI/Card';
import Icon from './UI/Icon';

const PlayerDisplay = (props) => {
  const [editOpen, setEditOpen] = useState(false);
  const [editedName, setEditedName] = useState(props.player.name);

  const handlePlayerDelete = () => {
    props.onPlayerDelete(props.player);
  };

  const handlePlayerEdit = (event) => {
    event.preventDefault();
    props.onPlayerEdit(props.player);
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
        <form onSubmit={handlePlayerEdit}>
          <label htmlFor="name-edit">Name</label>
          <input id="name-edit" value={editedName}></input>
          <button type="submit">Submit</button>
          <Icon variant="close" onClick={closeEditMenu}></Icon>
        </form>
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
