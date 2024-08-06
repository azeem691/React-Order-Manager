import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircular = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < percentage) {
          return prev + 1; 
        } else {
          clearInterval(interval);
          return percentage; 
        }
      });
    }, 10);

    return () => clearInterval(interval); 
  }, [percentage]);


  return (
    <div style={{ width: "95px", height: "95px" }}>
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          textColor: "white",
          pathColor: "#7294ff",
          trailColor: "#273266",
          textSize: "26px",
        })}
      />
    </div>
  );
};

export default ProgressCircular;
