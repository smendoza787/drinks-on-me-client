import { combineReducers } from 'redux';
import barsReducer from './barsReducer';
import locationsReducer from './locationsReducer';

export default combineReducers({
  bars: barsReducer,
  position: locationsReducer
});
