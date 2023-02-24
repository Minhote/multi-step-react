import { useContext } from "react";
import { StepFormContext } from "../context/Context";

export const LeftSide = () => {
  const { name, email, phoneNumber, plan, price, addOns } =
    useContext(StepFormContext);
  return (
    <div className="flex-grow w-full h-[30vh] shrink-0 bg-left-bg  bg-cover bg-no-repeat bg-100%-60% p-4 lg:bg-80%-65% lg:rounded-2xl lg:static lg:w-auto lg:bg-left-bg-xl lg:h-auto ">
      <ul className="flex lg:flex-col lg:justify-start lg:items-start gap-8 justify-center h-full items-center">
        <li className="flex gap-3 items-center justify-start cursor-pointer group">
          <span
            className={`h-10 w-10 rounded-full border-magnolia border text-magnolia flex justify-center items-center font-bold group-hover:bg-pastel-blue group-hover:text-purplish-blue group-hover:border-pastel-blue ${
              name === "" || email === "" || phoneNumber === 0
                ? "bg-pastel-blue text-purplish-blue"
                : ""
            }`}
          >
            1
          </span>
          <div className="hidden flex-col lg:flex">
            <span className="uppercase text-opacity-80 text-cool-gray text-xs font-bold tracking-wider">
              Step 1
            </span>
            <p className="text-magnolia text-sm uppercase font-bold tracking-wider">
              Your info
            </p>
          </div>
        </li>
        <li className="flex gap-3 items-center justify-start cursor-pointer group">
          <span
            className={`h-10 w-10 rounded-full border-magnolia border text-magnolia flex justify-center items-center font-bold group-hover:bg-pastel-blue group-hover:text-purplish-blue group-hover:border-pastel-blue ${
              name != "" && email != "" && phoneNumber != 0 && plan === ""
                ? "bg-pastel-blue text-purplish-blue"
                : ""
            }`}
          >
            2
          </span>
          <div className="hidden flex-col lg:flex">
            <span className="uppercase text-opacity-80 text-cool-gray text-xs font-bold tracking-wider">
              Step 2
            </span>
            <p className="text-magnolia text-sm uppercase font-bold tracking-wider">
              Select Plan
            </p>
          </div>
        </li>
        <li className="flex gap-3 items-center justify-start cursor-pointer group">
          <span
            className={`h-10 w-10 rounded-full border-magnolia border text-magnolia flex justify-center items-center font-bold group-hover:bg-pastel-blue group-hover:text-purplish-blue group-hover:border-pastel-blue ${
              name != "" &&
              email != "" &&
              phoneNumber != 0 &&
              plan != "" &&
              JSON.stringify(price) != JSON.stringify(["", 0]) &&
              JSON.stringify(addOns) === JSON.stringify(["", 0])
                ? "bg-pastel-blue text-purplish-blue"
                : ""
            } `}
          >
            3
          </span>
          <div className="hidden flex-col lg:flex">
            <span className="uppercase text-opacity-80 text-cool-gray text-xs font-bold tracking-wider">
              Step 3
            </span>
            <p className="text-magnolia text-sm uppercase font-bold tracking-wider">
              Add-ons
            </p>
          </div>
        </li>
        <li className="flex gap-3 items-center justify-start cursor-pointer group">
          <span
            className={`h-10 w-10 rounded-full border-magnolia border text-magnolia flex justify-center items-center font-bold group-hover:bg-pastel-blue group-hover:text-purplish-blue group-hover:border-pastel-blue ${
              name != "" &&
              email != "" &&
              phoneNumber != 0 &&
              plan != "" &&
              JSON.stringify(price) != JSON.stringify(["", 0]) &&
              JSON.stringify(addOns) != JSON.stringify(["", 0])
                ? "bg-pastel-blue text-purplish-blue"
                : ""
            }`}
          >
            4
          </span>
          <div className="hidden flex-col lg:flex">
            <span className="uppercase text-opacity-80 text-cool-gray text-xs font-bold tracking-wider">
              Step 4
            </span>
            <p className="text-magnolia text-sm uppercase font-bold tracking-wider">
              Summary
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
