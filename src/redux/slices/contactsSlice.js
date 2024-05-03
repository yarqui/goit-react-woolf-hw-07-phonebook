import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsInitialState = { items: [] };

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: ({ items }, { payload }) => {
        items.push(payload);
      },
      prepare: (contactCredentials) => ({
        payload: {
          id: nanoid(),
          createdAt: new Date().toISOString(),
          ...contactCredentials,
        },
      }),
    },
    deleteContact: ({ items }, { payload }) => ({
      items: items.filter((item) => item.id !== payload),
    }),
  },
});

const persistConfig = {
  key: "items",
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer,
);

export const { addContact, deleteContact } = contactsSlice.actions;
