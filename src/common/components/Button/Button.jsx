import PropTypes from "prop-types";

const Button = ({ type, children, onClick, className = "", ...otherProps }) => {
  const css = `${className}`;

  return (
    <button type={type} onClick={onClick} className={css} {...otherProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  otherProps: PropTypes.array,
};

export default Button;
