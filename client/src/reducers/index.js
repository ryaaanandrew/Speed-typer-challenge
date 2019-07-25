import { combineReducers } from 'redux';
import Reducer from './Reducer';
import ScoresReducer from './ScoresReducer';

export default combineReducers({
    reducer: Reducer,
    scores: ScoresReducer
});