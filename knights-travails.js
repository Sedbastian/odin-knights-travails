console.log(possibleMoves([3, 3]));
console.log(possibleMoves([1,2]));
console.log(knightMoves([[3, 3]], [0, 0]));

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

function knightMoves(from, to) {
	const possibleTos = possibleMoves(from[from.length - 1]);
  for (let i = 0; i < possibleTos.length; i++) {
    if (possibleTos[i][0] === to[0] && possibleTos[i][1] === to[1]) {
      from.push(to);
      return from;
    }
	}
	
  for (let i = 0; i < possibleTos.length; i++) {
		let moveFrom = [...from];
		moveFrom.push(possibleTos[i]);
    return knightMoves(moveFrom, to);
  }
}
