import React, { useState } from "react";

const RestaurantSignup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confpassword, setConfpassword] = useState();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [addres, setAddres] = useState();
  const [contact, setContact] = useState();

  const handleSignup = () => {
    console.log(email, password, confpassword, name, city, addres, contact);
  };
  return (
    <>
      <h3>Sign Up page</h3>
      <div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter email Id"
            className="input-field"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter password"
            className="input-field"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm password"
            className="input-field"
            value={confpassword}
            onChange={(event) => setConfpassword(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Restaurant Name"
            className="input-field"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter City"
            className="input-field"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Mobile No"
            className="input-field"
            value={addres}
            onChange={(event) => setAddres(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Full Adress"
            className="input-field"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <button className="button" onClick={handleSignup}>
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurantSignup;
