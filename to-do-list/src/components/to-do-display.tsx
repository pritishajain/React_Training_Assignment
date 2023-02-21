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

    const removeItem = (itemid: React.Key, text: string,e: any) => {
      e.target.parentElement.parentElement.children[0].style.textDecoration="none";
      e.target.parentElement.parentElement.children[0].style.backgroundColor="rgb(19, 19, 56)"; 
      
      this.setState({
        items: [...this.state.items].filter(
          (element, index) => itemid !== index
        ),
        completed: [...this.state.completed, text],
        active: [...this.state.active].filter(
          (element, index) => itemid !== index
        ),
      });
      
      
    };

    const removeAllItems = () => {
      this.setState({
        items: [],
        active:[]
      });

    };

    const activeItem = (itemid: React.Key, text: string ,e:any) =>{
     
     this.state.active.map((element,index)=>{
  
        if(itemid === index){
          if(e.target.parentElement.parentElement.children[0].style.textDecoration==="line-through")
          {
            e.target.parentElement.parentElement.children[0].style.textDecoration="none";
            e.target.parentElement.parentElement.children[0].style.backgroundColor="rgb(19, 19, 56)";
            this.setState({
              active:[...this.state.active,text]
            });

          }
          else
          {
            e.target.parentElement.parentElement.children[0].style.textDecoration="line-through"
            e.target.parentElement.parentElement.children[0].style.backgroundColor="green"
            this.setState({
              active: [...this.state.active].filter((element,index) => itemid !== index),
            }); 
          }
        }
        
      })
   
    };
  
    
    return (
      <React.Fragment>
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
            <div className="active">Added : {this.state.added.length}</div>
            <div className="active">
              Completed : {this.state.completed.length}
            </div>
            <div className="active" onClick={removeAllItems}>
              Remove All
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default TodoDisplay;
