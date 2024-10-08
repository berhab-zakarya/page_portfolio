import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/images/logoavatar.png";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import FontAwesome styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptop,
  faBookOpen,
  faChalkboardUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { ubuntu } from "../utils/Fonts";
config.autoAddCss = false;

const Sidebar = () => {
  // State to track which list item is active
  const [activeItem, setActiveItem] = useState<string | null>("about");

  // Function to toggle the active state of list items
  const handleSetActive = (item: string) => {
    setActiveItem(item === activeItem ? null : item);
  };

  return (
    <div className="sidebar  flex w-1/3 border-r-2 border-gray-200 flex-col">
      <div className="head-sidebar flex mt-[7px] py-2 px-2 border-b-2 border-gray-200 h-20 bg-white w-full items-center">
        <Image
          className="avatar  w-14 ml-2 rounded-full border border-[#8A51FF]"
          src={logo}

          alt="Picture of the author"
        />
      </div>
      <div className="content flex p-5 w-full h-full">
        <div className="box flex flex-col w-full">
          <ul>
            <li
              className={`item ${activeItem === "about" ? "active" : ""} ${ubuntu.className}  hover:bg-[#8e59f7f2] hover:border-[#8e59f7f2] `}
              onClick={() => handleSetActive("about")}
            >
              <FontAwesomeIcon
                icon={faUser}
                size="1x"
                style={{
                  color: activeItem === "about" ? "white" : "black",
                  marginRight: "8px",
                }}
              />{" "}
              About ME
            </li>
            <li
              className={`item ${activeItem === "work" ? "active" : ""} ${ubuntu.className} hover:bg-[#8e59f7f2] hover:border-[#8e59f7f2]`}
              onClick={() => handleSetActive("work")}
            >
              <FontAwesomeIcon
                icon={faLaptop}
                size="1x"
                style={{
                  color: activeItem === "work" ? "white" : "black",
                  marginRight: "8px",
                }}
              />
              WHAT AM I WORKING ON?
            </li>
            <li
              className={`item ${activeItem === "reading" ? "active" : ""} ${ubuntu.className} hover:bg-[#8e59f7f2] hover:border-[#8e59f7f2]`}
              onClick={() => handleSetActive("reading")}
            >
              <FontAwesomeIcon
                icon={faBookOpen}
                size="1x"
                style={{
                  color: activeItem === "reading" ? "white" : "black",
                  marginRight: "8px",
                }}
              />
              WHAT AM I READING ON?
            </li>
            <li
              className={`item ${activeItem === "learning" ? "active" : ""} ${ubuntu.className} hover:bg-[#8e59f7f2] hover:border-[#8e59f7f2] `}
              onClick={() => handleSetActive("learning")}
            >
              <FontAwesomeIcon
                icon={faChalkboardUser}
                size="1x"
                style={{
                  color: activeItem === "learning" ? "white" : "black",
                  marginRight: "8px",
                }}
              />
              WHAT AM I LEARNING NOW?
            </li>
            <li
              className={`item ${activeItem === "contact" ? "active" : ""} ${ubuntu.className} hover:bg-[#8e59f7f2] hover:border-[#8e59f7f2]`}
              onClick={() => handleSetActive("contact")}
            >
              <FontAwesomeIcon
                icon={faPhone}
                size="1x"
                style={{
                  color: activeItem === "contact" ? "white" : "black",
                  marginRight: "8px",
                }}
              />
              CONTACT ME
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
