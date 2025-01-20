import React from "react";
import "./car.scss";
import { Link, useNavigate } from "react-router-dom";

const Car = ({ brand, worth }) => {
  const redir = useNavigate();
  const btnStyle = { backgroundColor: "black", color: "red", padding: "10px" };
  return (
    <div id="Car">
      <h3 onMouseEnter={() => console.log("You Hovered!")}>
        The name of my Car is {brand ? brand : "Benz"} and it is worth $
        {worth ? worth : "2000"}{" "}
      </h3>
      <button
        className="btn"
        style={{}}
        onClick={() => alert("Available Soon!")}
      >
        Buy Now
      </button>
      <h4>
        Lorem, ipsum dolor.{" "}
        <span>
          <span>A</span>met
        </span>{" "}
      </h4>
      <div className="boxes">
        <div onClick={() => redir("/car/box1")} className="box">
          {" "}
          box1{" "}
        </div>
        <div onClick={() => redir("/car/box2")} className="box">
          box2
        </div>
        <div onClick={() => redir("/car/box3")} className="box">
          box3
        </div>
        <div onClick={() => redir("/car/box4")} className="box">
          box4
        </div>
      </div>
      <h1 className="text-3xl bg-mblack text-start md:text-center lg:text-end p-[14px] font-Grypen text-purple-700 font-bold underline">
        Hello world!
      </h1>
    </div>
  );
};

export default Car;
