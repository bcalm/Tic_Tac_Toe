import React, {Component} from 'react';
import Game from './Component/Game';
import GamePage from './Component/GamePage';
import HostGame from './Component/HostGame';
import Waiting from './Component/Waiting';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      isStart: false,
      isHosted: false,
      isJoined: false,
      players: [],
      totalPlayers: 0,
      isWaiting: false,
    };
  }

  hostGame = () => {
    this.setState({
      isStart: true,
      isHosted: true,
    });
  };

  joinGame = () => {
    this.setState({
      isStart: true,
      isJoined: true,
    });
  };

  addPlayer = (newName) => {
    this.setState({
      players: [...this.state.players, newName],
      isHosted: false,
      isJoined: false,
      isWaiting: true,
      totalPlayers: this.state.totalPlayers,
    });
  };

  render() {
    const {isPlaying, isStart, isHosted, isJoined, isWaiting} = this.state;
    return (
      <div className="App">
        {!isStart && <GamePage host={() => this.hostGame()} join={() => this.joinGame()} />}
        {isHosted && (
          <HostGame onSubmit={(name, totalPlayers) => this.addPlayer(name, totalPlayers)} />
        )}
        {isWaiting && <Waiting />}
        {isJoined && 'join'}
        {isPlaying && <Game />}
      </div>
    );
  }
}

export default App;
