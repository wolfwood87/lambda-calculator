import React, { useState } from "react";
import OperatorButton from './OperatorButton.js';
import { operators } from '../../../data.js';
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [opState, setOpState] = useState(operators);

  const contStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    height: '525px',
  };
  const style = {
    borderRadius: '50%',
    backgroundColor: 'lightblue',
    width: '90px',
    height: '90px'
  };
  return (
    <div style={contStyle}>
      {opState.map((object, index) => (
        <OperatorButton style={style} buttonData={object} key = {index} />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Operators;
