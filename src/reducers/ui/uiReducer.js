import { combineReducers } from 'redux';
import loading from './loadingReducer';
import mode from './modeReducer';
export default combineReducers({
  loading,
  mode
})
