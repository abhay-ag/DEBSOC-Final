import React from "react";

function Achievement({ name, data }) {
  return (
    <div className="w-full box-border p-0.5 lg:w-[23%] my-4 h-full lg:h-[25rem] bg-gradient-to-br from-indigo-400 via-gray-700 to-gray-600 rounded-xl overflow-hidden flex flex-col justify-center items-start">
      <div className="mycol relative rounded-xl box-border p-5 w-full h-full flex flex-col text-white">
        <div className="flex-[0.5_0_0%] flex flex-col items-start">
          <h1 className="text-4xl font-bold">{name}</h1>
        </div>
        <div className="flex-1 flex flex-col items-start">
          <h3 className="text-2xl mt-3 font-medium">Achievements:</h3>
          <ul className="mt-5 box-border text-medium md:pl-4 list-disc">
            {data?.map((ob) => (
              <li>{ob}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
