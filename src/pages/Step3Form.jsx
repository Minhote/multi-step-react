import { useContext, useState } from "react";
import { ButtonsContainer } from "../components/ButtonsContainer";
import TitleStep from "../components/TitleStep";
import { StepFormContext } from "../context/Context";

export const Step3Form = () => {
  const { stepsState, plan, setStepsState } = useContext(StepFormContext);
  const [arrToState, setArrToState] = useState([]);

  const handleChecked = (e) => {
    if (e.target.checked) {
      e.target.parentNode.classList.add("border-purplish-blue");
      setArrToState([
        ...arrToState,
        [e.target.dataset.type, e.target.dataset.plan],
      ]);
    } else {
      e.target.parentNode.classList.remove("border-purplish-blue");
      setArrToState(
        arrToState.filter(
          (el) =>
            JSON.stringify(el) !=
            JSON.stringify([e.target.dataset.type, e.target.dataset.plan])
        )
      );
    }
  };

  const prevStep = () => {
    setStepsState({ ...stepsState, plan: "", price: ["", 0] });
  };

  const nextStep = () => {
    setStepsState({ ...stepsState, addOns: arrToState });
  };

  return (
    <div className="flex-grow-[6] flex flex-col content-start p-6 h-auto mx-auto gap-8 md:flex-grow-[2] bg-white relative -top-6 rounded-lg min-h-[70vh] lg:static lg:h-full lg:bg-transparent">
      {/* Title */}
      <TitleStep
        title="Picks Add-Ons"
        description="Add-ons help enhance your gaming experience"
      />
      {/* Content */}
      <div className="flex flex-col justify-between gap-6">
        <div className="flex justify-between items-center gap-6 border border-transparent p-2 rounded hover:border-purplish-blue cursor-pointer">
          <input
            type="checkbox"
            className="accent-marine-blue"
            data-type="Online Services"
            data-plan={plan === "Monthly" ? 1 : 10}
            onClick={(e) => handleChecked(e)}
          />
          <div className="flex flex-col gap-2 items-start grow">
            <h3 className="font-bold text-base text-marine-blue">
              Online Services
            </h3>
            <p className="text-cool-gray text-sm">
              Access to multiplayer games
            </p>
          </div>
          <span className="block text-sm text-center text-purplish-blue font-light md:text-base">
            {plan === "Monthly" ? "+$1/ mo" : "+$10/ yr"}
          </span>
        </div>
        <div className="flex justify-between items-center gap-6 border border-transparent p-2 rounded hover:border-purplish-blue cursor-pointer">
          <input
            type="checkbox"
            data-type="Larger Storage"
            data-plan={plan === "Monthly" ? 2 : 20}
            className="accent-marine-blue"
            onClick={(e) => handleChecked(e)}
          />
          <div className="flex flex-col gap-2 items-start grow">
            <h3 className=" text-marine-blue font-bold">Larger Storage</h3>
            <p className="text-cool-gray text-sm">Extra 1TB of cloud save</p>
          </div>
          <span className="block text-sm text-center text-purplish-blue font-light md:text-base">
            {plan === "Monthly" ? "+$2/ mo" : "+$20/ yr"}
          </span>
        </div>
        <div className="flex justify-between items-center gap-6 border border-transparent p-2 rounded hover:border-purplish-blue cursor-pointer">
          <input
            type="checkbox"
            data-type="Customizable Proflie"
            data-plan={plan === "Monthly" ? 2 : 20}
            className="accent-marine-blue"
            onClick={(e) => handleChecked(e)}
          />
          <div className="flex flex-col gap-2 items-start grow">
            <h3 className="font-bold text-base text-marine-blue">
              Customizable Profile
            </h3>
            <p className="text-cool-gray text-sm">
              Custom theme on your profile
            </p>
          </div>
          <span className="block text-sm text-center text-purplish-blue font-light md:text-base">
            {plan === "Monthly" ? "+$2/ mo" : "+$20/ yr"}
          </span>
        </div>
      </div>
      {/* Buttons */}
      <ButtonsContainer
        btn1Display="block"
        btn2Content="Next Step"
        handlePrev={() => prevStep()}
        handleNext={() => nextStep()}
      />
    </div>
  );
};
