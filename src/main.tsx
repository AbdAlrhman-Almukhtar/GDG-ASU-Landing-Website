import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import OurGrowth from "./components/OurGrowth";
import Footer from "./layout/Footer";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <OurGrowth/>
    <Footer/>
  </StrictMode>
);
