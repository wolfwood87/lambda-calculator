import React from "react";

 const NumberButton = (props) => {
  return (
    <>
    <button className="num-button" style={props.style}>
      <span>{props.buttonData}</span>
    </button>
    {console.log(props.buttonData)}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;