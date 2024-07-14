import PropTypes from "prop-types";
const InputShape = ({ name }) => {
  return (
    <input
      type="text"
      name={name}
      className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
      placeholder=" "
    />
  );
};

InputShape.propTypes = {
  name: PropTypes.string,
};

export default InputShape;
