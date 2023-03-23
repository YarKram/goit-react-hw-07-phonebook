import { addContact } from '../../redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';

import { Label, AddButton } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const contact = {
      name,
      phone,
    };

    if (
      contacts
        .map(({ name }) => name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(contact));
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Phone
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <AddButton type="submit">Add contact</AddButton>
    </form>
  );
};

export default ContactForm;
