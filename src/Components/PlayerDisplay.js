import React, { useState } from 'react';
import PlayerEdit from './PlayerEdit';
import Card from './UI/Card';
import Icon from './UI/Icon';
import PlayerDisplayRules from './PlayerDisplayRules';

const PlayerDisplay = (props) => {
  const [editOpen, setEditOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);

  const handlePlayerDelete = () => {
    props.onPlayerDelete(props.player);
  };

  const openEditMenu = () => {
    setEditOpen(true);
  };

  const closeEditMenu = () => {
    setEditOpen(false);
  };

  const handleRulesOpenToggle = () => {
    setRulesOpen((prevState) => !prevState);
  };
  const handleRulesClose = () => {
    setRulesOpen(false);
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
      <Icon variant="gavel" onClick={handleRulesOpenToggle} />
      {rulesOpen && (
        <PlayerDisplayRules
          player={props.player}
          players={props.players.filter(
            (player) => player.id !== props.player.id
          )}
          onClose={handleRulesClose}
          onRuleNameClick={props.onRuleNameClick}
        />
      )}
    </Card>
  );
};

export default PlayerDisplay;
