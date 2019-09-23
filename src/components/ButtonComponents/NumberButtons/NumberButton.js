import React from "react";
import Numbers from "./Numbers.js";
 const NumberButton = (props) => {
  return (
    <>
    <button>
      <span>{props.buttonData}</span>
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;