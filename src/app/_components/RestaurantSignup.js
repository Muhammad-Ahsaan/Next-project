import React from "react";

const RestaurantSignup = () => {
  return (
    <>
      <h3>Sign Up page</h3>
      <div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter email Id"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Restaurant Name"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Enter City" className="input-field" />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Mobile No"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Full Adress"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <button className="button">SignUp</button>
        </div>
      </div>
    </>
  );
};

export default RestaurantSignup;
