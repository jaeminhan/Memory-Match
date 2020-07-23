import React from 'react';
import './Button.css';
import GameContext from '../../GameContext';

const Button = (props) => ( 
  // anonymous function that takes the 'destructured object' parameters
<GameContext.Consumer>
  {
    ({ playing, startGame }) => 
    <button onClick={startGame}>
      {playing ? 'reset' : 'start'}
    </button>
  }
</GameContext.Consumer>

)

export default Button;
 