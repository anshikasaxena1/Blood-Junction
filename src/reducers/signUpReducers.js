import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    user: {},
  },
  reducers: {
    signupUser: (state, action) => {
      console.log('User data received:', action.payload);
      state.user = action.payload;
    },
  },
});

export const { signupUser } = signupSlice.actions;

export default signupSlice.reducer;
