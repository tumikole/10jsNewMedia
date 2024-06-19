import React from "react";
import "./Spinner.css";

function Spinner({ spinnerContent }) {
  return (
    <div className="spinnersContainer">
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1>Please wait while we get {spinnerContent}</h1>
    </div>
  );
}

export default Spinner;
