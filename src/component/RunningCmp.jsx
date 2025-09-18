import React from "react";
import Marquee from "react-fast-marquee";

const RunningCmp = () => {
  return (
    <div className="bg-blue-950 w-full h-12 flex items-center">
      <Marquee
        gradient={false}
        speed={5}
        pauseOnHover={true}
         play={true}
         loop={0}
        className="text-white font-semibold text-lg"
      >
        <span className="mx-8">Advanced Technology</span>
        <span className="mx-8">Experienced Professionals</span>
        <span className="mx-8">Preventive Care</span>
        <span className="mx-8">Personalized Care</span>
        <span className="mx-8">Patient-Centered Approach</span>
        {/* Duplicate if you want a longer continuous scroll */}
        <span className="mx-8">Advanced Technology</span>
        <span className="mx-8">Experienced Professionals</span>
        <span className="mx-8">Preventive Care</span>
        <span className="mx-8">Personalized Care</span>
        <span className="mx-8">Patient-Centered Approach</span>
      </Marquee>
    </div>
  );
};

export default RunningCmp;
