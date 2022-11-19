const determineSantas = (players, rules) => {
  const shuffledPlayers = shuffle([...players]);
  const pairings = [];
  for (let i = 0; i < players.length; i++) {
    pairings.push({
      santa: players[i],
      recipient: shuffledPlayers[i],
    });
  }

  return pairings;
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
