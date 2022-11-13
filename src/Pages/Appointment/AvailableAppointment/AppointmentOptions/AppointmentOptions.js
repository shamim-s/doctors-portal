import React from "react";

const AppointmentOptions = ({ appOption, setTreatment }) => {
  const { _id, name, slots } = appOption;
  return (
    <div className="card lg:w-[420px] w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Space not Avilable"}</p>
        <p>
          {slots.length}
          {slots.length > 1 ? "Spaces" : "Space"}
        </p>
        <div className="card-actions">
          <label onClick={() => setTreatment(appOption)} htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
