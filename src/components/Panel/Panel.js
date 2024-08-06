import Dashboard from "./../Dashboard/Dashboard";
import Theme from "../../Util/theme";
import "./panel.css";
import "./../Feedback/customScrollbar.css";

const Panel = () => {
  return (
    <div
      className="panel-container custom-scrollbar"
      style={{ backgroundColor: Theme.primaryColor }}
    >
      <Dashboard />
    </div>
  );
};

export default Panel;
