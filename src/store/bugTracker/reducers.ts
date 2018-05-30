import { ADD_BUG } from '../../constants';
import { BugAction } from './actions';
import { IBugTrackerStoreState } from './types';

export function bugTracker(state: IBugTrackerStoreState = {bugs:[]}, action: BugAction): IBugTrackerStoreState {
  switch (action.type) {
    case ADD_BUG:
      return { bugs: [...state.bugs, {name:"Terror", severity:10}]};
  }
  return state;
}