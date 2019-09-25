import React, { useState } from "react";
import SpecialButton from "./SpecialButton.js";
import { specials } from '../../../data.js';
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specState, setSpecState] = useState(specials);
  const contStyle = {
    marginTop: '4.25%',
    display: 'flex',
    flexDirection: 'row',
    width: '65%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '90px',
  };
  const style = {
    borderRadius: '50%',
    backgroundColor: '#045F9F',
    color: 'white',
    width: '90px',
    height: '90px',
    fontSize: '2em',
    border: '1px solid 	#3B2446',
    boxShadow: '0px 4px 1px 	#3B2446'
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