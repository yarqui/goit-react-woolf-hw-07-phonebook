import { createSlice, isRejected } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContactById,
  fetchContactsAll,
} from "../operations/contactsOperations";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
  isFulfilledAction,
  isPendingAction,
} from "../common/common";

const contactsInitialState = { items: [], isLoading: false, error: null };

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsAll.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContactById.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(
          (contact) => contact.id !== payload.id,
        );
      })
      .addMatcher(isFulfilledAction, handleFulfilled)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejected, handleRejected)
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
