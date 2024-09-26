import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import css from "./App.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps.js";
import { selectError, selectIsLoading } from "./redux/selectors.js";

export default function App() {

  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError); 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

return (
  <>
  <div className={css.container}>
    <h1>Phonebook</h1>
    <ContactForm  />
    <SearchBox   />
    {loading && !error && <p>Loading contacts...</p>}
    {error && <p>Error! Try again later</p>}
    <ContactList />
    </div>
  </>
);

}