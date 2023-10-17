class View {
  constructor(game, figure) {
    this.figure = figure;
    this.game = game;

    this.setupBoard();
    // this.handleGameOver();
  }
  
  setupBoard() {
    let grid = document.createElement("ul");
    this.figure.appendChild(grid);

    // let cell = [];
    
    for(let i = 0; i < 3; i++){
      for (let j = 0 ; j < 3; j++){
        let cell = document.createElement("li");
        cell.dataset.row = i;
        // cell.setAttribute("row",i);
        cell.dataset.column =j;
        grid.appendChild(cell);
      }
    }
    grid.addEventListener("click",this.handleClick.bind(this));
  
  }
  
  handleClick(e) {
    let click_row = e.target.dataset.row;
    let click_column = e.target.dataset.column;
    this.game.playMove([click_row,click_column]);
    this.makeMove(e.target);
    this.handleGameOver();
    
  }

  makeMove(square) {
  
    square.classList.add("played-position");  
     square.innerText = `${this.game.currentPlayer}`;
  }
  
  
  handleGameOver() {
    if (this.game.isOver()) {
    alert(`${this.game.winner()} won!`) ;
    }
  }
}

export default View;