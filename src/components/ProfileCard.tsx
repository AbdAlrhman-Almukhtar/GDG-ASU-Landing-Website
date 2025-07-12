import React from 'react';
import GithubLogo from "../assets/icons/github_icon.svg";
import LinkedinLogo from "../assets/icons/linkedin_icon.svg";
import ProfilePlaceHolder from '../assets/images/logos/profile_placeholder.jpg'
interface ProfileCardProps {
  name: string;
  role: string;
  imageUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  imageUrl,
  githubUrl,
  linkedinUrl,
}) => {
  return (
    <div className="flex flex-col items-center bg-white text-black-700 p-6 rounded-2xl shadow-lg w-[260px] h-[230]"
    >
      
      <div className="w-36 h-36 overflow-hidden rounded-xl shadow-md mb-4">
        <img src={imageUrl || ProfilePlaceHolder} alt={name} className="w-full h-full object-cover" />
      </div>

      <h2 className="text-lg text-black-700"
      >{name}</h2>
      <p className="text-md text-black-700">{role}</p>

      <div className="mt-3 flex justify-center space-x-4">
      {githubUrl && (
          <a
            href={githubUrl}
            className="w-8 h-8 flex justify-center items-center text-white rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubLogo} alt="GitHub" className="w-6 h-6" />
          </a>
        )}
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            className="w-8 h-8 flex justify-center items-center text-white rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinLogo} alt="LinkedIn" className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;