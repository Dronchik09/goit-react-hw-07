import { createSlice,createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./ContactsOps.js";
import { selectContacts, selectFilter } from "./selectors";

const handlePending = (state)=>{
    state.isLoading = true;
}

const handleRejected = (state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}
const ContactsSlice = createSlice({

    name : "contacts",
    initialState: { items: [], isLoading: false, error: null },

    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.pending, handlePending )
        .addCase(fetchContacts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.error = false;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, handleRejected )
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.error = false;
            state.items.push(action.payload);
        })
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
    }
});


export const contactsReducer = ContactsSlice.reducer;


export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
  );