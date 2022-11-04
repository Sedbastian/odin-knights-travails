import "./style.css";
import { knightMoves } from "./knights-travails";

const board = document.querySelector(".board");
for (let i = 0; i < 64; i++) {
  const square = document.createElement("div");
  square.dataset.x = i % 8;
  square.dataset.y = Math.floor(i / 8);
  if ((i + 2) % 2 === 0 && Math.floor(i / 8) % 2 === 0) {
    square.classList.add("white");
  } else if ((i + 2) % 2 !== 0 && Math.floor(i / 8) % 2 === 0) {
    square.classList.add("black");
  }
  if ((i + 2) % 2 === 0 && Math.floor(i / 8) % 2 !== 0) {
    square.classList.add("black");
  } else if ((i + 2) % 2 !== 0 && Math.floor(i / 8) % 2 !== 0) {
    square.classList.add("white");
  }
  square.addEventListener("click", clickedSquare);
  board.appendChild(square);
}

let from = null;
let to = null;

function clickedSquare() {
  if (from === null) {
    clearBoard();
    from = [parseInt(this.dataset.x), parseInt(this.dataset.y)];
    const knightDiv = document.querySelector(
      `[data-x="${this.dataset.x}"][data-y="${this.dataset.y}"]`
    );
    knightDiv.classList.add("horse");
    knightDiv.textContent = "0";
    return;
  } else {
    to = [parseInt(this.dataset.x), parseInt(this.dataset.y)];
    const knightDiv = document.querySelector(
      `[data-x="${this.dataset.x}"][data-y="${this.dataset.y}"]`
    );
    knightDiv.classList.add("horse");
    knightsTravails(from, to);
    from = null;
  }
}

function knightsTravails(from, to) {
  const travails = knightMoves(from, to);
  console.log(travails);
  for (let i = 1; i < travails.length; i++) {
    const travail = travails[i];
    const knightDiv = document.querySelector(
      `[data-x="${travail[0]}"][data-y="${travail[1]}"]`
    );
    knightDiv.classList.add("horse");
    knightDiv.textContent = `${i}`;
  }
}

function clearBoard() {
  const horses = document.querySelectorAll(".horse");
  horses.forEach(element => {
    element.textContent = "";
    element.classList.remove("horse");
  });
}
