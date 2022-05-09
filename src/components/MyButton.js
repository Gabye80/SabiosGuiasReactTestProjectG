import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyButton.css";

function MyButton() {
  const navigate = useNavigate();

  return (
    <div >
      <button className="button-style" onClick={() => navigate("/all-routes")}>Rutas</button>
    </div>
  );
}

export default MyButton;
