import React from "react";
import "../assets/css/to-do-display.css";
import ToDoList from "./to-do-list";
import NavBar from "./nav-bar";
import { Heading, Placeholder, Active, Completed, RemoveAll, Add, Colon } from "../assets/constants/constant";
import { Link } from "react-router-dom";
import List from "./list";

type myState = {
  data: string;
  items: { id: string; title: string }[];
  completed: { id: string; title: string }[];
  recycleBin: { id: string; title: string }[];
};

class TodoDisplay extends React.Component<{}, myState> {
  constructor(props: string) {
    super(props);

    this.state = {
      items: [],
      data: "",
      completed: [],
      recycleBin: [],
    };
  }

  render() {

    const itemEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        data: event.target.value,
      });
    };

    const addItem = () => {
      if (!this.state.data.length || this.state.data.trim().length === 0) {
        return;
      }
      let newTask: { id: string; title: string } = {
        title: this.state.data,
        id: new Date().getTime().toString(),
      };

      this.setState({
        items: [...this.state.items, newTask],
        data: "",
      });
    };

    const removeItem = (itemid: string, text: string) => {
      let newTask: { id: string; title: string } = {
        title: text,
        id: itemid,
      };

      this.setState({
        items: [...this.state.items].filter((element) => itemid !== element.id),
        recycleBin: [...this.state.recycleBin, newTask],
      });
    };

    const removeAllItems = () => {
      this.setState({
        recycleBin: [...this.state.recycleBin, ...this.state.items],
        items: [],
      });
    };

    const completedItem = (itemid: string, text: string) => {
      let newTask: { id: string; title: string } = {
        title: text,
        id: itemid,
      };

      this.setState({
        items: [...this.state.items].filter((element) => itemid !== element.id),
        completed: [...this.state.completed, newTask],
      });
    };

    return (
      <React.Fragment>
        <div className="main-div">
          <div className="main-container">

            <div className="head">
              <h1>{Heading}</h1>
            </div>

            <div className="nav">
              <NavBar
                completeList={this.state.completed}
                activeList={this.state.items}
                recycleList={this.state.recycleBin}
              />
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
                  {Add}
                </button>
              </div>

              <div className="show-list">
                <ul>
                  {this.state.items.map((value) => {
                    return (
                      <ToDoList
                        text={value.title}
                        itemid={value.id}
                        onSelect={removeItem}
                        onChange={completedItem}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="lower-container">
              <div className="active">
                <Link
                  to="/active"
                  className="link"
                  state={{
                    completeList: this.state.completed,
                    activeList: this.state.items,
                    recycleList: this.state.recycleBin,
                    text: "Active List",
                  }} >
                  {Active}{Colon}
                  {this.state.items.length}
                </Link>
              </div>

              <div className="active">
                <Link
                  to="/complete"
                  className="link"
                  state={{
                    completeList: this.state.completed,
                    activeList: this.state.items,
                    recycleList: this.state.recycleBin,
                    text: "Completed List",
                  }} >
                  {Completed}{Colon}
                  {this.state.completed.length}
                </Link>
              </div>

              <div className="active" onClick={removeAllItems}>
                {RemoveAll}
              </div>

              <div className="active">
                <i className="fa fa-trash"></i>
                <span className="badge badge-light">
                  <Link
                    to="/recycle"
                    state={{
                      completeList: this.state.completed,
                      activeList: this.state.items,
                      recycleList: this.state.recycleBin,
                      text: "Recycle Bin",
                    }} >
                    {this.state.recycleBin.length}
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
       
      </React.Fragment>
    );
  }
}

export default TodoDisplay;
