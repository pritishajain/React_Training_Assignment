import React, { Component } from "react";
import "../assets/css/to-do-display.css";
import ToDoList from "./to-do-list";
import { heading } from "../assets/constants/Constant";
import { Placeholder } from "../assets/constants/Constant";


class TodoDisplay extends React.Component<
  {},
  {
    data: string;
    items: string[];
    completed: String[];
    added: String[];
    active: String[];
  }
> {
  constructor(props: string) {
    super(props);

    this.state = {
      data: "",
      items: [],
      completed: [],
      added: [],
      active: [],
    };
  }

  render() {
    const itemEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        data: event.target.value,
      });
    };

    const addItem = () => {
      if (!this.state.data.length || this.state.data.trim().length == 0) {
        return;
      }

      this.setState({
        items: [...this.state.items, this.state.data],
        added: [...this.state.added, this.state.data],
        active: [...this.state.active, this.state.data],
        data: "",
      });
    };

    const removeItem = (itemid: React.Key, text: string) => {
      this.setState({
        items: [...this.state.items].filter(
          (element, index: React.Key) => itemid !== index
        ),
        completed: [...this.state.completed, this.state.items[Number(itemid)]],
        active: [...this.state.active].filter((element) => text !== element),
      });
    };

    const removeAllItems = () => {
      this.setState({
        items: [],
      });
    };

    const activeItem = (text: String) => {
      this.setState({
        active: [...this.state.active].filter((element) => text !== element),
      });
      console.log(this.state.active);
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
                      onChange={activeItem}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="lower-container">
            <div className="active">Active : {this.state.active.length}</div>
            <div className="added">Added : {this.state.added.length}</div>
            <div className="completed">
              Completed : {this.state.completed.length}
            </div>
            <div className="remove" onClick={removeAllItems}>
              Remove All
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TodoDisplay;
