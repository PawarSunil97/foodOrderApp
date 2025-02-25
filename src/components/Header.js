import { useState} from "react";
import { useContext } from 'react';
import LOGO from "../../assets/swiggy2.png";
import { HeaderConstant } from "../../appConstant";
import { Link } from "react-router"; // Corrected Link import
import { useOnlineStatus } from "../Hooks/useOnlineStatus";
import userContext from "../utils/userContaxt";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { HOME, ABOUT, CONTACT, CARD } = HeaderConstant;
  const { isOnline } = useOnlineStatus();
  const {loggedInUser} = useContext(userContext);
  // const LOGO_URL = Logo;
   

  const toggleButton = () => {
    setToggle(!toggle);
  };

  const card = useSelector((store)=>store.card.item);
 
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-green-100 shadow-md z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="rounded-full w-16 h-16" src={LOGO} alt="Logo" />
        <span className="text-2xl font-bold ml-4 text-gray-800">Good Food</span>
      </div>

      {/* Navbar Section */}
      <nav className="flex items-center">
        <ul className="flex space-x-6 text-lg font-medium text-gray-600">
          <li className="flex items-center space-x-1">
            <span>Online Status:</span>
            <span className={isOnline ? "text-green-500" : "text-red-500"}>
              {isOnline ? "✅" : "🔴"}
            </span>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              {HOME}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              {ABOUT}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              {CONTACT}
            </Link>
          </li>
          <li>
            <Link
              to="/card"
              className="hover:text-gray-900 transition-colors duration-200 font-bold text-xl"
            >
             
              {CARD}({card.length} item)
            </Link>
          </li>
        </ul>

        {/* Toggle Button */}
        <button
          onClick={toggleButton}
          className="ml-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
        >
          {toggle ? "LogOut" : "LogIn"}
        </button>
       <i className="px-4 font-bold">{loggedInUser}</i>
      </nav>
    </header>
  );
};

export default Header;
