import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PlayerInputForm = (props) => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.onAddPlayer({ name: name, id: uuidv4() });
    setName('');
  };

  return (
    <React.Fragment>
      <h1>Enter a new Player</h1>
      <form onSubmit={handleFormSubmission}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </form>
    </React.Fragment>
  );
};

export default PlayerInputForm;
