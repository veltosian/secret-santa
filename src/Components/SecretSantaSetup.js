import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PlayerDisplayArea from './PlayerDisplayArea';
import PlayerInputForm from './PlayerInputForm';
import FindSantas from './FindSantas';
import RulesManager from './Rules/RulesManager';

const SecretSantaSetup = () => {
  const [players, setPlayers] = useState([
    { name: 'Zach', id: uuidv4(), invalidRecipients: [] },
    { name: 'Priscilla', id: uuidv4(), invalidRecipients: [] },
    { name: 'Aurelia', id: uuidv4(), invalidRecipients: [] },
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

  const handleRuleNameClick = (checked, playerId, invalidId) => {
    setPlayers((prevPlayers) => {
      const newPlayers = [...prevPlayers];
      const playerToUpdate = newPlayers.find(
        (player) => player.id === playerId
      );

      if (!checked && !playerToUpdate.invalidRecipients.includes(invalidId)) {
        playerToUpdate.invalidRecipients = [
          invalidId,
          ...playerToUpdate.invalidRecipients,
        ];
      }
      if (checked && playerToUpdate.invalidRecipients.includes(invalidId)) {
        playerToUpdate.invalidRecipients =
          playerToUpdate.invalidRecipients.filter(
            (prevId) => prevId !== invalidId
          );
      }
      return newPlayers;
    });
  };

  return (
    <React.Fragment>
      <PlayerInputForm onAddPlayer={addPlayer} />
      <PlayerDisplayArea
        players={players}
        onPlayerDelete={deletePlayer}
        onPlayerEdit={editPlayer}
        onRuleNameClick={handleRuleNameClick}
      />
      <FindSantas players={players} rules={[nonDuplicateRule]} />
    </React.Fragment>
  );
};

const nonDuplicateRule = (p1, p2) => {
  return p1.id !== p2.id;
};

export default SecretSantaSetup;
