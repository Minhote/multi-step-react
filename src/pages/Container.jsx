import { useContext } from "react";
import { StepFormContext } from "../context/Context";
import { LeftSide } from "../components/LeftSide";
import { Step1Form } from "./Step1Form";
import { Step2Form } from "./Step2Form";
import { Step3Form } from "./Step3Form";
import { Step4Form } from "./Step4Form";
import { Step5Form } from "./Step5Form";

export const Container = () => {
  const {
    name,
    email,
    phoneNumber,
    plan,
    price,
    addOns,
    confirmed,
    stepsState,
  } = useContext(StepFormContext);
  return (
    <div className="lg:p-4 w-full h-auto flex flex-col bg-light-blue  rounded-xl items-center lg:h-auto lg:flex-row lg:mx-auto lg:w-3/5 relative lg:items-stretch lg:bg-magnolia">
      <LeftSide />
      {name === "" || email === "" || phoneNumber === 0 ? (
        <Step1Form />
      ) : name != "" && email != "" && phoneNumber != 0 && plan === "" ? (
        <Step2Form />
      ) : name != "" &&
        email != "" &&
        phoneNumber != 0 &&
        plan != "" &&
        JSON.stringify(price) != JSON.stringify(["", 0]) &&
        JSON.stringify(addOns) === JSON.stringify(["", 0]) ? (
        <Step3Form />
      ) : name != "" &&
        email != "" &&
        phoneNumber != 0 &&
        plan != "" &&
        JSON.stringify(price) != JSON.stringify(["", 0]) &&
        JSON.stringify(addOns) != JSON.stringify(["", 0]) &&
        confirmed === false ? (
        <Step4Form />
      ) : (
        <Step5Form />
      )}
    </div>
  );
};
