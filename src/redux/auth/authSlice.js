import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './index';
const { signUp, signIn, signOut, getUser, refreshToken } = authOperations;

const initialState = {
  user: { name: null, email: null },

  token: null,
  localid: null,
  refreshToken: null,

  loading: false,
  loadingUser: false,

  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // changeFilter: (state, { payload }) => {
    //   state.filter = payload;
  },
  extraReducers: builder => {
    builder.addCase(() => {});
    // .addCase(getItems.pending, state => {
    //   state.data.error = null;
    //   state.data.loading = true;
    // })
  },
});

// export const { changeFilter } = authSlice.actions;

export default authSlice.reducer;
