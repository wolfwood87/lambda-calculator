import React, { useState } from "react";
import NumberButton from './NumberButton.js';
import { numbers } from '../../../data.js';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

 const Numbers = (props) => {
  
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  
  const zeroStyle = {
    width: '215px',
    borderRadius: '60px',
    backgroundColor: 'blue',
    color: 'white',
    height: '90px'
  }
  const contStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '65%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '425px',
  }
  const style = {
    borderRadius: '50%',
    backgroundColor: 'blue',
    color: 'white',
    width: '90px',
    height: '90px'
  };
  return (
    <div style= {contStyle}>
    {numberState.map((item, index) => (
      <NumberButton style={index == '9' ? zeroStyle : style} buttonData={item} key = {index} />
    ))}
    </div>
      /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
  );
};

export default Numbers;