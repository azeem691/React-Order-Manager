import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import ProgressCircular from "./../ui/ProgressCircular";
import Theme from "../../Util/theme";

const NetProfit = ({ percentage }) => {
  return (
    <div
      className="d-flex p-3"
      style={{
        backgroundColor: Theme.secondaryColor,
        color: "white",
        borderRadius: "4px",
      }}
    >
      <div>
        <p>Net Profit</p>
        <h1 className="fw-bold">$ 960.32</h1>
        <FontAwesomeIcon icon={faCaretUp} color="#00c98d" /> 3%
      </div>
      <div className="d-flex flex-column align-items-center gap-2 ms-auto">
        <ProgressCircular percentage={percentage} />
        <h6 style={{ fontSize: "9px" }}>
          The values here have been rounded off
        </h6>
      </div>
    </div>
  );
};

export default NetProfit;
