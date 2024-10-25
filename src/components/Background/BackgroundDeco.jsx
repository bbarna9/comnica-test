import PropTypes from "prop-types";

import BackgroundDecoElement from "./BackgroundDecoElement";
import BackgroundLine from "./BackgroundLine";

// I think this component is pretty straightforward, I've simply positioned each
// element in the appropriate order and passed the parameters for them that were needed for
// their individual styling.

const BackgroundDeco = ({ position }) => {
  return (
    <div
      className={`flex flex-col max-md:fixed gap-4 absolute items-center rotate-[150deg] ${position}`}
    >
      <BackgroundLine color="bg-turquoise-3" margin="mr-44" />
      <BackgroundDecoElement borderColor="border-neutral-400" margin="mr-24" />
      <BackgroundLine color="bg-neutral-400" margin="mr-44" />
      <BackgroundDecoElement borderColor="border-turquoise-3" margin="ml-4" />
      <BackgroundLine color="bg-transparent" margin="mr-44" />
      <BackgroundDecoElement borderColor="border-neutral-400" margin="mr-24" />
      <BackgroundLine color="bg-turquoise-3" margin="mr-20" />
    </div>
  );
};

// This part is just to make some squiggly red lines go away, I will be doing this
// in every component where I am passing some props.

// I could have also just added a rule to the eslint config file, but I chose to go this route.

BackgroundDeco.propTypes = {
  position: PropTypes.string.isRequired,
};

export default BackgroundDeco;
