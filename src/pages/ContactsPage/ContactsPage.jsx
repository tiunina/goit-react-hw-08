import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import { useDispatch, useSelector } from "react-redux";
// import { selectItems } from "./redux/contacts/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectItems } from "../../redux/contacts/selectors";
// import AppBar from "../../components/AppBar/AppBar";

const ContactsPage = () => {
  const items = useSelector(selectItems);
  // const loading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {/* <AppBar /> */}
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <p>There are no contacts in your phonebook yet!</p>
      )}
    </div>
  );
};

export default ContactsPage;
