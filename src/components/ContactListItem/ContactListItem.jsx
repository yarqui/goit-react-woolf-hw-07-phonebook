import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";

import Button from "../../common/components/Button/Button";
import { deleteContactById } from "../../redux/operations/contactsOperations";

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContactById(id));
  };

  return (
    <li className="flex items-center justify-between border-b-2 border-slate-100 py-2 ps-2 transition-colors hover:bg-slate-50">
      <div className="flex max-w-full flex-col flex-wrap items-start gap-2">
        <span className=" min-w-20 hyphens-auto text-base font-semibold">
          {name}:
        </span>
        <span className="break-all text-sm text-slate-500 ">{phone}</span>
      </div>

      <Button type="button" onClick={handleDeleteContact} className="btn-close">
        <IoCloseOutline className="h-6 w-6 " />
      </Button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
