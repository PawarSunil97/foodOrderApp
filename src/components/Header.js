import { useState } from "react";
import Logo from "../../assets/swiggy2.png";
import { HeaderConstant } from "../../appConstant";
const Header = () => {
  const [togggle, setToggle]=useState(false)
  const { HOME, ABOUT, CONTACT, CARD } = HeaderConstant;

  const toggleButton = ()=>{
    setToggle(!togggle)
  }
  return (
    <div className="header">
      <div className="logo-content">
        <img className="logo" src={Logo} />
      </div>
      <div className="nav-item">
        <ul>
          <li>{HOME}</li>
          <li>{ABOUT}</li>
          <li>{CONTACT}</li>
          <li>{CARD}</li>
          <button onClick={toggleButton}>{togggle?"LogOut":"LogIn"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
