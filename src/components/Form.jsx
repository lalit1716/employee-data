// import { useNavigate} from "react-router-dom";
import React, { useState } from "react";
import User from "../user-data/User";
import { useNavigate } from "react-router-dom";
// import {v4 as uuid} from 'uuid';

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  let history = useNavigate();

  const register = (e) => {
    e.preventDefault();

    var n = () => {
      return (((1 + Math.random()) * 4 * 100) | 0).toString(16).substring(4);
    };

    let a = name,
      b = number,
      c = email;

    User.push({ id: n, name: a, number: b, email: c });

    alert("You have successfully submited the data 🌞");

    history("/");
  };

  return (
    <>
      <div className="form-section">
        <form onSubmit={register} className="form">
          <p className="p-40-50-700">Add User</p>

          <div>
            <label className="form-label" htmlFor="name">
              Name :{" "}
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              autoComplete="off"
              required
              placeholder="Enter name here . . . . ."
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="mobileNo">
              Mobile no.{" "}
            </label>
            <input
              className="form-input number"
              type="number"
              id="mobileNo"
              autoComplete="off"
              required
              placeholder="Enter mobile no.  . . . . ."
              name="mobileNo"
              inputMode="Numeric"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="email">
              Email Id :{" "}
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              autoComplete="off"
              required
              placeholder="Enter email i'd . . . . . "
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <button className="submit-btn" type="submit" title="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
