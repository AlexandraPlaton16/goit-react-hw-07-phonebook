import { createSelector } from '@reduxjs/toolkit';

// The selectIsLoading function takes the state object and returns the value of the isLoading property from the contacts state object.
export const selectIsLoading = state => state.contacts.isLoading;

// The selectError function takes the state object and returns the value of the error property from the contacts state object.
export const selectError = state => state.contacts.error;

// The selectContacts function takes the state object and returns the value of the items property from the contacts state object.
export const selectContacts = state => state.contacts.items;

// The selectFilter function takes the state object and returns the value of the filter property from the state object.
export const selectFilter = state => state.filter;

// The selectVisibleContacts function uses the createSelector function to create a selector that depends on two other selectors: selectContacts and selectFilter.
// The selectVisibleContacts selector returns a filtered array of contacts where the contact's name contact.name includes the filter string.
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
