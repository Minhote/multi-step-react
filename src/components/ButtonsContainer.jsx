export const ButtonsContainer = ({
  btn1Display,
  btn2Content,
  handlePrev,
  handleNext,
}) => {
  return (
    <div
      className={`${
        btn1Display === "hidden" ? "justify-end" : "justify-between"
      } flex items-center w-full`}
    >
      <button
        className={`${btn1Display} rounded bg-transparent text-cool-gray w-32 p-2 self-end font-bold m-2 hover:text-marine-blue hover:bg-magnolia`}
        onClick={handlePrev}
      >
        Go Back
      </button>
      <button
        className={`rounded bg-marine-blue text-white w-32 p-2 self-end font-bold m-2 hover:opacity-50`}
        onClick={handleNext}
      >
        {btn2Content}
      </button>
    </div>
  );
};
