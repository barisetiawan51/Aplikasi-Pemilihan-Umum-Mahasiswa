import { createStore } from 'redux';
import rootReducer from './reducers'; // Impor file reducer Anda

const store = createStore(rootReducer); // Buat store dengan rootReducer

export default store;
