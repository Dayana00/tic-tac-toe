class TicTacToe {
    constructor() {
    this.matrix = [
      [ null, null, null ],
      [ null, null, null ],
      [ null, null, null ],
    ]
    this.player = 'x'
  }


  getCurrentPlayerSymbol() {
    return this.player
  }


  nextTurn(rowIndex, columnIndex) {
    if(this.matrix[rowIndex][columnIndex] != null) {
      return;
    }
    this.matrix[rowIndex][columnIndex] = this.player
    this.player = this.player == 'x' ? 'o' : "x"
  }


  isFinished() {
    let getWinner = this.getWinner();
    let draw = this.isDraw();
    if (getWinner != null || draw === true) {
      return true
    } else {
      return false
    }
  }


  getWinner() {
    let checkRows = this.checkRowsOnWinner();
    let checkColomns = this.checkColomnsOnWinner();
    let checkMainDiagonal = this.checkMainDiagonalWinner();
    let checkNoMainDiagonal = this.checkNoMainDiagonalWinner();
    if(checkRows != null) {
      return checkRows
    } else if (checkColomns != null) {
      return checkColomns
    } else if (checkMainDiagonal != null) {
      return checkMainDiagonal
    } else if (checkNoMainDiagonal != null) {
      return checkNoMainDiagonal
    } else {
      return null
    }
  }


  checkRowsOnWinner() {
    for (let i = 0; i < this.matrix.length; i++) {
      const firstIndex = this.matrix[i][0]
      let isWinner = true;

      if(firstIndex !== null) {
        for(let j=1; j<this.matrix[i].length; j++) {
          if(this.matrix[i][j] !== firstIndex) {
            isWinner = false;
          }
        }
      } else {
        isWinner = false;
      }

      if(isWinner) {
        return firstIndex;
      }
    }
    return null
  }


  checkColomnsOnWinner() {
    for (let j = 0; j < this.matrix[0].length; j++) {
      const firstIndex = this.matrix[0][j]
      let isWinner = true;

      if(firstIndex !== null) {
        for(let i=1; i<this.matrix.length; i++) {
          if(this.matrix[i][j] !== firstIndex) {
            isWinner = false;
          }
        }
      } else {
        isWinner = false;
      }

      if(isWinner) {
        return firstIndex;
      }
    }
    return null
  }


  checkMainDiagonalWinner() {
    let isWinner = true;
    const firstIndex = this.matrix[0][0]
    for (let i = 0; i < this.matrix.length; i++) {
      if(firstIndex !== null) {
        if(this.matrix[i][i] !== firstIndex) {
          isWinner = false;
        } 
      } else {
        isWinner = false;
      }
    }

    if(isWinner) {
      return firstIndex;
    } else {
      return null
    }
  }


  checkNoMainDiagonalWinner() {
    const firstIndex = this.matrix[0][this.matrix.length-1]
    let isWinner = true;

    for (let i = 0; i < this.matrix.length; i++) {
      if(firstIndex !== null) {
        if (this.matrix[i][this.matrix.length - i - 1] !== firstIndex) {
          isWinner = false;
        }
      } else {
        isWinner = false;
      }
    }
    if(isWinner) {
      return firstIndex;
    } else {
      return null
    }
  }
  
  
  noMoreTurns() {
    for (let i = 0; i < this.matrix.length; i++) {
      if(this.matrix[i].includes(null)) {
        return false
      }
    }
    return true
  }


  isDraw() {
    let noMoreTurn = this.noMoreTurns()
    let winner = this.getWinner()
    if (noMoreTurn === true && winner === null) {
      return true
    } else {
      return false
    }
    
  }


  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex]  
  }
    
}

module.exports = TicTacToe;
