import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getContacts,
  addContact,
  deleteContact,
} from '../../services/apiServices';

// getItem

export const getItems = createAsyncThunk(
  'items/getItemsStatus',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return Object.keys(data || {}).map(id => ({ id, ...data[id] }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// addItem

export const addItem = createAsyncThunk(
  'items/addItemsStatus',
  async (contact, thunkAPI) => {
    try {
      const data = await addContact(contact);
      return { id: data.name, ...contact };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// removeItem

export const removeItem = createAsyncThunk(
  'items/removeItemsStatus',
  async (id, thunkAPI) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
