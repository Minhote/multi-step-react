import { useState } from "react";
import { StepFormContext } from "./Context";

export const Provider = ({ children }) => {
  const [stepsState, setStepsState] = useState({
    name: "",
    email: "",
    phoneNumber: 0,
    plan: "", //Monthly, Yearly
    price: ["", 0],
    //Montlhy price :['Arcade', 9], ['Advanced', 12], ['Pro', 15]
    //Yearly price : ['Arcade', 90], ['Advanced', 120], ['Pro', 150]
    addOns: ["", 0],
    //Montlhy add-ons : ['Online Services', 1], ['Larger Storage', 1], ['Customizable Profile', 2]
    //Yearly add-ons : ['Online Services', 10], ['Larger Storage', 20], ['Customizable Profile', 20]
    confirmed: false,
  });

  return (
    <StepFormContext.Provider
      value={{ ...stepsState, stepsState, setStepsState }}
    >
      {children}
    </StepFormContext.Provider>
  );
};
