import React from "react";
import image from "../../../assets/images/treatment.png";
import Buttons from "../../../Components/Buttons/Buttons";

const DentalCare = () => {
  return (
    <section className="my-44 md:px-14">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="md:w-1/2 rounded-lg shadow-2xl" alt="" />
          <div className="md:pl-20">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Buttons>Getting Started</Buttons>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalCare;
