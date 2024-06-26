import { useEffect, useRef, useState } from "react";
import { Notify } from "notiflix";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../common/components/Button/Button";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { selectContacts } from "../../redux/selectors/selectors";
import { addContact } from "../../redux/operations/contactsOperations";

const INITIAL_STATE = {
  name: "",
  phone: "",
};

const ContactForm = () => {
  const [userCredentials, setUserCredentials] = useState(INITIAL_STATE);
  const abortControllerRef = useRef(null);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const contactNameExists = (name) =>
    contacts?.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

  const resetForm = () => {
    setUserCredentials(INITIAL_STATE);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone } = userCredentials;

    if (contactNameExists(name)) {
      Notify.failure(`${name} already exists in the phonebook.`);
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    const trimmedCredentials = {
      name: name.trim(),
      phone: phone.trim(),
    };

    dispatch(addContact(trimmedCredentials, abortControllerRef.current.signal));
    resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 border-b-2 border-slate-200 pb-10"
    >
      <div className="relative flex flex-col-reverse gap-1">
        <Input
          id="name"
          type="text"
          name="name"
          value={userCredentials.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleInputChange}
          required
          className="peer placeholder-transparent"
          placeholder="Name"
        />
        <Label
          htmlFor="name"
          label="Name"
          className="pointer-events-none absolute -top-3.5 left-0 text-sm font-semibold text-slate-600 transition-all hover:cursor-text peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
        peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-slate-600"
        />
      </div>
      <div className="relative flex flex-col gap-1">
        <Input
          id="phone"
          type="number"
          name="phone"
          value={userCredentials.phone}
          title="May contain only numbers"
          placeholder="Phone"
          onChange={handleInputChange}
          required
          className="peer placeholder-transparent"
        />
        <Label
          htmlFor="phone"
          label="Phone"
          className="pointer-events-none absolute -top-3.5 left-0 text-sm font-semibold text-slate-600 transition-all hover:cursor-text peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
        peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-slate-600"
        />
      </div>
      <Button type="submit" className="btn-regular min-w-32">
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
