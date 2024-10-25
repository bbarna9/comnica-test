import bgImage from "../assets/bg-image.png";

// This component is again pretty straightforward, it simply contains the heading texts
// and some stylings applied to them.

const MainPageContent = () => {
  return (
    <div className="h-screen max-md:h-[75vh] w-[67vw] max-md:w-screen max-md:px-8 max-md:flex-col flex px-20">
      <div className="w-[50%] pt-40 max-md:w-full z-20">
        <h1 className="text-4xl max-md:text-4xl pb-3 font-semibold text-turquoise-3">
          Comnica Signature
        </h1>
        <h2 className="text-xl max-md:text-lg font-semibold text-gray">
          Digitális aláíró szolgáltatás a Comnicától
        </h2>
      </div>
      <div className="w-[50%] max-md:w-full max-md:pt-20 flex justify-end pt-[15vh]">
        <img
          src={bgImage}
          alt=""
          className="transform object-contain scale-x-[-1] h-96 w-fit"
        />
      </div>
    </div>
  );
};

export default MainPageContent;
