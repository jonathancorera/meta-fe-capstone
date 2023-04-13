import React from "react";
import { useNavigate } from "react-router-dom";
import BookingImg from "../assets/booking.jpg";
import "./BookingPage.css";
import BookingForm from "../components/BookingForm"

const Booking = () => {
  const navigate = useNavigate();

  function handleClick (){
    navigate('/')
     }

  return (
    <main className="booking">

      <h1> Make a Booking</h1>

      <section>
        <img
          src={BookingImg}
          alt="Book a Table"
          
        />

      </section>
      <button type="button"  class="btn btn-secondary" onClick={handleClick}>Back to Home Page</button>

         <section>
        <BookingForm navigate={navigate} />
      </section>
    </main>
  );
};

export default Booking;
