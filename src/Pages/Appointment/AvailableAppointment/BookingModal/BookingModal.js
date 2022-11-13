import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const date = format(selectedDate, "PP");
  const { slots, name } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    console.log(slot, name, email, phone);

    const booking = {
      appointmentDate: date,
      treatment: treatment.name,
      patient: name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatment && treatment.name}</h3>
          <form onSubmit={handleBooking} className="mt-5">
            <input
              type="text"
              value={date}
              disabled
              className="input-bordered mb-4 input w-full"
            />
            <select name="slot" className="select select-bordered w-full mb-4">
              {slots &&
                slots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
            </select>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="input-bordered mb-4 input w-full"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="input-bordered mb-4 input w-full"
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="Your Phone"
              className="input-bordered mb-4 input w-full"
            />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
