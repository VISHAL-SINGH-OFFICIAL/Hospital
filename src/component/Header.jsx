import React from "react";
import bg3 from "../assets/all-images/bg/bg3.png";
import logo from "../assets/logo.png"
import doctorImg from "../assets/images/doctorImg.png";

const Header = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[650px] flex flex-col items-center justify-start"
      style={{
        backgroundImage: `url(${bg3})`,
      }}
    >
      {/* Header Container */}
      <div className="w-[85%] h-[80px] max-w-6xl mx-auto mt-8 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-between px-10 py-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} className="h-[80px] w-[80px]" alt="logo" />
        </div>

        {/* Navigation Menu */}
        <div className="flex gap-8 text-gray-800 font-semibold">
          {["Home", "Pages", "Services", "Case Studies", "Blog"].map(
            (item, index) => (
              <div
                key={index}
                className="px-3 py-1 rounded-lg hover:bg-cyan-100 hover:text-cyan-600 transition duration-300 cursor-pointer"
              >
                {item}
              </div>
            )
          )}
        </div>

        {/* Right Side Info */}
        <div className="flex gap-6 items-center">
          <span className="text-gray-800 font-medium hover:text-cyan-600 cursor-pointer transition">
            852452622
          </span>
          <button className="px-5 py-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full font-semibold shadow-md hover:scale-105 transition">
            Schedule Appointment
          </button>
        </div>
      </div>

      {/* Hero Section (Below Header) */}
      <div className="w-[85%] max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src={doctorImg}
            alt="Doctor"
            className="rounded-3xl shadow-lg shadow-cyan-400/30 w-[90%] object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">
            Your Health, Our <span className="text-cyan-400">Priority</span>
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            We provide top-quality medical services with cutting-edge technology
            and compassionate care. Your well-being is our mission.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full font-semibold shadow-md hover:scale-105 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
