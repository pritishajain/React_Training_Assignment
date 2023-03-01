import React, { useEffect, useRef } from "react";
import "../assets/css/Form.css";
import {Heading, Details, Name, Age, Contact, Email, City, Description, Address, Street, Disability, State, Pincode, Star ,Yes ,No} from "../assets/constants/constant";

const Form = () => {
  const nameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameInput.current) {
      nameInput.current.focus();
    }
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <form>
          <h1>{Heading}</h1>

          <p>{Description}</p>

          <h3>{Details}</h3>

          <p>
            {Name}
            <span className="star">{Star}</span>
            <input
              type="text"
              name="Name"
              required
              placeholder="full name"
              ref={nameInput}
            />
          </p>

          <p>
            {Age} <span className="star">{Star}</span>{" "}
            <input type="number" name="Age" placeholder="eg:20" required />
          </p>

          <p>
            {Contact}
            <span className="star">{Star}</span>
            <input
              type="number"
              name="Contact no"
              placeholder="### ### ####"
              required
            />
          </p>

          <p>
            {Email}
            <span className="star">{Star}</span>
            <input type="email" name="email" placeholder="abc@gmail.com" />
          </p>

          <p>
            {Address}
            <span className="star">{Star}</span>
            {Street}
            <input
              type="text"
              name="street no."
              placeholder="Street no"
              required
            />
            <input
              type="text"
              name="street no."
              placeholder="landmark,society"
              required
            />
            <br />
            {City}
            <input type="text" name="city" required />
            {State}
            <input type="text" name="state" required />
            {Pincode}
            <input
              type="number"
              name="Pincode"
              placeholder="eg.302020"
              required
            />
          </p>

          <p>
            {Disability}
            <span className="star">{Star}</span>
            <div className="disability">
               {Yes}
               <input type="radio" name="disablity" required />
            </div>
            <div className="disability">
               {No}
               <input type="radio" name="disablity" required />
            </div>
            
            <br />
            <input type="submit" name="submit" />
          </p>

        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
