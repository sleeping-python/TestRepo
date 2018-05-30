import Button from '@material-ui/core/Button';
import * as React from 'react';

import './Hello.css'

export interface IPropsState{
  name?: string;
  enthusiasmLevel?: number;
}

export interface IPropsActions{
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export interface IProps extends IPropsState, IPropsActions {};

export function Hello({ name="", enthusiasmLevel = 1, onIncrement, onDecrement }: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  if(typeof(onIncrement) !== "function" || typeof(onDecrement) !== "function") {
    throw new Error("The dispatcher actions are not functions");
  } 

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <Button variant="raised" color="primary" className = 'onDecreamentButton' onClick={onDecrement}>-</Button>
        <Button variant="raised" color="secondary" className = 'onIncreamentButton' onClick={onIncrement}>+</Button>
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}