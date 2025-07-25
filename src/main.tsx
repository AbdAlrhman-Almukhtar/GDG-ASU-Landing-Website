import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import OurGrowth from "./layout/OurGrowth";
import Footer from "./layout/Footer";
import Events from "./layout/Events";
import FAQsection from "./components/FAQsection";
import VisionAndMission from "./layout/VisionAndMission";
import TeamMemebers from "./layout/TeamMemebers";
import Closing from "./components/Closing";
import Hero from "./components/Hero";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <OurGrowth />
    <Events />
    <VisionAndMission />
    <TeamMemebers />
    <FAQsection />
    <Closing />
    <Footer />
  </StrictMode>
);
