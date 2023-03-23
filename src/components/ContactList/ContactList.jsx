import { fetchContacts } from '../../redux/contactsOperations';
import ContactItem from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedContacts = filter.toLowerCase();
  const visibleContacts = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(normalizedContacts)
  );

  return visibleContacts.map(({ name, id, phone }) => {
    return <ContactItem key={id} name={name} id={id} number={phone} />;
  });
};

export default ContactList;
