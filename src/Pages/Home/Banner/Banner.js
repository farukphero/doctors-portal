import React from "react";
import  chair from '../../../assets/images/chair.png'
import image from '../../../assets/images/bg.png'
import Buttons from "../../../Components/Buttons/Buttons";

const Banner = () => {
  return (
    <div className="hero  md:px-5" style={{
        background:`url(${image})`,
        backgroundPosition:'right'
    }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src= {chair} alt='chair'
          className="md:w-1/2 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6 pr-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
           <Buttons>Getting Started</Buttons>
        </div>
      </div>
    </div>
  );
};

export default Banner;
