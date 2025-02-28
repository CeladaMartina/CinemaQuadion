import React from "react";
import "./body.css";
import Top from "./Top Section/Top.tsx";
import Listing from "./Listing Section/Listing.tsx";
import Activity from "./Activity Section/Activity.tsx";

const Body: React.FC = () => {
  return (
    <div className="mainContent">
      <Top />
      <div className="bottom flex">
        <Listing />
        <Activity />
      </div>
    </div>
  );
};

export default Body;
