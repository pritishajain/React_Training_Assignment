import React from "react";
import "../assets/css/to-do-display.css";
import ToDoList from "./to-do-list";
import NavBar from "./nav-bar";
import { Heading, Placeholder, Active, Completed, RemoveAll, Add, Colon } from "../assets/constants/constant";
import { Link } from "react-router-dom";
import { addItem, removeAllItem } from "../redux/actions/to-do-actions";
import { connect } from "react-redux";

interface myState {
  data: string;
}

interface dispatchProps {
  addItem: (data: string) => void;
  removeAllItem: () => void;
}

export interface stateProps {
  active: { id: string; title: string }[];
  complete: { id: string; title: string }[];
  recycleBin: { id: string; title: string }[];
}

type Props = dispatchProps & stateProps;

class TodoDisplay extends React.Component<Props, myState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: "",
    };
  }

  changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      data: event.target.value,
    });
  };

  addData=()=>{
    if (!this.state.data.length || this.state.data.trim().length === 0) {
      this.setState({
        data:""
      })
      return;
    }
    this.props.addItem(this.state.data);
    this.setState({
      data:""
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-div">
          <div className="main-container">
            <div className="head">
              <h1>{Heading}</h1>
            </div>

            <div className="nav">
              <NavBar />
            </div>

            <div className="upper-container">
              <div className="add-list">
                <input
                  type="text"
                  placeholder={Placeholder}
                  value={this.state.data}
                  id="input-text"
                  onChange={this.changeInputValue}
                />
                <button
                  id="Add"
                  onClick={this.addData}
                >
                  {Add}
                </button>
              </div>

              <div className="show-list">
                <ul>
                  {this.props.active.map((value, key) => {
                    return (
                      <ToDoList
                        key={value.id}
                        text={value.title}
                        itemid={value.id}
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
                  state={{ text: "Active List" }}
                >
                  {Active}
                  {Colon}
                  {this.props.active.length}
                </Link>
              </div>

              <div className="active">
                <Link
                  to="/complete"
                  className="link"
                  state={{ text: "Completed List" }}
                >
                  {Completed}
                  {Colon}
                  {this.props.complete.length}
                </Link>
              </div>

              <div
                className="active"
                onClick={() => {this.props.removeAllItem()}}
              >
                {RemoveAll}
              </div>

              <div className="active">
                <i className="fa fa-trash"></i>
                <span className="badge badge-light">
                  <Link
                    to="/recycle"
                    state={{ text: "Recycle Bin" }}
                  >
                    {this.props.recycleBin.length}
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

const mapStateToProps = (state: stateProps) => {
  return {
    active: state.active,
    complete: state.complete,
    recycleBin: state.recycleBin,
  };
};

const mapDispatchToProps = (dispatch: any): dispatchProps => {
  return {
    addItem: (data: string) => {
      return dispatch(addItem(data))
    },

    removeAllItem: () => {
      return dispatch(removeAllItem());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoDisplay);
