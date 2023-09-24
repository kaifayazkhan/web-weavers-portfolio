"use client"
import { useState } from "react";
import MobileMenu from "./MobileMenu";
export default function Hamburger() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex lg:hidden overflow-hidden">
      {/* Hamburger Icon */}
      <button className="flex-cols gap-2 cursor-pointer relative z-30" onClick={() => handleOpen()}>
        <span className={`w-8 h-[3px] transition-all duration-300 ease-out  bg-black ${isOpen ? "transform -rotate-45 translate-y-0 relative top-[28%] bg-white" : ""}`}></span>
        <span className={`w-8 h-[3px] transition-all duration-300 ease-out  bg-black ${isOpen ? " hidden" : ""}`}></span>
        <span className={`w-8 h-[3px] transition-all duration-300 ease-out  bg-black ${isOpen ? "transform rotate-45 translate-y-0 relative bottom-1/2 bg-white" : ""}`}></span>
      </button>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} />
    </div>
  )
}