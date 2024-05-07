import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { endpoints } from "../../config/axiosConfig";

const fetchContactsAll = createAsyncThunk(
  "contacts/fetchContactsAll",
  async (_, { rejectWithValue, signal }) => {
    try {
      const res = await axios.get(`${endpoints.contacts}`, { signal });

      return res.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue, signal }) => {
    try {
      const res = await axios.post(
        `${endpoints.contacts}`,
        { ...contact },
        { signal },
      );

      return res.data;
    } catch (error) {
      console.log("error:", error);
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

const deleteContactById = createAsyncThunk(
  "contacts/deleteContactById",
  async (contactId, { rejectWithValue, signal }) => {
    try {
      const res = await axios.delete(`${endpoints.contacts}/${contactId}`, {
        signal,
      });

      return res.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export { addContact, fetchContactsAll, deleteContactById };
