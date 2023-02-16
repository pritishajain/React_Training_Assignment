import React, { Component } from "react";
import "../assets/css/to-do-display.css";
import ToDoList from "./to-do-list";
import {heading} from "../assets/constants/Constant";
import {Placeholder} from "../assets/constants/Constant";


class Display extends React.Component<{}, { data: string; items: string[] }> {
  constructor(props: string) {
    super(props);

    this.state = {
      data: "",
      items: [],
    };
  }

  render() {
    const itemEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        data: event.target.value,
      });
    };

    const addItem = () => {
      if (!this.state.data.length) {
        return;
      }
      this.setState({
        items: [...this.state.items, this.state.data],
        data: "",
      });
    };
    const removeItem = (itemid: React.Key) => {
       
      this.setState({
        items: [...this.state.items].filter((element,index:React.Key) => itemid!== index)
      });
    };

    return (
      <>
        <div className="main-div">
          <div className="head">
          <h1>{heading}</h1>
          </div>

          <div className="upper-container">
            <div className="add-list">
              <input
                type="text"
                placeholder={Placeholder}
                value={this.state.data}
                id="input-text"
                onChange={itemEvent}
              />
              <button id="Add" onClick={addItem}>
                +
              </button>
            </div>

            <div className="show-list">
              <ul>
                {this.state.items.map((value: string, iterator: React.Key) => {
                  return (
                    <ToDoList
                      text={value}
                      itemid={iterator}
                      onSelect={removeItem}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="lower-container">
            <div className="active">Active</div>
            <div className="added">Added</div>
            <div className="completed">Completed</div>
            <div className="remove">Remove All</div>
          </div>
        </div>
      </>
    );
  }
}
export default Display;
