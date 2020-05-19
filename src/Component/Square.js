import React from 'react';
import '../ComponentCss/Square.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default React.memo(Square);
