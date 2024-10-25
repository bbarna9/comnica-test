import PropTypes from "prop-types";

// In this component I have implemented the requested button in a separate component,
// and I also made it reusable, so that we can pass the displayed text and the onClick
// function down to it through it's props.

const CustomButton = ({ text, clickAction }) => {
  return (
    <button
      onClick={clickAction}
      className="bg-turquoise-1 z-50 uppercase text-white rounded-3xl py-3 px-4 text-[14px]"
    >
      {text}
    </button>
  );
};

// Prop validation

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  clickAction: PropTypes.func.isRequired,
};

export default CustomButton;
