import React, {useState} from 'react';
import '../ComponentCss/Game.css';

function HostGame(props) {
  const [name, setName] = useState('');
  const [playerCount, setPlayerCount] = useState(2);

  return (
    <div className="box">
      <label>Player Name: </label>
      <br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>No of players: </label>
      <br />
      <input
        type="number"
        max={2}
        min={2}
        value={playerCount}
        onChange={(e) => setPlayerCount(e.target.value)}
      />
      <br />
      <button onClick={() => props.onSubmit(name, playerCount)} className="submit">
        Submit
      </button>
    </div>
  );
}

export default HostGame;
