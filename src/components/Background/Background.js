import React from "react";
import "./Background.css"; // Import CSS file for styling

function Background() {
  return (
    <div>
      <div className="bg-img-container">
        <div className="background-img"></div>
      </div>
      <div className="background-cover"></div>
    </div>
  );
}

export default Background;
