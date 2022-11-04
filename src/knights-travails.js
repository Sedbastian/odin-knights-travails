function possibleMoves(leveli) {
  let possibleTos = [];
  if (leveli.possibleTo[0] + 2 < 8) {
    if (leveli.possibleTo[1] + 1 < 8) {
      if (leveli.parents === null) {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] + 2, leveli.possibleTo[1] + 1],
          parents: [leveli.possibleTo]
        });
      } else {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] + 2, leveli.possibleTo[1] + 1],
          parents: [...leveli.parents, leveli.possibleTo]
        });
      }
    }
    if (leveli.possibleTo[1] - 1 >= 0) {
      if (leveli.parents === null) {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] + 2, leveli.possibleTo[1] - 1],
          parents: [leveli.possibleTo]
        });
      } else {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] + 2, leveli.possibleTo[1] - 1],
          parents: [...leveli.parents, leveli.possibleTo]
        });
      }
    }
  }
  if (leveli.possibleTo[0] - 2 >= 0) {
    if (leveli.possibleTo[1] + 1 < 8) {
      if (leveli.parents === null) {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] - 2, leveli.possibleTo[1] + 1],
          parents: [leveli.possibleTo]
        });
      } else {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] - 2, leveli.possibleTo[1] + 1],
          parents: [...leveli.parents, leveli.possibleTo]
        });
      }
    }
    if (leveli.possibleTo[1] - 1 >= 0) {
      if (leveli.parents === null) {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] - 2, leveli.possibleTo[1] - 1],
          parents: [leveli.possibleTo]
        });
      } else {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] - 2, leveli.possibleTo[1] - 1],
          parents: [...leveli.parents, leveli.possibleTo]
        });
      }
    }
  }
  if (leveli.possibleTo[0] + 1 < 8) {
    if (leveli.possibleTo[1] + 2 < 8) {
      if (leveli.parents === null) {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] + 1, leveli.possibleTo[1] + 2],
          parents: [leveli.possibleTo]
        });
      } else {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] + 1, leveli.possibleTo[1] + 2],
          parents: [...leveli.parents, leveli.possibleTo]
        });
      }
    }
    if (leveli.possibleTo[1] - 2 >= 0) {
      if (leveli.parents === null) {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] + 1, leveli.possibleTo[1] - 2],
          parents: [leveli.possibleTo]
        });
      } else {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] + 1, leveli.possibleTo[1] - 2],
          parents: [...leveli.parents, leveli.possibleTo]
        });
      }
    }
  }
  if (leveli.possibleTo[0] - 1 >= 0) {
    if (leveli.possibleTo[1] + 2 < 8) {
      if (leveli.parents === null) {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] - 1, leveli.possibleTo[1] + 2],
          parents: [leveli.possibleTo]
        });
      } else {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] - 1, leveli.possibleTo[1] + 2],
          parents: [...leveli.parents, leveli.possibleTo]
        });
      }
    }
    if (leveli.possibleTo[1] - 2 >= 0) {
      if (leveli.parents === null) {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] - 1, leveli.possibleTo[1] - 2],
          parents: [leveli.possibleTo]
        });
      } else {
        possibleTos.push({
          possibleTo: [leveli.possibleTo[0] - 1, leveli.possibleTo[1] - 2],
          parents: [...leveli.parents, leveli.possibleTo]
        });
      }
    }
  }
  return possibleTos;
}

function knightMoves(from, to) {
  if (from[0] === to[0] && from[1] === to[1]) {
    return [from];
  }
  function knightMovesRecursive(level, to) {
    for (let i = 0; i < level.length; i++) {
      if (
        level[i].possibleTo[0] === to[0] &&
        level[i].possibleTo[1] === to[1]
      ) {
        return [...level[i].parents, to];
      }
    }
    let nextLevel = [];
    for (let i = 0; i < level.length; i++) {
      nextLevel.push(...possibleMoves(level[i]));
    }
    return knightMovesRecursive(nextLevel, to);
  }
  const firstLevel = possibleMoves({ possibleTo: from, parents: null });
  return knightMovesRecursive(firstLevel, to);
}

export { knightMoves };
