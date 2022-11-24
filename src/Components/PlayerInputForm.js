import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PlayerInputForm = (props) => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.onAddPlayer({
      name: formatName(name),
      id: uuidv4(),
      invalidRecipients: [],
    });
    setName('');
  };

  return (
    <React.Fragment>
      <h1>Enter a new Player</h1>
      <form onSubmit={handleFormSubmission}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <button type="submit">Add</button>
      </form>
    </React.Fragment>
  );
};

export default PlayerInputForm;

const formatName = (name) => {
  const nameArr = name.split(' ');
  return nameArr.map(capitalizeFirstLetter).join(' ');
};

const capitalizeFirstLetter = (word) => {
  const charArr = word.split('');
  charArr[0] = charArr[0].toUpperCase();
  return charArr.join('');
};
