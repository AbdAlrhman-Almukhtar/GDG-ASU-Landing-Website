import React from "react";

import GDGIcon from "../assets/images/gdg_logo_desktop.png";
import DiscordIcon from "../assets/icons/discord_icon.svg";
import InstagramIcon from "../assets/icons/instagram_icon.svg";
import GithubIcon from "../assets/icons/github_icon.svg";
import FacebookIcon from "../assets/icons/facebook_icon.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <img src={GDGIcon} alt="GDG Logo" className="w-100 h-15" />
        </div>
        <div className="flex flex-col items-start space-y-2">
          <h4 className="text-gray-700 font-semibold">Social</h4>
          <p className="text-gray-500">Upcoming Events </p>
          <p className="text-gray-500">Meet the Team</p>
          <p className="text-gray-500">Our Growth</p>
          <p className="text-gray-500">Our Vision </p>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <h4 className="text-gray-700 font-semibold">Social</h4>
          <p className="text-gray-500">#gdgasu</p>
          <div className="flex items-center gap-6 py-6">
            <img
              src={FacebookIcon}
              alt="Facebook"
              className="w-5 h-5 cursor-pointer"
            />
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="w-5 h-5 cursor-pointer"
            />
            <img
              src={GithubIcon}
              alt="Github"
              className="w-5 h-5 cursor-pointer"
            />
            <img
              src={DiscordIcon}
              alt="Discord"
              className="w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 px-28 text-xs text-gray-500">
        © GDG ASU Team 2025
      </div>
    </footer>
  );
};

export default Footer;
