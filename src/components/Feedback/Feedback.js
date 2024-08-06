import profile from "./../../assets/profile.jpeg";
import { feedback } from "./../../Util/Feedback_data";
import Theme from "../../Util/theme";
import Rating from "../ui/Rating";
import "./customScrollbar.css";

const Feedback = () => {
  const CardItem = ({ name, rating, comment }) => {
    return (
      <li
        className="list-group-item"
        style={{
          backgroundColor: Theme.secondaryColor,
          color: "white",
          padding: 0,
          margin: "5px 0px",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "1px solid white",
        }}
      >
        <div className="d-flex align-items-center gap-2">
          <img
            src={profile}
            alt=""
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          <h6>{name}</h6>
        </div>
        <Rating rating={rating} />
        <p
          style={{
            fontSize: "11px",
            wordSpacing: "1px",
            fontFamily: "monospace",
          }}
        >
          {comment}
        </p>
      </li>
    );
  };

  return (
    <div
      className="card"
      style={{ backgroundColor: Theme.secondaryColor, color: "white" }}
    >
      <div className="card-body">
        <h5 className="card-title">Customer's Feedback</h5>
        <ul
          className="list-group custom-scrollbar"
          style={{
            height: "335px",
            overflowY: "auto",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: Theme.secondaryColor,
          }}
        >
          {feedback.map((x, index) => (
            <CardItem
              key={index}
              name={x.name}
              rating={x.rating}
              comment={x.comment}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
