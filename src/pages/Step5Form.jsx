import thanks from "../assets/images/icon-thank-you.svg";

export const Step5Form = () => {
  return (
    <div className="flex-grow-[6] flex flex-col items-center justify-center p-6 h-auto mx-auto gap-8 md:flex-grow-[2] bg-white relative -top-6 rounded-lg min-h-[70vh] lg:static lg:h-full lg:bg-transparent min-[450px]:max-w-[70vw]">
      <figure>
        <img src={thanks} alt="" />
      </figure>
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-marine-blue font-bold text-3xl">Thank You!</h2>
        <p className="text-cool-gray font-medium text-lg text-center">
          Thanks for confriming your subscription!. We hope have fun using our
          platform. If you ever need support feel free to email us at
          support@loremgaming.com
        </p>
      </div>
    </div>
  );
};
