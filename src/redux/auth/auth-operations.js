import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_FIREBASE_URL;

const API_KEY = process.env.REACT_APP_FIREBASE_KEY;

const SIGN_UP_URL = BASE_URL + ':signUp?key=' + API_KEY;

const SIGN_IN_URL = BASE_URL + ':signInWithPassword?key=' + API_KEY;

const GET_USER_URL = BASE_URL + ':lookup?key=' + API_KEY;

const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    const data = { ...credentials, returnSecureToken: true };
    try {
      const res = await axios.post(SIGN_UP_URL, data);
      return res.data;
    } catch (error) {
      console.log('errsfsdfor', error.response);
      return thunkAPI.rejectWithValue(error.response.data.error.message);
    }
  },
);

const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, thunkAPI) => {
    const data = { ...credentials, returnSecureToken: true };
    try {
      const res = await axios.post(SIGN_IN_URL, data);
      return res.data;
    } catch (error) {
      console.log('errsfsdfor', error.response);
      return thunkAPI.rejectWithValue(error.response.data.error.message);
    }
  },
);

// const signOut = createAsyncThunk('auth/signOut', async () => {});

const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.token;

  if (!savedToken) {
    return thunkAPI.rejectWithValue();
  }

  try {
    const res = await axios.post(GET_USER_URL, {
      idToken: savedToken,
    });
    const payload = {
      user: {
        name: res.data.users[0].displayName,
        email: res.data.users[0].email,
      },
      localId: res.data.users[0].localId,
    };
    console.log('payload', payload);
    return payload;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error.message);
  }
});

const refreshToken = createAsyncThunk('auth/refreshToken', async () => {});

// export { signUp, signIn, signOut, getUser, refreshToken };
export { signUp, signIn, getUser, refreshToken };
