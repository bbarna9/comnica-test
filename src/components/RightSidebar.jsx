import CustomButton from "./CustomButton";

// This component is simply a sidebar fixed to the right side.
// I've added the title in 2 rows because from the text excercise I thought
// that the "Comnica" word should have still had enough space to be placed next
// to the greeting, so I have figured the "Comnica Signature" title was
// meant to be next to each other, in one line, hence my division.

const RightSidebar = () => {
  const clickAction = () => {
    console.log("Button clicked :)");
  };

  return (
    <div className="absolute max-md:static max-md:w-screen max-md:h-fit max-md:pb-20 right-0 top-0 h-screen w-[33vw] bg-white bg-opacity-35 flex flex-col items-center pt-40">
      <div className="w-[80%] font-medium z-50">
        <div className="mb-5 flex flex-col gap-3">
          <h3 className="text-claret text-4xl">Üdvözlöm a</h3>
          <h3 className="text-claret text-4xl leading-[3.5rem]">
            Comnica Signature-ben!
          </h3>
        </div>
        <p className="text-gray mb-10">
          A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán. A
          folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje
          el, ha készen áll rá.
        </p>
        <CustomButton text="Kezdhetjük" clickAction={clickAction} />
      </div>
    </div>
  );
};

export default RightSidebar;
