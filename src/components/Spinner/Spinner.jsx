import { LuLoader } from "react-icons/lu";
import PropTypes from "prop-types";

const Spinner = ({ css }) => {
  const classes = `animate-spin ${css || ""}`;

  return <LuLoader className={classes} />;
};

export default Spinner;

Spinner.propTypes = {
  css: PropTypes.string,
};
