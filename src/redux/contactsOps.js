import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66f567719aa4891f2a251a20.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi)=> {
        try {
            const responce = await axios.get("/contacts");
            return responce.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkApi) => {
        try{
            const res = await axios.post("/contacts", contact);
            return res.data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id,thunkApi) => {
        try {
            const res = await axios.delete(`/contacts/${id}`);
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }

);