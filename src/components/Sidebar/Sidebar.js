import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartSimple,
  faListCheck,
  faWallet,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import Theme from "../../Util/theme";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [activeIcon, setActiveIcon] = useState("home");
  const [hoverIcon, setHoverIcon] = useState("");

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  const handleIconHover = (icon) => {
    setHoverIcon(icon);
  };

  const handleIconLeave = () => {
    setHoverIcon("");
  };

  return (
    <>
      <div
        className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}
        style={{ backgroundColor: Theme.secondaryColor }}
      >
        <FontAwesomeIcon
          icon={faHome}
          color="#99989c"
          className={`fa-icon ${
            activeIcon === "home" || hoverIcon === "home" ? "active" : ""
          }`}
          style={{ fontSize: "1.5rem" }}
          onClick={() => handleIconClick("home")}
          onMouseEnter={() => handleIconHover("home")}
          onMouseLeave={handleIconLeave}
        />
        <FontAwesomeIcon
          icon={faChartSimple}
          color="#99989c"
          className={`fa-icon ${
            activeIcon === "chart" || hoverIcon === "chart" ? "active" : ""
          }`}
          style={{ fontSize: "1.5rem" }}
          onClick={() => handleIconClick("chart")}
          onMouseEnter={() => handleIconHover("chart")}
          onMouseLeave={handleIconLeave}
        />
        <FontAwesomeIcon
          icon={faListCheck}
          color="#99989c"
          className={`fa-icon ${
            activeIcon === "list" || hoverIcon === "list" ? "active" : ""
          }`}
          style={{ fontSize: "1.5rem" }}
          onClick={() => handleIconClick("list")}
          onMouseEnter={() => handleIconHover("list")}
          onMouseLeave={handleIconLeave}
        />
        <FontAwesomeIcon
          icon={faWallet}
          color="#99989c"
          className={`fa-icon ${
            activeIcon === "wallet" || hoverIcon === "wallet" ? "active" : ""
          }`}
          style={{ fontSize: "1.5rem" }}
          onClick={() => handleIconClick("wallet")}
          onMouseEnter={() => handleIconHover("wallet")}
          onMouseLeave={handleIconLeave}
        />
        <FontAwesomeIcon
          icon={faSignOut}
          color="#99989c"
          className={`fa-icon ${
            activeIcon === "signout" || hoverIcon === "signout" ? "active" : ""
          }`}
          style={{ fontSize: "1.5rem", marginTop: "auto" }}
          onClick={() => handleIconClick("signout")}
          onMouseEnter={() => handleIconHover("signout")}
          onMouseLeave={handleIconLeave}
        />
      </div>
    </>
  );
};

export default Sidebar;
