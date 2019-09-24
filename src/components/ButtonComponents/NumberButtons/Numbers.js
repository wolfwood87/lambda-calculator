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
    backgroundColor: '#0F3F7E',
    color: 'white',
    fontSize: '2em',
    height: '90px',
    border: '1px solid #3B2446',
    boxShadow: '0px 4px 1px 	#3B2446'
  }
  const contStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '65%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '420px',
    paddingTop: '.5%',
  }
  const style = {
    borderRadius: '50%',
    backgroundColor: '#0F3F7E',
    fontSize: '2em',
    color: 'white',
    width: '90px',
    height: '90px',
    border: '1px solid #3B2446',
    boxShadow: '0px 4px 1px 	#3B2446'
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