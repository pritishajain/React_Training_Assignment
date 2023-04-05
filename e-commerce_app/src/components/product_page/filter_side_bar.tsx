import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "@mui/material/Slider";
import { removeBrandCategory, removeCategory, removeSubCategory } from "../../redux/actions/fetch_action";
import { addBrandCategory, addCategory, addSubCategory, priceFilter } from "../../redux/actions/fetch_action";
import { Kitchen, Bathroom, Faucets, Shower, Sink, Tiles, Cera, Dsons, Hindware, Jaguar } from "../../assets/constants/constant";

import "../../assets/css/filter_side_bar.css";

const FilterSideBar = () => {

  const [range, setRange] = useState<[number, number]>([5, 30]);
  const dispatch = useDispatch();

  const handleChanges = (
    event: any,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (Array.isArray(newValue)) {
      setRange(newValue as [number, number]);
    } else {
      const newRange = [...range];
      newRange[activeThumb] = newValue;
      setRange(newRange as [number, number]);
    }

    dispatch(priceFilter(range[0], range[1]));
  };

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name, className } = e.target;

    if (checked) {
      if (className === "hlink") {
        dispatch(addCategory(name));
      } else if (className === "clink") {
        dispatch(addSubCategory(name));
      } else if (className === "blink") {
        dispatch(addBrandCategory(name));
      }
    } else {
      if (className === "hlink") {
        dispatch(removeCategory(name));
      } else if (className === "clink") {
        dispatch(removeSubCategory(name));
      } else if (className === "blink") {
        dispatch(removeBrandCategory(name));
      }
    }
  };

  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="filter-type">
          <li className="side-parent">Category Filter</li>
          <hr />

          <li className="side-child1">
            <input
              type="checkbox"
              className="hlink"
              name="Kitchen"
              onChange={handleChecked}
            ></input>
            <label>{Kitchen}</label>
          </li>

          <li className="side-child1">
            <input
              type="checkbox"
              className="hlink"
              name="Bathroom"
              onChange={handleChecked}
            ></input>
            <label>{Bathroom}</label>
          </li>

        </div>
        <div className="filter-type">
          <li className="side-parent">Sub-Category Filter</li>
          <hr />

          <li className="side-child2">
            <input
              type="checkbox"
              className="clink"
              name="Faucets"
              onChange={handleChecked}
            ></input>
            <label>{Faucets}</label>
          </li>

          <li className="side-child2">
            <input
              type="checkbox"
              className="clink"
              name="Sink"
              onChange={handleChecked}
            ></input>
            <label>{Sink}</label>
          </li>

          <li className="side-child2">
            <input
              type="checkbox"
              className="clink"
              name="Tiles"
              onChange={handleChecked}
            ></input>
            <label>{Tiles}</label>
          </li>

          <li className="side-child2">
            <input
              type="checkbox"
              className="clink"
              name="Shower"
              onChange={handleChecked}
            ></input>
            <label>{Shower}</label>
          </li>
        </div>

        <div className="filter-type">
          <li className="side-parent">Price Filter</li>
          <hr />
          <div style={{ width: "150px", padding: "20px" }}>
            <Slider
              value={range}
              max={1000}
              onChange={handleChanges}
              valueLabelDisplay="auto"
            />
            ${range[0]} - ${range[1]}
          </div>
        </div>

        <div className="filter-type">
          <li className="side-parent">Brand Filter</li>
          <hr />

          <li className="side-child1">
            <input
              type="checkbox"
              className="blink"
              name="D'sons"
              onChange={handleChecked}
            ></input>
            <label>{Dsons}</label>
          </li>

          <li className="side-child1">
            <input
              type="checkbox"
              className="blink"
              name="Jaguar"
              onChange={handleChecked}
            ></input>
            <label>{Jaguar}</label>
          </li>

          <li className="side-child1">
            <input
              type="checkbox"
              className="blink"
              name="Hindware"
              onChange={handleChecked}
            ></input>
            <label>{Hindware}</label>
          </li>

          <li className="side-child1">
            <input
              type="checkbox"
              className="blink"
              name="Cera"
              onChange={handleChecked}
            ></input>
            <label>{Cera}</label>
          </li>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default FilterSideBar;
