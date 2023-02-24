import { useContext } from "react";
import { ButtonsContainer } from "../components/ButtonsContainer";
import TitleStep from "../components/TitleStep";
import { StepFormContext } from "../context/Context";

export const Step4Form = () => {
  const { plan, price, addOns, stepsState, setStepsState } =
    useContext(StepFormContext);

  let totalToPay = price[1];
  addOns.map((el) => {
    totalToPay += parseInt(el[1]);
  });

  const prevStep = () => {
    setStepsState({ ...stepsState, addOns: ["", 0] });
  };

  const confirmStep = () => {
    setStepsState({ ...stepsState, confirmed: true });
  };

  const handleChangeOfPlan = () => {
    setStepsState({ ...stepsState, plan: "", price: ["", 0], addOns: ["", 0] });
  };

  return (
    <div className="flex-grow-[6] flex flex-col content-start p-6 h-auto mx-auto gap-8 md:flex-grow-[2] bg-white relative -top-6 rounded-lg min-h-[70vh] lg:static lg:h-full lg:bg-transparent">
      <TitleStep
        title="Finishing Up"
        description="Double check everything looks OK before comfirming"
      />
      {/* Content */}
      <div className="bg-magnolia flex flex-col justify-around items-start grow p-3 rounded gap-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <h2 className="font-bold text-lg text-marine-blue">
              {price[0]}({plan})
            </h2>
            <span
              className="underline text-sm font-thin text-cool-gray cursor-pointer hover:text-marine-blue hover:font-medium"
              onClick={() => handleChangeOfPlan()}
            >
              Change
            </span>
          </div>
          <p className="font-bold text-xl text-marine-blue">
            ${price[1]}/{plan === "Monthly" ? "mo" : "yr"}
          </p>
        </div>
        {addOns.length > 0 ? (
          <div className="flex flex-col justify-between items-start w-full">
            {addOns.map((el) => (
              <div
                key={el}
                className="flex justify-between items-center w-full"
              >
                <p className="text-cool-gray text-base font-light">{el[0]}</p>
                <p className="text-marine-blue font-bold">
                  +{el[1]}/{plan === "Monthly" ? "mo" : "yr"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-marine-blue font-bold">No add-ons selected</p>
        )}
        <div className="flex items-center justify-between w-full">
          <p className="text-cool-gray text-base font-light">
            Total ({plan === "Monthly" ? "per month" : "per year"})
          </p>
          <p className="text-purplish-blue text-xl font-bold md:text-2xl">
            ${totalToPay}/{plan === "Monthly" ? "mo" : "yr"}
          </p>
        </div>
      </div>

      {/* Content */}
      <ButtonsContainer
        btn1Display="block"
        btn2Content="Confirm"
        handlePrev={() => prevStep()}
        handleNext={() => confirmStep()}
      />
    </div>
  );
};
