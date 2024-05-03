import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";

import Button from "../../common/components/Button/Button";
import { deleteContact } from "../../redux/slices/contactsSlice";

const ContactListItem = ({
  id,
  name,
  number,
}) => {
  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-between border-b-2 border-slate-100 py-2 ps-2 transition-colors hover:bg-slate-50">
      <div className="flex max-w-full flex-wrap items-center gap-8">
        <span className=" min-w-20 hyphens-auto text-base font-semibold">
          {name}:
        </span>
        <span className="break-all text-sm text-slate-500 ">{number}</span>
      </div>

      <Button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        className="btn-close"
      >
        <IoCloseOutline className="h-6 w-6" />
      </Button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
