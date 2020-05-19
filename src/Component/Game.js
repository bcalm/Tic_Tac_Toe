import React, {Component} from 'react';
import Board from './Board';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      currentPlayer: 'X',
      players: ['X', 'O'],
      totalMoves: 0,
    };
  }

  componentDidMount() {
    document.title = 'Tic Tac Toe';
  }

  nextPlayer() {
    const {currentPlayer, players} = this.state;
    const nextPlayerIndex = Math.abs(players.indexOf(currentPlayer) - 1);
    return players[nextPlayerIndex];
  }

  handleClick = (i) => {
    const squares = this.state.squares.slice();
    if (isWinner(squares) || this.state.totalMoves === 9) {
      return;
    }
    if (!squares[i]) {
      squares[i] = this.state.currentPlayer;
      this.setState({
        squares: squares,
        currentPlayer: this.nextPlayer(),
        totalMoves: this.state.totalMoves + 1,
      });
    }
  };

  render() {
    const winner = isWinner(this.state.squares);
    let status;
    if (this.state.totalMoves === 9) {
      status = 'Game Draw';
    } else if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Current player: ' + this.state.currentPlayer;
    }
    return (
      <React.Fragment>
        <Board status={status} handleClick={this.handleClick} squares={this.state.squares} />
      </React.Fragment>
    );
  }
}

const isWinner = function (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Game;
