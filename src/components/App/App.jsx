import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm ';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { AppBox, SectionTitle } from './App.styled';

export const App = () => {
  return (
    <AppBox>
      <SectionTitle>Phonebook</SectionTitle>
      <ContactForm />
      <SectionTitle>Contacts</SectionTitle>
      <Filter />
      <ContactList />
    </AppBox>
  );
};
