import "./style.css";
import { possibleMoves, isInNextMove, knightMoves } from "./knights-travails";

const board = document.querySelector(".board");
for (let i = 0; i < 64; i++) {
  const square = document.createElement("div");
	square.dataset.x = i % 8;
	square.dataset.y = Math.floor(i / 8);
	square.textContent = "c";
  board.appendChild(square);
}

console.log(board);
