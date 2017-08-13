import { combineReducers } from 'redux';
import barsReducer from './barsReducer';

export default combineReducers({
  bars: barsReducer
});
