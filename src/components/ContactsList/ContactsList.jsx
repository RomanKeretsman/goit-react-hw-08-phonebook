import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ContactItem from '../ContactItem';
import popTransition from './pop.module.scss';

import styles from './ContactsList.module.scss';

// Компонент списка контактов
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={500}
          classNames={popTransition}
        >
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
