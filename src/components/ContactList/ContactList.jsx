import { ContactsList, ContactsBtn, ContactsItem } from './ContactList.styled';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { remove } from '../redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisible = () => {
    // const normalasedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });
  };

  const visibleContacts = getVisible();

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
