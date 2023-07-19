// import React from 'react';
// import styles from './ContactList.module.css';

// const ContactList = ({ contacts, onDeleteContact }) => (
//   <ul className={styles.contactList}>
//     {contacts.map(({ id, name, number }) => (
//       <li key={id}>
//         <p className={styles.contactName}>{name}</p>
//         <p className={styles.contactNumber}>{number}</p>
//         <button
//           className={styles.deleteButton}
//           onClick={() => onDeleteContact(id)}
//         >
//           Delete
//         </button>
//       </li>
//     ))}
//   </ul>
// );

// export default ContactList;

import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
