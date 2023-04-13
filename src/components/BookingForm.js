import React from "react";
import useForm from "../common/useForm";
import "./BookingForm.css";

const BookingForm = ({ navigate }) => {
  const {
    form,
    timeSlots,
    isFormValid,
    changeNameHandler,
    changeEmailHandler,
    changeDateHandler,
    changeTimeHandler,
    changeGuestsHandler,
    changeTableHandler,
    changeOccasionHandler,
    changeMessageHandler,
    submitHandler,
  } = useForm();

  function handleSubmit() {
    const response = submitHandler();
    return response ? navigate("/booking-confirmation") : null;
  }

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <div className="column">

        <label htmlFor="name">
        <p>Name</p>
        </label>
        
        <input
          value={form.name}
          onChange={changeNameHandler}
          type="text"
          id="name"
        />

        <label htmlFor="email">
          <p>Email</p>
        </label>
        <input
          value={form.email}
          onChange={changeEmailHandler}
          type="email"
          id="email"
        />

        <label htmlFor="res-date">
          <p>Reservation date</p>
        
        </label>
        <input
            value={form.date}
            onChange={changeDateHandler}
            type="date"
            id="res-date"
            placeholder="Date"
          />
        
        <label htmlFor="res-time">
          <p>Reservation time</p>
        
        </label>
        <select onChange={changeTimeHandler} value={form.time} id="res-time">
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>

        <label htmlFor="guests">
          <p>Number of guests</p>
        </label>
        <input
            value={form.numberOfGuests}
            onChange={changeGuestsHandler}
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required
          />

        <label htmlFor="occasion">
          <p>Occasion</p>
        
        </label>
        <select
            value={form.occasion}
            onChange={changeOccasionHandler}
            id="occasion"
          >
            <option value="">None</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>


        <label htmlFor="table">
          <p>Table preference</p>

        </label>
        <select
            value={form.tablePreference}
            onChange={changeTableHandler}
            id="occasion"
          >
            <option value="">None</option>
            <option value="inside">Inside</option>
            <option value="outside">Outside</option>
          </select>

        <label htmlFor="message">
          <p>Additional requests</p>
         
        </label>
        <textarea
            value={form.message}
            onChange={changeMessageHandler}
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        <div className="submit-container">
          <button disabled={!isFormValid}>Make Reservation</button>
        </div>
      </div>

    </form>
  );
};

export default BookingForm;
