import React from "react";

import logo from "../../Img/Lambda_Logo_white.png";

const Logo = () => {
  const logoStyle = {
    paddingLeft: '7.5%',
    paddingTop: '5%',
  }
  return (
    <div className="logo-container" style={logoStyle}>
      <img className="logo" src={logo} alt="Lambda's logo" />
    </div>
  );
};

export default Logo;
