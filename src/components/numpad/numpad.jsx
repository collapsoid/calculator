import React, { useEffect } from 'react';

import './numpad.css';

export default function Numpad(props) {
  const numbers = [];
  for (let i = 1; i <= 9; i++) {
    numbers.push(<button className="numbers__button button" id={i} key={i}>{i}</button>);
  }

  const handleInput = function(e) {
    if (e.target.tagName !== 'BUTTON') {
      return;
    }
    
    if (e.target.id === '=') {
      return props.handleResult();
    }

    if (e.target.id === 'C') {
      return props.handleDelete(true);
    }

    if (e.target.id === '←') {
      return props.handleDelete();
    }

    props.handleInput(e.target.id);
  }

  return (
    <div className="calculator__numpad numpad" onClick={handleInput}>
      <div className="numpad__top-row top-row">
        <button className="top-row__button button" id="(">(</button>
        <button className="top-row__button button" id=")">)</button>
        <button className="top-row__button button" id="←">←</button>
        <button className="top-row__button button" id="C">C</button>
      </div>
      <div className="numpad__numbers numbers">
        {numbers}
        <button className="numbers__button button" id="0">0</button>
        <button className="numbers__button button" id=".">.</button>
        <button className="numbers__button button" id="%">%</button>
      </div>
      <div className="numpad__right-row right-row">
        <button className="right-row__button button" id="+">+</button>
        <button className="right-row__button button" id="-">-</button>
        <button className="right-row__button button" id="*">x</button>
        <button className="right-row__button button" id="÷">÷</button>
        <button className="right-row__button button button_equal" id="=">=</button>
      </div>
    </div>
  );
}