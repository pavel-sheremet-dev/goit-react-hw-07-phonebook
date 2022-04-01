import { createAsyncThunk } from '@reduxjs/toolkit';

const signUp = createAsyncThunk('auth/signUp', async credentials => {});

const signIn = createAsyncThunk('auth/signIn', async credentials => {});

const signOut = createAsyncThunk('auth/signOut', async () => {});

const getUser = createAsyncThunk('auth/getUser', async () => {});

const refreshToken = createAsyncThunk('auth/refreshToken', async () => {});

export { signUp, signIn, signOut, getUser, refreshToken };
