"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { ubuntuBold } from "./utils/Fonts";
import Button from "./components/Button";
import About from "./pages/About";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="app bg-white w-full min-h-screen relative flex">
      <Sidebar />
      <div className="content container w-full">
        <div className="head-sidebar px-6 mt-[1px]  border-b-2 border-gray-200 h-20  bg-white w-full flex justify-between items-center">
          <p
            className={`${ubuntuBold.className} text-2xl tracking-wider font-bold uppercase `}
          >
            About ME
          </p>
          <Button />
        </div>
        <div className="container px-6 pt-8 mx-auto mt-28">
          <About />
        </div>
      </div>
    </div>
  );
}
