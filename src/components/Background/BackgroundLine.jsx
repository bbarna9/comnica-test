import PropTypes from "prop-types";

// This component, as you can see is just a horizontal row with some stylings applied.

const BackgroundLine = ({ color, margin }) => {
  return (
    <hr className={`h-1 opacity-20 w-[500px] border-none ${color} ${margin}`} />
  );
};

BackgroundLine.propTypes = {
  color: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
};

export default BackgroundLine;
