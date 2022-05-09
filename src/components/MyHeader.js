import React from "react";
import MyButton from "./MyButton";
import "./MyHeader.css";

function MyHeader() {
  
  return (
    <>
    <header className="myheader">
      <img className="myheader-logo" src="/img/LogoSabiosGuias-Inverso.png" alt="Sabios Guías Intérpretes"/>
      <div className="myheader-btn">
        <MyButton/>
      </div>
    </header>
    <hr/>
    </>
  );
}

export default MyHeader;
