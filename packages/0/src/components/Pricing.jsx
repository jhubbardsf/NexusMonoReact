import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Our  <span className="bg-gradient-to-r from-violet-400 to-violet-800 text-transparent bg-clip-text">
            Services
          </span>
      </h2>
      <div className="flex flex-wrap justify-between">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/2 p-4 sm:p-6 lg:p-8"
          >
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-violet-400 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-2xl mt-6 mr-2">{option.price}</span>
                {/* <span className="text-neutral-400 tracking-tight"></span> */}
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full"/>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={option.trialLink}
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-violet-900 border-4 border-violet-900 rounded-lg transition duration-200"
              >
                {option.trialText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;