import { configureStore} from "@reduxjs/toolkit";;
import  {contactsReducer}  from "./contactsSlice";
import  {filterReducer}  from "./filtersSlice";


const rootReducer = {
    contacts: contactsReducer,
    filter: filterReducer,
  };


  export const store = configureStore({
    reducer: rootReducer
  });















