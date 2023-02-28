import React, { useEffect, useRef } from "react";
import "../assets/css/Form.css";
import { heading, details,name,age,contact,email,city,description,address,street,disability,state,pincode } from "../assets/constants/constant";

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
          <h1>{heading}</h1>
          <p>
            Want to become aur member?Fill the form below , we will contact you
            shortly to complete your registration process.
          </p>
          <h3>{details}</h3>
          <p>
            {name}<span className="star">*</span>
            <input
              type="text"
              name="Name"
              required
              placeholder="full name"
              ref={nameInput}
            />
          </p>
          <p>
            {age} <span className="star">*</span>{" "}
            <input type="number" name="Age" placeholder="eg:20" required />
          </p>
          <p>
            {contact}<span className="star">*</span>
            <input
              type="number"
              name="Contact no"
              placeholder="### ### ####"
              required
            />
          </p>
          <p>
            {email}<span className="star">*</span>
            <input type="email" name="email" placeholder="abc@gmail.com" />
          </p>
          <p>
            {address}<span className="star">*</span> Street no:
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
            {city}
            <input type="text" name="city" required />
            {state}
            <input type="text" name="state" required />
            {pincode}
            <input
              type="number"
              name="Pincode"
              placeholder="eg.302020"
              required
            />
          </p>
          <p>
            {disability}<span className="star">*</span>yes{" "}
            <input type="radio" name="disablity" required />
            No <input type="radio" name="disablity" required />
            <br/>
            <input type="submit" name="submit" />
          </p>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
