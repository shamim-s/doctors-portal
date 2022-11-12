import React from "react";
import "./AppointmentBanner.css";
import bannerImg from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

  const bannerStyle = {
    backgroundImage: ` url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="hero min-h-screen mb-5 relative main-hero"
      style={bannerStyle}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="rounded-lg shadow-2xl lg:w-1/2"
          alt=""
        />
        <div className="lg:mr-20 lg:mt-0 mt-10">
          <div className="mx-auto shadow-xl rounded-md">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
