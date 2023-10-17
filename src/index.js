import View from "./ttt-view";
import Game from "../ttt_node/game";

document.addEventListener("DOMContentLoaded", () => {
  console.log("The content has been loaded");

  let figure = document.querySelector(".ttt");

  const game = new Game();
  const view = new View(game, figure);
});

window.Game = Game;
window.View = View;

