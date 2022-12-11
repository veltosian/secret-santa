const getPotentialRecipients = (players, rules) => {
  const potentialRecipients = [];
  for (let player of players) {
    const recipients = players.filter(
      (recipient) =>
        runRules(player, recipient, rules) &&
        !player.invalidRecipients.includes(recipient.id)
    );

    potentialRecipients.push({
      playerId: player.id,
      recipients: recipients,
    });
  }
  return potentialRecipients;
};

export const determineSantas = (players, rules) => {
  const pairings = [];
  const pairingPossibilities = getPotentialRecipients(players, rules);

  while (pairingPossibilities.length !== 0) {
    const playerWithShortestList = pairingPossibilities.reduce((acc, ele) => {
      return ele.recipients.length < acc.recipients.length ? ele : acc;
    });

    if (playerWithShortestList.recipients.length === 0) {
      throw new Error(
        'Could not find a set of santas and recipients that satisfy all the rules'
      );
    }

    const shortestListIndex = pairingPossibilities.findIndex(
      (pair) => pair.playerId === playerWithShortestList.playerId
    );

    pairingPossibilities.splice(shortestListIndex, 1);

    const recipientIndex = Math.floor(
      Math.random() * playerWithShortestList.recipients.length
    );
    const chosenRecipient = playerWithShortestList.recipients[recipientIndex];
    const santa = players.find(
      (player) => player.id === playerWithShortestList.playerId
    );

    pairings.push({
      santa: santa,
      recipient: chosenRecipient,
    });

    // Remove recipient from other possible pairings
    pairingPossibilities.forEach((pairingPossibility) => {
      const usedRecipientIndex = pairingPossibility.recipients.findIndex(
        (recipient) => recipient.id === chosenRecipient.id
      );
      if (usedRecipientIndex > -1) {
        pairingPossibility.recipients.splice(usedRecipientIndex, 1);
      }
    });
  }

  return pairings;
};

const runRules = (santa, recipient, rules) => {
  if (rules.length === 1) {
    return rules[0](santa, recipient);
  }

  return (
    rules[0](santa, recipient) && runRules(santa, recipient, rules.slice(1))
  );
};
