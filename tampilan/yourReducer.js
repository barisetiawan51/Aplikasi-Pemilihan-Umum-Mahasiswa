import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, LOGOUT, SET_USERNAME } from './actionTypes';

// Reducer untuk mengelola status login
const loginReducer = (state = false, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};

// Reducer untuk menyimpan data username
const usernameReducer = (state = '', action) => {
  switch (action.type) {
    case SET_USERNAME:
      return action.payload;
    case LOGOUT:
      return '';
    default:
      return state;
  }
};

// Menggabungkan semua reducer
const yourReducer = combineReducers({
  isLoggedIn: loginReducer,
  username: usernameReducer,
  // Tambahkan reducer lain di sini jika diperlukan
});

export default yourReducer;
