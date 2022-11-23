import React, { useState } from 'react';
import RulesPlayerDisplay from './RulesPlayerDisplay';
import styles from './RulesInput.module.css';

const RulesManager = (props) => {
  const [selectedPlayerId, setSelectedPlayerId] = useState(undefined);

  const handlePlayerSelect = (id) => {
    setSelectedPlayerId(id);
  };

  return (
    <div>
      <div>
        <h3>Current Players</h3>
        <ul className={styles['no-bullets']}>
          {props.players.map((player) => {
            return (
              <RulesPlayerDisplay
                key={player.id}
                player={player}
                onClick={handlePlayerSelect}
                selected={selectedPlayerId === player.id}
              />
            );
          })}
        </ul>
      </div>
      <div>Players to set a rule for????</div>
    </div>
  );
};

export default RulesManager;
