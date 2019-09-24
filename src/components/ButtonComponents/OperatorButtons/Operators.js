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
    marginTop: '2%',
    height: '535px',
  };
  const style = {
    borderRadius: '50%',
    backgroundColor: '#01748C',
    color: 'white',
    width: '90px',
    fontSize: '2em',
    height: '90px',
    border: '1px solid #3B2446',
    boxShadow: '0px 4px 1px 	#3B2446'
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
