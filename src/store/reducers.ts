import { combineReducers } from 'redux';
import {bugTracker} from './bugTracker/reducers'
import { enthusiasm } from './hello/reducers';

const rootReducer = combineReducers({
    bugTrackerStoreState:bugTracker,
    helloStoreState:enthusiasm
});

export default rootReducer;