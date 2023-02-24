import { useContext, useState } from "react";
import { StepFormContext } from "../context/Context";
import TitleStep from "../components/TitleStep";
import { ButtonsContainer } from "../components/ButtonsContainer";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

export const Step2Form = () => {
  const { stepsState, setStepsState } = useContext(StepFormContext);
  const [checked, setchecked] = useState(true);
  const [selected, setSelected] = useState(1);

  const handleClick = (num) => {
    setSelected(num);
  };

  function nextStep(checked, selected) {
    let plan;
    let price = ["", 0];
    checked ? (plan = "Monthly") : (plan = "Yearly");
    if (plan === "Monthly") {
      if (selected === 1) {
        price = ["Arcade", 9];
      } else if (selected === 2) {
        price = ["Advanced", 12];
      } else if (selected === 3) {
        price = ["Pro", 15];
      }
    } else if (plan === "Yearly") {
      if (selected === 1) {
        price = ["Arcade", 90];
      } else if (selected === 2) {
        price = ["Advanced", 120];
      } else if (selected === 3) {
        price = ["Pro", 150];
      }
    }

    setStepsState({ ...stepsState, plan: plan, price: price });
  }

  function prevStep() {
    setStepsState({ ...stepsState, name: "", email: "", phoneNumber: 0 });
  }

  return (
    <>
      <div className="flex-grow-[6] flex flex-col content-start p-6 h-auto mx-auto gap-8 md:flex-grow-[2] bg-white relative -top-6 rounded-lg min-h-[70vh] lg:static lg:h-full lg:bg-transparent">
        {/* Title */}
        <TitleStep
          title="Select your plan"
          description="You have the option of monthly or yearly billing"
        />
        {/* Content */}
        <div className="flex flex-wrap justify-center flex-col gap-4 cursor-pointer md:flex-row md:justify-between">
          <div
            className={`rounded flex  gap-6 justify-start  p-4 border border-transparent hover:border-marine-blue focus:border-marine-blue ${
              selected === 1 ? "border-marine-blue" : ""
            } grow md:w-1/4 md:flex-col`}
            onClick={() => {
              handleClick(1);
            }}
          >
            <figure className="flex md:block">
              <img src={arcade} alt="" />
            </figure>
            <div>
              <h3 className="text-marine-blue font-bold">Arcade</h3>
              <p className="text-cool-gray font-light text-sm">$9/mo</p>
              <p
                className={`text-marine-blue font-light ${
                  checked ? "hidden" : "block"
                } text-sm`}
              >
                2 months free
              </p>
            </div>
          </div>
          <div
            className={`rounded flex gap-6 justify-start p-4 border border-transparent hover:border-marine-blue focus:border ${
              selected === 2 ? "border-marine-blue" : ""
            } grow md:w-1/4 md:flex-col`}
            onClick={() => {
              handleClick(2);
            }}
          >
            <figure className="flex md:block">
              <img src={advanced} alt="" />
            </figure>
            <div>
              <h3 className="text-marine-blue font-bold">Advanced</h3>
              <p className="text-cool-gray font-light text-sm">$12/mo</p>
              <p
                className={`text-marine-blue font-light ${
                  checked ? "hidden" : "block"
                } text-sm`}
              >
                2 months free
              </p>
            </div>
          </div>
          <div
            className={`rounded flex gap-6 justify-start p-4 border border-transparent hover:border-marine-blue focus:border ${
              selected === 3 ? "border-marine-blue" : ""
            } grow md:w-1/4 md:flex-col`}
            onClick={() => {
              handleClick(3);
            }}
          >
            <figure className="flex md:block">
              <img src={pro} alt="" />
            </figure>
            <div>
              <h3 className="text-marine-blue font-bold">Pro</h3>
              <p className="text-cool-gray font-light text-sm">$15/mo</p>
              <p
                className={`text-marine-blue font-light ${
                  checked ? "hidden" : "block"
                } text-sm`}
              >
                2 months free
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-9 flex items-center justify-center gap-4 bg-white">
          <p
            className={
              checked
                ? "text-marine-blue font-bold transition-all duration-500"
                : "font-medium text-cool-gray transition-all duration-500"
            }
          >
            Monthly
          </p>
          <label
            htmlFor="check"
            className="block bg-marine-blue cursor-pointer relative w-10 h-5 rounded-full"
          >
            <input
              type="checkbox"
              id="check"
              className="sr-only peer"
              onClick={() => setchecked(!checked)}
            />
            <span className="rounded-full w-2/5 h-4/5 bg-white absolute left-0.5 top-0.5 peer-checked:left-[22px] transition-all duration-500"></span>
          </label>
          <p
            className={
              !checked
                ? "text-marine-blue font-bold transition-all duration-500"
                : "font-medium text-cool-gray transition-all duration-500"
            }
          >
            Yearly
          </p>
        </div>
        {/* Buttons */}
        <ButtonsContainer
          btn1Display="block"
          btn2Content="Next Step"
          handlePrev={() => prevStep()}
          handleNext={() => nextStep(checked, selected)}
        />
      </div>
    </>
  );
};
