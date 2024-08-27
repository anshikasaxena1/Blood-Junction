// store.js
import { configureStore } from '@reduxjs/toolkit';
import signupReducer from '../src/reducers/signUpReducers'; // Ensure this path is correct

const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});

export default store;
