import classNames from "classnames";
import React from "react";

const hEl = [
  {
    title: "2020",
    description: "The Phone Call",
  },
  {
    title: "2021",
    description: "First live and implemented strategy",
  },
  {
    title: "2022",
    description: "Comprehensive Prototype Mobile and Web Application",
  },
];

const HistorySection = () => {
  return (
    <div className="w-full bg-black text-white  p-[50px] max-md:p-8 rounded-[40px] relative overflow-hidden">
      <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[300px] h-[50px] bg-[#47D7AC] blur-[100px] " />

      <h2 className="text-center mb-7 text-4xl text-[#47D7AC] font-bold">
        Our History
      </h2>
      <div className="flex justify-center items-stretch gap-8 max-md:flex-col">
        {hEl.map(({ title, description }, i, arr) => {
          return (
            <React.Fragment key={title}>
              <div
                className={classNames(
                  "flex-grow flex flex-[250px] max-md:flex-[1px] flex-col items-center gap-2.5 "
                )}
                key={title}
              >
                <h5 className="text-xl">{title}</h5>
                <p className="text-center text-secondary">{description}</p>
              </div>
              {i + 1 !== arr.length && <div className="border-r max-md:border-b max-md:border-r-0" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default HistorySection;
