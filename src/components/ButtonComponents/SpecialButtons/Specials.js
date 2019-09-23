import React, { useState } from "react";
import SpecialButton from "./SpecialButton.js";
import { specials } from '../../../data.js';
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specState, setSpecState] = useState(specials);
  const style = {
    borderRadius: '50%',
    color: 'blue',
    width: '50px',
    height: '50px'
  };
  return (
    <div>
      {console.log(specials)}
      {specState.map((item, index) => (
      <SpecialButton style={style} buttonData={item} key = {index} />
    ))}
      
    </div>
  );
};

export default Specials;