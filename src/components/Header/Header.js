import {
  faEnvelope,
  faEdit,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import RoundedIcon from "./../ui/RoundedIcon";
import Logo from "./../../assets/Logo.png";
import Profile from "./../../assets/profile.jpeg";
import "./header.css";

import Theme from "../../Util/theme";

function Header() {
  return (
    <header
      className="d-flex align-items-center p-3 text-white"
      style={{ backgroundColor: Theme.secondaryColor }}
    >
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search" />
      </div>
      <div className="d-flex ms-auto align-items-center">
        <RoundedIcon icon={faEnvelope} size={40} bgColor="#44454a" />
        <RoundedIcon icon={faEdit} size={40} bgColor="#44454a" />
        <RoundedIcon icon={faBell} size={40} bgColor="#44454a" />
        <img src={Profile} className="profilePic" alt="Logo" />
      </div>
    </header>
  );
}

export default Header;
