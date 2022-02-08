import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getContacts,
  addContact,
  deleteContact,
} from '../../services/apiServices';

// getItem

export const getItems = createAsyncThunk(
  'items/getItemsStatus',
  async () => await getContacts(),
);

// addItem

export const addItem = createAsyncThunk(
  'items/addItemsStatus',
  async contact => await addContact(contact),
);

// removeItem

export const removeItem = createAsyncThunk(
  'items/removeItemsStatus',
  async id => {
    const removedItem = await deleteContact(id);
    return removedItem.id;
  },
);
