import PropTypes from "prop-types";

const Heading = ({ level, className = "", children }) => {
  const HeadingLevel = `h${level}`;

  return <HeadingLevel className={className}>{children}</HeadingLevel>;
};

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Heading;
