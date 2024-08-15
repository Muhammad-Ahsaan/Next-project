"use client";
import { react, useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignup from "../_components/RestaurantSignup";
import RestaurantHeader from "../_components/RestaurantHeader";

import RestaurantFooter from "../_components/RestaurantFooter";
import "./style.css";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <RestaurantHeader />
        <h1>Restaurant Login/SignUp Page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignup />}

        <div>
          <button className="button-link" onClick={() => setLogin(!login)}>
            {login
              ? "Do not have account? SignUp"
              : "Already have Account?Login"}
          </button>
        </div>
      </div>
      <RestaurantFooter />
    </>
  );
};

export default Restaurant;
