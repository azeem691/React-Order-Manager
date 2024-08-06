import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faBowlFood,
  faBurger,
  faBowlRice,
} from "@fortawesome/free-solid-svg-icons";
import RoundedIcon from "../ui/RoundedIcon";
import Theme from "../../Util/theme";

const GoalsSection = () => {
  return (
    <div
      style={{
        backgroundColor: Theme.secondaryColor,
        color: "white",
        height: "300px",
      }}
      className="p-3 d-flex flex-column justify-content-around card"
    >
      <div className="d-flex align-items-baseline">
        <RoundedIcon
          icon={faBowlFood}
          size={60}
          bgColor="#5e3135"
          color="#f15d5d"
        />
        <h5>Goals</h5>
        <div className="ms-auto">
          <RoundedIcon icon={faCaretRight} size={30} bgColor="#47484d" />
        </div>
      </div>
      <div className="d-flex align-items-baseline">
        <RoundedIcon
          icon={faBurger}
          size={60}
          bgColor="#2a3268"
          color="#3e62fe"
        />
        <h5>Popular Dishes</h5>
        <div className="ms-auto">
          <RoundedIcon icon={faCaretRight} size={30} bgColor="#47484d" />
        </div>
      </div>
      <div className="d-flex align-items-baseline">
        <RoundedIcon
          icon={faBowlRice}
          size={60}
          bgColor="#165246"
          color="#00c98d"
        />
        <h5>Menus</h5>
        <div className="ms-auto">
          <RoundedIcon icon={faCaretRight} size={30} bgColor="#47484d" />
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
