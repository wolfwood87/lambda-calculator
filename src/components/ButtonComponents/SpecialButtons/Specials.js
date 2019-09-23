import React, { useState } from "react";
import SpecialButton from "./SpecialButton.js";
import { specials } from '../../../data.js';
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specState, setSpecState] = useState(specials);
  const contStyle = {
    paddingTop: '2.5%',
    display: 'flex',
    flexDirection: 'row',
    width: '65%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '90px',
  };
  const style = {
    borderRadius: '50%',
    color: 'blue',
    width: '90px',
    height: '90px'
  };
  return (
    <div style={contStyle}>
      {console.log(specials)}
      {specState.map((item, index) => (
      <SpecialButton style={style} buttonData={item} key = {index} />
    ))}
      
    </div>
  );
};

export default Specials;