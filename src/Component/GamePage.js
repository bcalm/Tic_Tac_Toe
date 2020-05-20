import React from 'react';
import '../ComponentCss/Game.css';

function GamePage({host, join}) {
  return (
    <div className="box">
      <button onClick={() => host()}>Host Game</button>
      <button onClick={() => join()}>Join Game</button>
    </div>
  );
}

export default GamePage;
