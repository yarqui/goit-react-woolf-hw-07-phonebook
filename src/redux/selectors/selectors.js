import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectFilter = (state) => state.filter.value;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterNameValue) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterNameValue.toLowerCase()),
    ),
);
