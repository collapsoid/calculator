import React from 'react';

import './display.css';

export default function Display(props) {
  return <div className="calculator__display display">{props.result}</div>;
}