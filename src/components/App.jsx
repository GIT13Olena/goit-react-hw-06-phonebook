// import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     if (contacts) {
//       this.setState({ contacts: JSON.parse(contacts) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const { contacts } = this.state;

//     const isContactExists = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (isContactExists) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     const contact = {
//       id: uuidv4(),
//       name,
//       number,
//     };

//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));

//     localStorage.setItem(
//       'contacts',
//       JSON.stringify([...this.state.contacts, contact])
//     );
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';

// const App = () => {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(localStorage.getItem('contacts')) ?? [];
//   });
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = ({ name, number }) => {
//     const isContactExists = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (isContactExists) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     const contact = {
//       id: uuidv4(),
//       name,
//       number,
//     };

//     setContacts(prevContacts => [contact, ...prevContacts]);
//   };

//   const changeFilter = event => {
//     setFilter(event.currentTarget.value);
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const deleteContact = contactId => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== contactId)
//     );
//   };

//   const visibleContacts = getVisibleContacts();

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={addContact} />

//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
//     </div>
//   );
// };

// export default App;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../reduxFiles/storeRedux';
import { selectContacts, selectFilter } from '../reduxFiles/selectorsRedux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = contact => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = () => {
    // Handle filter change if needed
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
