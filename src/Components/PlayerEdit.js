import React, { useState } from 'react';
import Icon from './UI/Icon';

const PlayerEdit = (props) => {
  /*

  ////// I'M MOVING THE PLAYER RULES INTO THIS COMPONENT!!!!

  */
  const [editedName, setEditedName] = useState(props.player.name);

  const handlePlayerEdit = (event) => {
    event.preventDefault();
    const editedPlayer = { ...props.player };
    editedPlayer.name = editedName;
    props.onPlayerEdit(editedPlayer);
    props.onClose();
  };

  const handleNameEdit = (e) => {
    setEditedName(e.target.value);
  };

  return (
    <form onSubmit={handlePlayerEdit}>
      <label htmlFor="name-edit">Name</label>
      <input
        id="name-edit"
        name="name-edit"
        type="text"
        value={editedName}
        onChange={handleNameEdit}
      ></input>
      <button type="submit">Submit</button>
      <Icon variant="close" onClick={props.onClose}></Icon>
    </form>
  );
};

export default PlayerEdit;
