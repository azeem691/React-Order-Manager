import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import Theme from "../../Util/theme";
import "./card.css";

const Card = ({ color, bg, title, value, result }) => {
  return (
    <div
      className="p-3 card"
      style={{
        backgroundColor: Theme.secondaryColor,
        color: "white",
        flex: 1,
      }}
    >
      <div className="RecatngleIcon" style={{ backgroundColor: bg }}>
        <FontAwesomeIcon icon={faShoppingCart} color={color} />
      </div>
      <p style={{ fontSize: "12px", margin: "4px 0px" }}>{title}</p>
      <div className="d-flex justify-content-between align-items-center">
        <h1 style={{ fontWeight: "bold" }}>{value}</h1>
        <div>
          <FontAwesomeIcon
            icon={result > 0 ? faCaretUp : faCaretDown}
            color={result > 0 ? "#00c98d" : "#f15d5d"}
          />{" "}
          {Math.abs(result)}%
        </div>
      </div>
    </div>
  );
};

export default Card;
