import React from "react";
import "./MyFooter.css";


function MyFooter() {
  return (
    <>
      <footer className="myfooter">
        <div className="myfooter-logos">
          <img src="/img/San-Cristobal-CIFP.logo_.png" alt="CIFP San Cristóbal"/>
          <img src="/img/LogoIESElRincon-transparent.png" alt="IES El Rincón" />
          <img src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
        </div>
        <hr/>
      </footer>
    </>
  );
}

export default MyFooter;
