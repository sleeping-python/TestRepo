import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../../constants';
import { EnthusiasmAction } from './actions';
import { IHelloStoreState } from './types';

export function enthusiasm(state: IHelloStoreState={languageName:"", enthusiasmLevel:0}, action: EnthusiasmAction): IHelloStoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}