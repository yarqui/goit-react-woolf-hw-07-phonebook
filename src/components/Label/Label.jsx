import PropTypes from "prop-types";

const Label = ({ htmlFor, label, className = "" }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {label}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Label;
