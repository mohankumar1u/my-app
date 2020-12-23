import rowReducer from './row';
import cardReducer from './card'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    rowReducer,
    cardReducer
})

export default allReducers;