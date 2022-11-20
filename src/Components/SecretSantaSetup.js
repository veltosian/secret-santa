import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PlayerDisplayArea from './PlayerDisplayArea';
import PlayerInputForm from './PlayerInputForm';
import FindSantas from './FindSantas';
import RulesInput from './Rules/RulesInput';

const SecretSantaSetup = () => {
  const [players, setPlayers] = useState([
    { name: 'zach', id: uuidv4(), rules: [] },
  ]); // zy Debug Remove TEST DATA

  const addPlayer = (player) => {
    setPlayers((prevState) => {
      return [...prevState, player];
    });
  };

  const deletePlayer = (id) => {
    setPlayers((prevState) => {
      return prevState.filter((player) => player.id !== id);
    });
  };

  const editPlayer = (player) => {
    setPlayers((prevState) => {
      const updateIndex = prevState.findIndex(
        (element) => element.id === player.id
      );
      const newState = [...prevState];
      newState[updateIndex] = { ...player };
      return newState;
    });
  };

  return (
    <React.Fragment>
      <PlayerInputForm onAddPlayer={addPlayer} />
      <PlayerDisplayArea
        players={players}
        onPlayerDelete={deletePlayer}
        onPlayerEdit={editPlayer}
      />
      <FindSantas players={players} />
      <RulesInput players={players} universalRules={[nonDuplicateRule]} />
    </React.Fragment>
  );
};

const nonDuplicateRule = (p1, p2) => {
  return p1.id !== p2.id;
};

export default SecretSantaSetup;
