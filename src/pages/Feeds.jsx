import React from "react";
import "../style/feeds.css";

function Feeds({ id }) {
  return (
    <div id={id}>
      <div className="feeds-container">
        <div className="feed-item item1">Feed 1</div>
        <div className="feed-item item2">Feed 2</div>
        <div className="feed-item item3">Feed 3</div>
        <div className="feed-item item4">Feed 4</div>
        <div className="feed-item item5">Feed 5</div>
      </div>
    </div>
  );
}

export default Feeds;
