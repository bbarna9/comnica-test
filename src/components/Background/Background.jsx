import BackgroundDeco from "./BackgroundDeco";

// As on the example image I saw that the background elements were both the same in
// their details, I have created it as a reusable component, and just played around
// with the positioning.

const Background = () => {
  return (
    <div className="max-md:z-10">
      <BackgroundDeco position="top-[70%] max-md:top-[90%] -left-[16vw] max-md:-left-[90vw]" />
      <BackgroundDeco position="-top-[8%] right-24 max-md:-right-[90vw]" />
    </div>
  );
};

export default Background;
