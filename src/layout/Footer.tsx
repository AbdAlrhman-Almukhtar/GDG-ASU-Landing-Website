import React from "react";

import GDGIcon from "../assets/images/logos/gdg_logo_desktop.png";
import DiscordIcon from "../assets/icons/discord_icon.svg";
import InstagramIcon from "../assets/icons/instagram_icon.svg";
import GithubIcon from "../assets/images/logos/github.svg";
import FacebookIcon from "../assets/icons/facebook_icon.svg";
import LinkedinIcon from "../assets/icons/linkedin_icon.svg";


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-18">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex flex-col space-y-2 -ml-16">
          <img src={GDGIcon} alt="GDG Logo" className="w-92 h-14" />
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="text-lg text-gray-700">Quick Links</h4>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            › Upcoming Events
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            › Meet the Team
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            › Our Growth
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            › Our Vision
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="text-lg text-gray-700">Social</h4>
          <span className="text-gray-500">#gdgasu</span>
          <div className="flex items-center space-x-6 pt-2 pr-16">
            <a href="https://web.facebook.com/GDSCASU">
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="w-5 h-5 cursor-pointer"
              />
            </a>
            <a href="https://www.instagram.com/gdgasu/">
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="w-5 h-5 cursor-pointer"
              />
            </a>
            <a href="https://github.com/GDG-ASU">
              <img
                src={GithubIcon}
                alt="GitHub"
                className="w-5 h-5 cursor-pointer"
              />
            </a>
            <a href="https://discord.gg/QNNdghqw">
              <img
                src={DiscordIcon}
                alt="Discord"
                className="w-5 h-5 cursor-pointer"
              />
            </a>
             <a href="https://www.linkedin.com/company/gdgasu">
              <img
                src={LinkedinIcon}
                alt="Discord"
                className="w-5 h-5 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 pl-17 text-left text-xs text-gray-500">
        © GDG ASU Team 2025
      </div>
    </footer>
  );
};

export default Footer;
