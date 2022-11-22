import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="wrapper">
        <div className="h-[150px]"></div>
        <Header />
        <div className="pt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-12">
          <Link to="/details">
            <Card />
          </Link>
          <Link to="/details">
            <Card />
          </Link>
          <Link to="/details">
            <Card />
          </Link>
          <Link to="/details">
            <Card />
          </Link>
          <Link to="/details">
            <Card />
          </Link>
          <Link to="/details">
            <Card />
          </Link>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default Home;
