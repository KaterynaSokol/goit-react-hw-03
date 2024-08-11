import { Formik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactsData from "./contactsData.json";

const App = () => {
  const [filterValue, setFilterValue] = useState("");
  const [contacts, setContacts] = useState(contactsData);

  const handleFilter = (event) => {
    const value = event.target.value;

    setFilterValue(value);
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox filterValue={filterValue} setFilterValue={handleFilter} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
