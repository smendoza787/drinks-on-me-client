import { combineReducers } from 'redux'
import barsReducer from './barsReducer'
import commentsReducer from './commentsReducer'

export default combineReducers({
  bars: barsReducer,
  comments: commentsReducer
})
