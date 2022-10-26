import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import BG from "../assets/images/bg1.png";

const Home = () => {
  return (
    <div
      className="min-h-screen min-w-screen"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="wrapper">
        <div className="h-[150px]"></div>
        <Header />
        <div className="pt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-12">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default Home;
