import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css";
import Booking from "../pages/BookingPage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();


  function handleClick (){
 navigate('/booking')
  }

  return (
    <header>
      <div className="left-side">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          A family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button  type="button"  class="btn btn-secondary" onClick={handleClick}>
          Make a Reservation
        </button >
      </div>
      <div className="right-side">
        <img
          src={Logo}
          alt="little lemon logo"
        />
      </div>
    </header>
  );
};

export default Header;
