import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactsData from "./contactsData.json";

const App = () => {
  const [filterValue, setFilterValue] = useState("");
  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem("contacts");
    return localData ? JSON.parse(localData) : contactsData;
  });
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = (event) => {
    setFilterValue(event.target.value);
  };
  const onAddContact = (newContact) => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };

    setContacts([finalContact, ...contacts]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div className="container">
      <h1 className="mainTitle">Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filterValue={filterValue} handleFilter={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
