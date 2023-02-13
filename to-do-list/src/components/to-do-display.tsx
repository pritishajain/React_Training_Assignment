import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/to-do-display.css';


function Display() {
    return (
        <>
            <div className="main-div">
                <div className='head'>
                    <h1>ToDo List</h1>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </div>

                <div className='container'>
                    <div className="add-list">

                        <input type="text" placeholder="Add a Item" id="input-text" />
                        <button id="Add"> + </button>

                    </div>
                    <div className='show-list'>
                        <h1>Your List is:</h1>
                        <ol>

                        </ol>

                    </div>
                    <div className='remove-list'>
                        <button id="remove">Remove All</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Display;