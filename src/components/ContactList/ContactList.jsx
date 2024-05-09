import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactListItem from "../ContactListItem/ContactListItem";
import Spinner from "../Spinner/Spinner";
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/selectors/selectors";
import { fetchContactsAll } from "../../redux/operations/contactsOperations";

const ContactList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  const showLoading = isLoading && !error;
  const showError = error && !isLoading;
  const showContacts = filteredContacts.length > 0;

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchContactsAll(controller.signal));

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <div className="relative">
      {showLoading && (
        <div className=" absolute flex size-full place-content-center rounded-md">
          <Spinner css="h-10 w-10" />
        </div>
      )}

      {showError && (
        <div className="rounded-md bg-red-100 p-2">
          <p className="text-red-600">Something went wrong.</p>
          <p className="text-xs text-red-900">{error.payload}</p>
        </div>
      )}

      {showContacts && (
        <ul className={`flex flex-col ${isLoading && "blur-sm"}`}>
          {filteredContacts.map(({ name, phone, id }) => (
            <ContactListItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
