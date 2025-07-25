import React from "react";
import StatCard from "../components/StatCard";

import PersonIcon from "../assets/images/logos/person.png";
import CalenderIcon from "../assets/images/logos/calender.png";
import CircleLogoIcon from "../assets/images/logos/circle_logo.png";

import LeftShape from "../assets/images/designes/shapes_left.png";
import RightShape from "../assets/images/designes/shapes_right.png";
import DotsShape from "../assets/images/designes/shape_dots.png";

interface Stat {
  icon: string;
  value: string;
  label: string;
  bg: string;
}

const OurGrowth: React.FC = () => {
  const stats: Stat[] = [
    {
      icon: PersonIcon,
      value: "450+",
      label: "Number of Students",
      bg: "bg-blue-100",
    },
    {
      icon: CalenderIcon,
      value: "25+",
      label: "Events Hosted",
      bg: "bg-green-100",
    },
    {
      icon: CircleLogoIcon,
      value: "4+",
      label: "Chapters Finished",
      bg: "bg-yellow-100",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 px-6 overflow-hidden">
      <img
        src={LeftShape}
        alt="Left decoration"
        className="absolute top-7 left-0 w-26"
      />
      <img
        src={DotsShape}
        alt="Dots decoration"
        className="absolute top-10 right-10 w-32"
      />

      <img
        src={RightShape}
        alt="Right decoration"
        className="absolute right-0 bottom-0 w-48 md:w-56"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Growth</h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
        Empowering Student Developers Through Community and Learning
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ml-10">
           {stats.map((stat, index) => (
              <div
              key={index}
              className="transform transition-transform duration-300 hover:scale-125"
            >
            <StatCard  {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurGrowth;
