import React from "react";
import Image from "next/image";
// import photo from "../assets/images/zakarya.jpg";
import { lora, ubuntu, ubuntu_normal, ubuntuBold } from "../utils/Fonts";
import photo from "../assets/svg/hand_coding.svg";
import Social from "../components/Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about container  mx-auto flex overflow-hidden  justify-between">
      <div className="intro-texts flex flex-col max-w-2xl">
        <h6 className={`${ubuntuBold.className} text-xl font-bold mb-2`}>
          Hello, I am
        </h6>
        <h2 className={`${lora.className} mt-2 font-bold text-6xl`}>
          BERHAB ZAKARYA
        </h2>
        <div className="texts mt-10">
          <p className={`${ubuntu_normal.className} `}>
            I am Zakarya Berhab, born on July 27, 2002, and currently 23 years
            old. I am a dedicated software engineer with a passion for
            developing innovative solutions.
          </p>
          <br />
          <p className={`${ubuntu_normal.className} `}>
            I have a strong background in web development, with expertise in
            Django for backend development and React.js for building modern,
            dynamic frontends. I am also proficient in Flutter with Dart,
            enabling me to create cross-platform mobile applications.
          </p>
          <br />
          <p className={`${ubuntu_normal.className} `}>
            In addition to web and mobile development, I have experience in
            machine learning. I hold a Nano Degree from Google in Android
            Development and specialize in Android programming using Java and
            Kotlin, always adhering to best practices to ensure clean, efficient
            code.
          </p>
          <br />
        </div>
        <div className="socials flex">
          <Social platform="facebook" />
          <Social platform="instagram" />
          <Social platform="linkedin" />
          <Social platform="github" />
        </div>
        <div className="resume flex mt-8 items-center cursor-pointer">
          <FontAwesomeIcon icon={faFileDownload} className="mr-2" />
          <p className={`${ubuntuBold} text-base font-bold`}>Download Resume</p>
        </div>
      </div>
      <div className="image">
        <Image
          className="avatar ml-2 border-[#8A51FF] max-h-[500px] "
          src={photo}
          width={1000}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default About;
