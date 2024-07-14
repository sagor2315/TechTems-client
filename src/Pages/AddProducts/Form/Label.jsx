import PropTypes from "prop-types";
const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="absolute left-3 -top-6 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-7 peer-focus:text-lg"
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node,
};

export default Label;
