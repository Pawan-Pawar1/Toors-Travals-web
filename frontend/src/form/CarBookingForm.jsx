import React, { useState } from "react";

function CarBookingForm() {
  const [form, setForm] = useState({
    pickup: "",
    destination: "",
    phone: "",
    passengers: "",
    date: "",
    km: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const calculateKm = () => {
    // demo calculation (later you can use Google Maps API)
    const fakeDistance = Math.floor(Math.random() * 200) + 10;
    setForm({ ...form, km: fakeDistance });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Trip Booking:
Pickup: ${form.pickup}
Destination: ${form.destination}
Distance: ${form.km} km
Passengers: ${form.passengers}
Date: ${form.date}
Phone: ${form.phone}`;

    const whatsappLink =
      "https://wa.me/917498719145?text=" + encodeURIComponent(message);

    window.open(whatsappLink, "_blank");
  };

  return (
    <div style={{ maxWidth: "450px", margin: "auto" }}>
      <h2>Book a Car Trip</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={form.pickup}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={form.destination}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="button" onClick={calculateKm}>
          Calculate Distance
        </button>

        <p>Distance: {form.km} km</p>

        <input
          type="number"
          name="passengers"
          placeholder="Passengers"
          value={form.passengers}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile / WhatsApp Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Book via WhatsApp</button>
      </form>
    </div>
  );
}

export default CarBookingForm;