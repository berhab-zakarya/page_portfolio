import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Import specific icons
interface SocialProps {
  platform: "facebook" | "instagram" | "linkedin" | "github";
}
const Social: React.FC<SocialProps> = ({ platform }) => {
  // Map the platform name to corresponding icon
  const icons = {
    facebook: faFacebook,
    instagram: faInstagram,
    linkedin: faLinkedin,
    github: faGithub,
  };

  // Determine the correct icon to display
  const selectedIcon = icons[platform];

  return (
    <div className="font-bold py-3 px-3 mr-2 bg-[#8A51FF] border border-black rounded-md cursor-pointer text-white hover:bg-[#502a9df2] hover:border-[#502a9df2]">
      {selectedIcon && (
        <FontAwesomeIcon icon={selectedIcon} className="text-white" size="lg" />
      )}
    </div>
  );
};

export default Social;
