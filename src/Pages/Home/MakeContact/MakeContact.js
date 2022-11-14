import React from "react";
import image2 from '../../../assets/images/appointment.png'
import Buttons from "../../../Components/Buttons/Buttons";

const MakeContact = () => {
  return (
    <div className="my-20 py-24" style={
        {
            background: `url(${image2})`
        }
    }>
      <div className="hero ">
        <div className="hero-content">
          <div className="card w-full">
            <h3 className="text-center text-secondary font-semibold">Contact Us</h3>
            <h1 className="text-white text-xl text-center">Stay connected with us</h1>
            <div className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered"
                />
              </div>
              <div>
              <textarea className="textarea w-full" placeholder="Your Message"></textarea>
              </div>
              <div className="form-control text-center mt-5">
                <Buttons>Submit</Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeContact;
