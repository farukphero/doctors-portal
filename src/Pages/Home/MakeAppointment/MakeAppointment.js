import React from "react";
import image from "../../../assets/images/doctor.png";
import image2 from '../../../assets/images/appointment.png'
import Buttons from "../../../Components/Buttons/Buttons";

const MakeAppointment = () => {
  return (
    <section className="my-44 md:px-14 text-white" style={
        {
            background: `url(${image2})`
        }
    }>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="hidden md:block md:w-1/2 -mt-32 rounded-lg shadow-2xl" alt="" />
          <div className="md:pl-20">
            <h1 className="text-secondary font-semibold pb-5">Appointment</h1>
            <h1 className="text-3xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
           <Buttons>Get Started</Buttons>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
