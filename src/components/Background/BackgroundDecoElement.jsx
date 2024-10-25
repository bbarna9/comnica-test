import PropTypes from "prop-types";

// This is basically an empty div element with a specific height and width,
// so that it is visible. I simply added some border and other styling, like
// border radius to get the shape seen on the example picture.

const BackgroundDecoElement = ({ borderColor, margin }) => {
  return (
    <div
      className={`opacity-20 h-16 w-[550px] ${borderColor} ${margin} border-4 rounded-full `}
    ></div>
  );
};

BackgroundDecoElement.propTypes = {
  borderColor: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
};

export default BackgroundDecoElement;
