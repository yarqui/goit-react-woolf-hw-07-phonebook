import PropTypes from "prop-types";

const Section = ({ children }) => {
  return (
    <section className="flex flex-col rounded-2xl bg-white p-8 shadow">
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
