import React from "react";
import Dog from "../assets/images/cardDog.png";
const Card = () => {
  return (
    <div className="min-w-[370px] max-w-[420px] overflow-hidden rounded-xl border border-violet-500">
      <div className="w-full bg-violet-500 px-4 py-2 text-center">
        <h3 className="font-semibold text-xl">Lorem ipsum dolor sit amet.</h3>
        <p className="text-white font-semibold">Lorem, ipsum dolor.</p>
      </div>
      <div className="flex items-center justify-center">
        <img className="min-w-[320px]" src={Dog} alt="" />
      </div>
      <div className="w-[80%] rounded-t-xl text-center mx-auto bg-violet-500 py-2 px-3">
        <p className="font-bold text-white">55% for you</p>
      </div>
    </div>
  );
};

export default Card;
