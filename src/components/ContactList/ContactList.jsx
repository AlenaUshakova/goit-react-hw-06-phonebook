import { ContactsList, ContactsBtn, ContactsItem } from './ContactList.styled';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { remove } from '../redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter))

  return (
    <ContactsList>
      {visibleContacts.map(contact => (
        <ContactsItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContactsBtn onClick={() => dispatch(remove(contact.id))}>
            Delete
          </ContactsBtn>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
