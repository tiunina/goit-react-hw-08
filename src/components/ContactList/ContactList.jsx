import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
// import { selectFilter } from "../../redux/filter/filtersSlice";
// import { deleteContact, selectItems } from "../../redux/contacts/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  // const items = useSelector(selectItems);

  // const filter = useSelector(selectFilter);

  // const filteredContacts = items.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  const onDelete = (itemId) => {
    // const action = deleteContact(itemId);
    // dispatch(action);
    dispatch(deleteContact(itemId));
  };
  return (
    <ul>
      {filteredContacts.map((contactItem) => {
        return (
          <li key={contactItem.id}>
            <Contact contactItem={contactItem} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
