import React from "react";
import "../style/aboutUs.css";
function AboutUs({ id }) {
  const grid_items = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
    "item9",
  ];
  return (
    <div id={id}>
      <div className="grid-container">
        {grid_items.map((item) => (
          <div className={`grid-item grid-${item}`}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
