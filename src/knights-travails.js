// console.log(knightMoves([[0, 0]], [7, 7]));

function possibleMoves(from) {
  let possibleTos = [];
  if (from[0] + 2 < 8) {
    if (from[1] + 1 < 8) {
      possibleTos.push([from[0] + 2, from[1] + 1]);
    }
    if (from[1] - 1 >= 0) {
      possibleTos.push([from[0] + 2, from[1] - 1]);
    }
  }
  if (from[0] - 2 >= 0) {
    if (from[1] + 1 < 8) {
      possibleTos.push([from[0] - 2, from[1] + 1]);
    }
    if (from[1] - 1 >= 0) {
      possibleTos.push([from[0] - 2, from[1] - 1]);
    }
  }
  if (from[0] + 1 < 8) {
    if (from[1] + 2 < 8) {
      possibleTos.push([from[0] + 1, from[1] + 2]);
    }
    if (from[1] - 2 >= 0) {
      possibleTos.push([from[0] + 1, from[1] - 2]);
    }
  }
  if (from[0] - 1 >= 0) {
    if (from[1] + 2 < 8) {
      possibleTos.push([from[0] - 1, from[1] + 2]);
    }
    if (from[1] - 2 >= 0) {
      possibleTos.push([from[0] - 1, from[1] - 2]);
    }
  }
  return possibleTos;
}

function isInNextMove(from, to) {
  const possibleTos = possibleMoves(from[from.length - 1]);
  for (let i = 0; i < possibleTos.length; i++) {
    if (possibleTos[i][0] === to[0] && possibleTos[i][1] === to[1]) {
      from.push(to);
      return from;
    }
  }
  return null;
  // for (let i = 0; i < possibleTos.length; i++) {
  // 	from.push(possibleTos[i]);
  // 	console.log(from);
  //   return knightMoves(from, to);
  // }
}

function knightMoves(from, to) {
  let isIt = isInNextMove(from, to);
  if (isIt) {
    return isIt;
  } else {
    let deepperPossibleMoves = possibleMoves(from[from.length - 1]);

    for (let i = 0; i < deepperPossibleMoves.length; i++) {
      const isItDeepper = isInNextMove([deepperPossibleMoves[i]], to);
      if (isItDeepper) {
        return [from[from.length - 1], ...isItDeepper];
      }
    }
    for (let i = 0; i < deepperPossibleMoves.length; i++) {
      const isItDeepper = isInNextMove([deepperPossibleMoves[i]], to);
      return [
        from[from.length - 1],
        ...knightMoves([deepperPossibleMoves[i]], to)
      ];
    }
  }
}

export { possibleMoves, isInNextMove, knightMoves };
