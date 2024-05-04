import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { endpoints } from "../../config/axiosConfig";

const fetchContactsAll = createAsyncThunk(
  "contacts/fetchContactsAll",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`${endpoints.contacts}`);

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const res = await axios.post(`${endpoints.contacts}`, { ...contact });

      return res.data;
    } catch (error) {
      console.log("error:", error);
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

const deleteContactById = createAsyncThunk(
  "contacts/deleteContactById",
  async (contactId, thunkApi) => {
    try {
      const res = await axios.delete(`${endpoints.contacts}/${contactId}`);

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export { addContact, fetchContactsAll, deleteContactById };
