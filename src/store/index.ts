import { applyMiddleware, createStore } from 'redux';
import ReduxThunk  from 'redux-thunk';

import {RootAction} from './actions'
import rootReducer from './reducers';
import { IStoreState } from './types';

const store = createStore<IStoreState, RootAction, any, any>(rootReducer, {
  bugTrackerStoreState :{
    bugs:[]
  },
  helloStoreState: {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  }
}, applyMiddleware(ReduxThunk));

export default store;
