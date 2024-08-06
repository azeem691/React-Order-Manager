import React from "react";

function Tagline({ status }) {
  return (
    <span
      style={{
        padding: "4px 12px",
        borderRadius: "12px",
        color: status === "delivered" ? "#00c98d" : "#f15d5d",
        backgroundColor: status === "delivered" ? "#165246" : "#5e3135",
      }}
    >
      {status}
    </span>
  );
}

export default Tagline;
