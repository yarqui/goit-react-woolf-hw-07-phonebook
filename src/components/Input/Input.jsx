import PropTypes from "prop-types";

const Input = ({
  id,
  type,
  name,
  value,
  onChange,
  pattern,
  title,
  placeholder,
  required,
  className = "",
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      title={title}
      placeholder={placeholder}
      pattern={pattern}
      onChange={onChange}
      required={required}
      className={className}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
