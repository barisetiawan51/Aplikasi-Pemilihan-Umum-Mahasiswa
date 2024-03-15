import { combineReducers } from 'redux';
import yourReducer from './yourReducer'; // Impor file reducer Anda

const rootReducer = combineReducers({
  yourReducer, // Tambahkan reducer Anda di sini
});

export default rootReducer;
