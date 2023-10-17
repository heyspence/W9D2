class View {
  constructor(game, figure) {
    this.figure = figure;
    this.game = game;

    this.setupBoard();
  }
  
  setupBoard() {
    let grid = document.createElement("ul");
    this.figure.appendChild(grid);

    let cell = [];
    
    for(let i = 0; i < 9; i++){
      cell.push(document.createElement("li"));
      grid.appendChild(cell[i]);
    }
  }
  
  handleClick(e) {
    // let pos = 
    this.game.__proto__.playMove(pos)
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;