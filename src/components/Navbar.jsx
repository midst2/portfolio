import React, {  useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-200 mix-blend-difference"
      >
        <div className="main-container py-6 flex justify-between item-center">
          <img src={logo} alt="Logo" className="h-10 grayscale-100" />
          <div className="flex flex-col gap-1.5 cursor-pointer" onClick={()=> setMenuOpen(!menuOpen) }>
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center mix-blend-difference 
            ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}`}
            ></span>
            <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center
            ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}></span>
          </div>
        </div>
      </motion.nav>

      {/*  full screen*/}
      <div
        className={`fixed z-100 inset-0 bg-black 
        text-white flex flex-col items-center justify-center gap-8 transition-all duration-300 ${menuOpen? "translate-y-0" : "translate-y-full"}`}
      >
        <Link to="/" className="menu-link" onClick={()=> setMenuOpen(!menuOpen)} >Home</Link>
          
        <Link to="project" className="menu-link" onClick={()=> setMenuOpen(!menuOpen)}>Project</Link>
          
        <Link to="" className="menu-link" onClick={()=> setMenuOpen(!menuOpen)}>Contact</Link>
          
      </div>
    </>
  );
};
export default Navbar;
