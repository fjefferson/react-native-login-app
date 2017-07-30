import { combineReducers } from 'redux';
import userReducer from './userReduces';
import loginReducer from './loginReduces';

export default combineReducers({
    userReducer, loginReducer
})