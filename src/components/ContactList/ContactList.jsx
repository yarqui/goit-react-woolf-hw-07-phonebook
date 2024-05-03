import { useSelector } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import { selectFilteredContacts } from "../../redux/selectors/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className="flex flex-col">
      {filteredContacts?.map(({ name, number, id }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
