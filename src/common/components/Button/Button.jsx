import PropTypes from "prop-types";

const Button = ({ type, children, onClick, className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
