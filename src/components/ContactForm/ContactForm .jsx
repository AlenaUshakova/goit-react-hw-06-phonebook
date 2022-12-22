import shortid from 'shortid';
import { Form, FormInput, FormBtn } from './ContactForm.styled';

import { useDispatch } from 'react-redux';
import { add } from '../redux/contactsSlice';

export const ContactForm = () => {
  const nameInputIdFirst = shortid.generate();
  const nameInputIdSecond = shortid.generate();

  const dispatch = useDispatch();
  
  const handleSubmit = e => {
    e.preventDefault();

    const obj = {
      id: shortid.generate(),
      [e.target.elements.name.name]: e.target.elements.name.value,
      [e.target.elements.number.name]: e.target.elements.number.value,
    };

    dispatch(add(obj));
    
    e.target.reset();
  };


  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor={nameInputIdFirst}>Name</label>
      <FormInput
        id={nameInputIdFirst}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={nameInputIdSecond}>Number</label>
      <FormInput
        id={nameInputIdSecond}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
};

