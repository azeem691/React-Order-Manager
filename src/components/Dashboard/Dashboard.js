import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretRight,
  faBowlFood,
  faBurger,
  faBowlRice,
} from "@fortawesome/free-solid-svg-icons";
import "react-circular-progressbar/dist/styles.css";
import Theme from "../../Util/theme";
import Card from "./Card";
import ProgressCircular from "./../ui/ProgressCircular";
import RoundedIcon from "../ui/RoundedIcon";
import CustomBarChart from "../ui/CustomBarChart";
import OrdersTable from "../OrdersTable/OrdersTable";
import Feedback from "../Feedback/Feedback";
import NetProfit from "./NetProfit";
import GoalsSection from "./GoalsSection";
import "./Dashboard.css";

const Dashboard = () => {
  const percentage = 70;
  return (
    <div className="container-fluid dashboard-container">
      <h3 className="text-white fw-bold">Dashboard</h3>
      <div className="row my-4">
        <div className="col-lg-8">
          <div className="d-flex justify-content-between gap-4">
            <Card
              color="#3e62fe"
              bg="#2a3268"
              title="Total Orders"
              value="75"
              result={3}
            />
            <Card
              color="#00c98d"
              bg="#165246"
              title="Total Delivered"
              value="70"
              result={-3}
            />
            <Card
              color="#f15d5d"
              bg="#5e3135"
              title="Total Cancelled"
              value="05"
              result={3}
            />
            <Card
              color="#ea3ea0"
              bg="#5b2a4a"
              title="Total Revenue"
              value="$12K"
              result={-3}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <NetProfit percentage={percentage} />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-lg-8">
          <CustomBarChart />
        </div>
        <div className="col-lg-4">
          <GoalsSection />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-8">
          <OrdersTable />
        </div>
        <div className="col-lg-4">
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
