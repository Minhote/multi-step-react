import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonsContainer } from "../components/ButtonsContainer";
import TitleStep from "../components/TitleStep";
import { StepFormContext } from "../context/Context";

export const Step1Form = () => {
  const { stepsState, setStepsState } = useContext(StepFormContext);

  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });
  console.log(errors, isValid, stepsState);

  return (
    <div className="flex-grow-[6] flex flex-col content-start p-6 h-auto mx-auto gap-8 md:flex-grow-[2] bg-white relative -top-6 rounded-lg min-h-[70vh] lg:static lg:h-full lg:bg-transparent">
      {/* Title */}
      <TitleStep
        title="Personal Info"
        description=" Please provide your name, email addres and phone number"
      />
      {/* Content */}
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit((data) => {
          isValid &&
            setStepsState({
              ...stepsState,
              name: data.name,
              email: data.email,
              phoneNumber: data.phoneNumber,
            });
        })}
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="name" className="text-marine-blue text-lg">
            Name
          </label>
          <input
            className="border-cool-gray border-2 rounded py-1 pl-2 outline-none text-purplish-blue font-medium"
            type="text"
            {...register("name", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Name must have 4 character at least",
              },
              validate: (value) => value.length >= 4,
            })}
            id=""
            placeholder="e.g: Stephen King"
          />
          <p
            className={`text-sm text-strawberry-red font-light ${
              errors.name?.message ? "block" : "hidden"
            }`}
          >
            {errors.name?.message}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="text-marine-blue text-lg">
            Email Address
          </label>
          <input
            className="border-cool-gray border-2 rounded py-1 pl-2 outline-none text-purplish-blue font-medium"
            type="email"
            {...register("email", {
              required: "This is required",
              validate: (value) => value.includes("@") === true,
            })}
            id=""
            placeholder="e.g: stephenking@lorem.com"
          />
          <p
            className={`text-sm text-strawberry-red font-light ${
              errors.email?.message ? "block" : "hidden"
            }`}
          >
            {errors.email?.message}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="phoneNumber" className="text-marine-blue text-lg">
            Phone Number
          </label>
          <input
            className="border-cool-gray border-2 rounded py-1 pl-2 outline-none text-purplish-blue font-medium"
            type="number"
            {...register("phoneNumber", {
              required: "This is required",
              pattern: {
                value: /^([0-9])*$/,
                message: "Only numbers please",
              },
              minLength: {
                value: 10,
                message: "Phone number must have 10 characters",
              },
              maxLength: {
                value: 10,
                message: "Phone number must have 10 characters",
              },
            })}
            id=""
            placeholder="e.g: 0952144228"
          />
          <p
            className={`text-sm text-strawberry-red font-light ${
              errors.phoneNumber?.message ? "block" : "hidden"
            }`}
          >
            {errors.phoneNumber?.message}
          </p>
          <input
            type="submit"
            value="Next Step"
            className="rounded bg-marine-blue text-white w-32 p-2 self-end font-bold m-2 hover:opacity-50"
          />
        </div>
      </form>
    </div>
  );
};
