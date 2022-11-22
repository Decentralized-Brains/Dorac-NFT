import React from "react";

const Header = () => {
  return (
    <div className="text-gray-200">
      <div className="flex flex-col items-center justify-center gap-4 xl:flex-row xl:justify-between">
        <div className="flex gap-4">
          <button className="bg-sky-400/30 hover:bg-sky-600/50">All</button>
          <button className="bg-sky-400/30 hover:bg-sky-600/50">Lorem</button>
          <button className="bg-sky-400/30 hover:bg-sky-600/50">Ipsum</button>
        </div>
        <div className="flex gap-4  ">
          <div className="flex flex-col items-center ">
            <p className="bg-[#0f0f2c] -mb-4 z-10 px-2 font-bold">Gender</p>
            <p className="border pt-3 pb-1 border-gray-600 text-gray-300 rounded-full min-w-fit px-7">
              Male
            </p>
          </div>

          <div className="flex flex-col items-center ">
            <p className="bg-[#0f0f2c] -mb-4 z-10 px-2 font-bold">Breed Type</p>
            <p className="border pt-3 pb-1 border-gray-600 text-gray-300 rounded-full min-w-fit px-7">
              Founding
            </p>
          </div>

          <div className="flex flex-col items-center ">
            <p className="bg-[#0f0f2c] -mb-4 z-10 px-2 font-bold">Sort By</p>
            <p className="border pt-3 pb-1 border-gray-600 text-gray-300 rounded-full min-w-fit px-7">
              <select className="bg-transparent text-gray-500 focus:outline-none font-semibold">
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
