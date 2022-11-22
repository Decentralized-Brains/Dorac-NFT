import React from "react";
import Dog from "../assets/images/cardDog.png";
const Card = () => {
  return (
    <div className="min-w-[390px] max-w-[420px] overflow-hidden rounded-xl border border-violet-500">
      <div className="w-full bg-violet-500 px-4 py-2 text-center">
        <h3 className="font-semibold text-xl">Lorem ipsum dolor sit amet.</h3>
        <p className="text-white font-semibold">Lorem, ipsum dolor.</p>
      </div>
      <div className="flex items-center justify-center relative py-10">
        <div className="text-white absolute top-8 left-8 text-center">
          <p className="text-sm">Status</p>
          <p className="text-lg font-semibold text-yellow-500">Resting</p>
        </div>
        <div className="text-white absolute top-8 right-8 text-center">
          <p className="text-sm">Data</p>
          <p className="text-lg font-semibold text-yellow-500">Lorem</p>
        </div>
        <div className="text-white absolute bottom-8 left-8 text-center">
          <p className="text-sm">Win Rate</p>
          <p className="text-lg font-semibold text-yellow-500">58%</p>
        </div>
        <div className="text-white absolute bottom-8 right-8 text-center">
          <p className="text-sm">Tier</p>
          <p className="text-lg font-semibold text-yellow-500">2</p>
        </div>
        <img
          className="min-w-[180px] hover:scale-110 duration-200"
          src={Dog}
          alt=""
        />
      </div>
      <div className="w-[80%] rounded-t-xl text-center mx-auto bg-violet-500 py-2 px-3">
        <p className="font-bold text-white">55% for you</p>
      </div>
    </div>
  );
};

export default Card;
