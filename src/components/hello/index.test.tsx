import Hello from './index';

import * as enzyme from 'enzyme';
import * as React from 'react';

const onIncrement = () => {return;};
const onDecrement = () => {return;};
it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' onIncrement={onIncrement} onDecrement={onDecrement}/>);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1} onIncrement={onIncrement} onDecrement={onDecrement}/>);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={5} onIncrement={onIncrement} onDecrement={onDecrement}/>);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={0} onIncrement={onIncrement} onDecrement={onDecrement}/>);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={-1} onIncrement={onIncrement} onDecrement={onDecrement}/>);
  }).toThrow();
});

it('throws when the increament function is empty', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Typescript' enthusiasmLevel = {1} onDecrement={onDecrement}/>)
  }).toThrow();
})

it('thorws when the onDecreament function is empty', () => {
  expect(() => {
    enzyme.shallow(<Hello name="" enthusiasmLevel={1} onIncrement={onIncrement}/>)
  }).toThrow();
})

it('thorws when the onDecreament function is empty', () => {
  expect(() => {
    enzyme.shallow(<Hello name="" enthusiasmLevel={1} onIncrement={onIncrement}/>)
  }).toThrow();
})

it('Check on onIncreament is clicked', () => {
  let increamentCounter = 0;
  const increament = () => {
    increamentCounter++;
  }

  const decreament = () => {
    increamentCounter--;
  }
  const testItem = enzyme.shallow(<Hello name="" enthusiasmLevel={1} onIncrement = {increament} onDecrement={decreament}/>)
  testItem.find('.onIncreamentButton').simulate('click');
  expect(increamentCounter).toEqual(1);
})

it('Check on onDecreament is clicked', () => {
  let increamentCounter = 0;
  const increament = () => {
    increamentCounter++;
  }

  const decreament = () => {
    increamentCounter--;
  }
  const testItem = enzyme.shallow(<Hello name="" enthusiasmLevel={1} onIncrement = {increament} onDecrement={decreament}/>)
  testItem.find('.onDecreamentButton').simulate('click');
  expect(increamentCounter).toEqual(-1);
})
