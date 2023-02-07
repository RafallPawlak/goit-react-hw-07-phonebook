import { nanoid } from 'nanoid';
import { combineReducers, createSlice } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import { fetchContacts } from './operations';

//const initialState = [];

export const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
     },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
     },
  }
}
);


export const { addContact, deleteContact } =
  contactsReducer.actions;

export const rootReducer = combineReducers({
  contacts: contactsReducer.reducer,
  filter: filterSlice.reducer,
});