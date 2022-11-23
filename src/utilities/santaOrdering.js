// const determineSantas = (players, rules) => {
//   const shuffledPlayers = shuffle([...players]);
//   const pairings = [];
//   for (let i = 0; i < players.length; i++) {
//     pairings.push({
//       santa: players[i],
//       recipient: shuffledPlayers[i],
//     });
//   }

//   return pairings;
// };

const determineSantas = (players, rules) => {
  const pairings = [];
  const remainingRecipients = [...players];
  for (let player of players) {
    const possiblePlayers = remainingRecipients.filter(
      (recipient) =>
        runRules(player, recipient, rules) &&
        !player.invalidRecipients.includes(recipient.id)
    );

    if (possiblePlayers.length === 0) {
      throw new Error(
        'Cannot find a set of santas that satisfies all the rules'
      ); // zy This error message isn't totally accurate. We throw on the first hiccup but there is a chance that a smarter algorithm could have found a path. Update this algorithm to be smarter someday
    }

    const chosenIndex = Math.floor(Math.random() * possiblePlayers.length);
    const chosenPlayer = possiblePlayers[chosenIndex];
    pairings.push({
      santa: player,
      recipient: chosenPlayer,
    });

    const recipientToRemoveIndex = remainingRecipients.findIndex(
      (recipient) => recipient.id === chosenPlayer.id
    );
    remainingRecipients.splice(recipientToRemoveIndex, 1);
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

const shuffle = (arr) => {
  const n = arr.length; // n is total number of elements to be shuffled
  let m = arr.length; // m is number of elements left to be shuffled
  for (let i = 0; i < n; i++) {
    const index = Math.floor(Math.random() * m);
    const lastUnsorted = arr[n - 1 - i];
    arr[n - 1 - i] = arr[index];
    arr[index] = lastUnsorted;
    m = m - 1;
  }
  return arr;
};

exports.shuffle = shuffle;
exports.determineSantas = determineSantas;
