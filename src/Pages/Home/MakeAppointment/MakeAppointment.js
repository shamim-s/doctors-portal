import React from "react";
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from "../../../components/Button/PrimaryBotton";

const MakeAppointment = () => {
  return (
    <section className="mt-36" style={
        {background: `url(${appointment})`}
    }>
      <div className="hero mt-16">
        <div className="hero-content flex-col lg:flex-row lg:p-0 pt-12 pb-12">
          <img
            src={doctor}
            className="lg:block md:hidden hidden -mt-44 mb-0 lg:w-1/2 rounded-lg"
            alt=""/>
          <div className="text-white">
            <h1 className="text-2xl text-secondary mb-5 font-bold">Appointment</h1>
            <h1 className="text-4xl font-bold mb-5">Make an appointment Today</h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
