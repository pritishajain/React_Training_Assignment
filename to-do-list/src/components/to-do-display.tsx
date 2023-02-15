import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../assets/css/to-do-display.css";
import ToDoList from "./to-do-list";

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

    return (
      <>
        <div className="main-div">
          <div className="head">
            <h1>ToDo List</h1>
            {/*   <i className="fa fa-trash" aria-hidden="true"></i> */}
          </div>

          <div className="upper-container">
            <div className="add-list">
              <input
                type="text"
                placeholder="Add a Item"
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
                {this.state.items.map((value: string, i: React.Key) => {
                  return <ToDoList text={value} />;
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
