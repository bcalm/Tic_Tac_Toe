import React, {Component} from 'react';
import Game from './Component/Game';
import GamePage from './Component/GamePage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      isStart: false,
      isHosted: false,
      isJoined: false,
      players: [],
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

  render() {
    const {isPlaying, isStart, isHosted, isJoined} = this.state;
    return (
      <div className="App">
        {!isStart && <GamePage host={() => this.hostGame()} join={() => this.joinGame()} />}
        {isHosted && 'host'}
        {isJoined && 'join'}
        {isPlaying && <Game />}
      </div>
    );
  }
}

export default App;
