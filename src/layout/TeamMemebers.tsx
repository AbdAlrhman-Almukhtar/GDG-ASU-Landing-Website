import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import ProfileCard from "../components/ProfileCard";

import Laith from "../assets/images/members/laith.png";
import Ahmad from "../assets/images/members/ahmad.png";
import Khalid from "../assets/images/members/khalid.png";
import Tarek from "../assets/images/members/tarek.jpg";
import Murtadah from "../assets/images/members/murtadah.png";
import Musaab from "../assets/images/members/musaab.png";
import Mukhtar from "../assets/images/members/mukhtar.png";
import Ayah from "../assets/images/members/ayah.png";
import Jahaf from "../assets/images/members/jahaf.png";
import Remas from "../assets/images/members/remas.png";
import Tasneem from "../assets/images/members/tasneem.jpg";
import Shahd from "../assets/images/members/shahd.jpg";
import Zaid from "../assets/images/members/zaid.png";
import Firas from "../assets/images/members/firas.png";
//import Ahmad from "../assets/images/members/ahmad.png"

const teamList = [
  {
    name: "Laith Alqaisi",
    role: "Lead",
    imageUrl: Laith,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Khalid Dabbour",
    role: "Mentor",
    imageUrl: Khalid,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Ahmad Mahmoud",
    role: "Co-Lead",
    imageUrl: Ahmad,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Tarek Abu Halimeh",
    role: "Lead Designer",
    imageUrl: Tarek,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Mortadha Aldayyeni",
    role: "Media",
    imageUrl: Murtadah,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Shahd Joudeh",
    role: "Media",
    imageUrl: Shahd,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Remas Mihyar",
    role: "Developer",
    imageUrl: Remas,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Firas Hussein",
    role: "Developer",
    imageUrl: Firas,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Zaid Al Hanatleh",
    role: "InfoSec",
    imageUrl: Zaid,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Abd alrhman Almukhtar",
    role: "Developer",
    imageUrl: Mukhtar,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Tasneem Alsasa",
    role: "Designer",
    imageUrl: Tasneem,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Ayah Abuhaltam",
    role: "Designer",
    imageUrl: Ayah,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Ahmad Jahaf",
    role: "InfoSec",
    imageUrl: Jahaf,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Musaab Alfalahi",
    role: "Developer",
    imageUrl: Musaab,
    githubUrl: "#",
    linkedinUrl: "#",
  },
];

const TeamMembers: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(teamList.length / cardsPerPage);

  useLayoutEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        x: `-${currentPage * 100}vw`,
        duration: 1.2,
        ease: "power2.inOut",
      });
    }
  }, [currentPage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const pages = Array.from({ length: totalPages }, (_, index) =>
    teamList.slice(index * cardsPerPage, index * cardsPerPage + cardsPerPage)
  );

  return (
    <div className="bg-gray-50 py-16 px-4 overflow-hidden w-screen">
      <h2 className="text-center font-semibold text-black-700 text-2xl lg:text-4xl mb-12">
        Team Members of <span className="text-[#4285F4] font-bold">G</span>
        <span className="text-[#EA4335] font-bold">D</span>
        <span className="text-[#FBBC04] font-bold">G</span>
        <span className="text-[#0F9D58] font-bold">&nbsp;A</span>
        <span className="text-[#4285F4] font-bold">S</span>
        <span className="text-[#EA4335] font-bold">U</span>
      </h2>

      <div className="relative h-[340px] w-full">
        <div className="overflow-hidden w-full h-full">
          <div
            ref={containerRef}
            className="flex h-full"
            style={{ width: `${totalPages * 100}vw` }}
          >
            {pages.map((group, i) => (
              <div
                key={i}
                className="w-screen flex justify-center items-center gap-8"
              >
                {group.map((member, j) => (
                  <ProfileCard key={j} {...member} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute  left-0 right-0 flex justify-center mt-6 gap-2">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === i ? "bg-blue-600 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
