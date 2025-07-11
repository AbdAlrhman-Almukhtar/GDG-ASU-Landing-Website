import { useRef, useState, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import EventCard from "../components/EventCard";
import BridgingDesignWorkshopPoster from "../assets/images/posters/bridging_design_workshop.png";
import GameHackingWorkshopPoster from "../assets/images/posters/game_hacking_workshop.png";
import GitAndGithubStudyjamPoster from "../assets/images/posters/git_and_github_studyjam.png";
import Jpc8 from "../assets/images/posters/jpc8.png";
import DotsShape from "../assets/images/designes/shapes_dots_vertical.png";
import GreenStarShape from "../assets/images/designes/green_star_shape.png";
import SquareShapes from "../assets/images/designes/square_shapes.png"

export const eventList = [
  {
    title: "Bridging Design & {Code}",
    imageSrc: BridgingDesignWorkshopPoster,
    description:
      "A talk that connects the creative and technical sides of frontend development!",
    date: "Nov 26th 2024",
    instructor: "Ahmad Mahmmoud",
    onReadMore: () => alert("Redirecting to second event..."),
  },
  {
    title: "Game Hacking Workshop",
    imageSrc: GameHackingWorkshopPoster,
    description:
      "An interactive workshop! Explore tools like Cheat Engine, dnSpy, and MelonWiki.",
    date: "Dec 29, 2024",
    instructor: "Zaid Alhanaleh",
    onReadMore: () => alert("Redirecting to third event..."),
  },
  {
    title: "JPC 8",
    imageSrc: Jpc8,
    description:
      "JPC is a competitive programming contest (ICPC-style) exclusively for first-year students.he contest is 3 hours long, and each team must consist of 3 members.",
    date: "Jan 4, 2025",
    onReadMore: () => alert("Redirecting to third event..."),
  },
  {
    title: "git & Github StudyJam",
    imageSrc: GitAndGithubStudyjamPoster,
    description:
      "interactive online Study Jam to explore Git fundamentals, branching, merging, and real-world GitHub collaboration. Learn setup, best practices, and how to contribute to open-source projects.",
    date: "Mar 17, 2025",
    instructor: "Ahmad Mahmmoud",
    onReadMore: () => alert("Redirecting to third event..."),
  },
];

export const Events = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useLayoutEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        x: `-${currentIndex * 100}vw`,
        duration: 1.5,
        ease: "power2.inOut",
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % eventList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
<div className="relative w-full bg-gray-50 pt-18 pb-1 flex items-center justify-center overflow-visible">
  <img
    src={DotsShape}
    alt="Dotted grid"
    className="absolute -left-10 top-1/2 -translate-y-1/2 h-72 w-auto select-none pointer-events-none"
  />

  <h2 className="px-4 text-center font-semibold text-gray-700 text-2xl lg:text-4xl z-10">
    Events, Workshops &amp; Study Jams by{" "}
    <span className="text-[#4285F4] font-bold">G</span>
    <span className="text-[#EA4335] font-bold">D</span>
    <span className="text-[#FBBC04] font-bold">G</span>
    <span className="text-[#0F9D58] font-bold">&nbsp;A</span>
    <span className="text-[#4285F4] font-bold">S</span>
    <span className="text-[#EA4335] font-bold">U</span>
  </h2>

  <div className="absolute right-0 lg:right-24 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
    <img
      src={GreenStarShape}
      alt="Green star"
      className="w-22 md:w-26 lg:w-28"
    />
  </div>
</div>

      <div className="relative bg-gray-50 overflow-hidden w-screen h-150">
        <div className="w-screen h-full overflow-hidden">
          <div
            ref={containerRef}
            className="flex h-full"
            style={{ width: `${eventList.length * 100}vw` }}
          >
            {eventList.map((event, i) => (
              <div
                key={i}
                className="w-screen h-full flex justify-center items-center"
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 w-full flex justify-center gap-3">
          {eventList.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === i ? "bg-blue-600 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
          <img
    src={SquareShapes}
    alt=""
    className="absolute bottom-0 right-12 w-24 mt-24 pointer-events-none select-none"
  />
        </div>
      </div>
    </div>
  );
};
export default Events;