import React from "react";
import { Link } from "react-router-dom";
import { Kitchen, Bathroom, Shower, Faucets, Sink, Tiles } from "../../assets/constants/constant";
import "../../assets/css/categories.css";

const Categories = () => {
  return (
    <React.Fragment>
      <div className="cdropdown">
        <div className="cdropdown-content">

          <div className="parentul">
            <li className="parentli"><Link to="/products/Kitchen" className="hlink">{Kitchen}</Link></li>
            <li className="childli"><Link to="/products/Kitchen/Faucets" className="clink">{Faucets}</Link></li>
            <li className="childli"><Link to="/products/Kitchen/Sink" className="clink">{Sink}</Link></li>
            <li className="childli"><Link to="/products/Kitchen/Tiles" className="clink">{Tiles}</Link></li>
          </div>

          <div className="parentul">
            <li className="parentli"><Link to="/products/Bathroom" className="hlink">{Bathroom}</Link></li>
            <li className="childli"><Link to="/products/Bathroom/Faucets" className="clink">{Faucets}</Link></li>
            <li className="childli"><Link to="/products/Bathroom/Sink" className="clink">{Sink}</Link></li>
            <li className="childli"><Link to="/products/Bathroom/Shower" className="clink">{Shower}</Link></li>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
