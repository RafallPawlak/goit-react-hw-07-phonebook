import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://63dfbb86a76cfd410587afdc.mockapi.io/";

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  const { name, phone } = contact;
  try {
    const { data } = await axios.post('/contacts', {
      name,
      phone,
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});