import React, { useState } from "react";
import HiMenuAlt3 from "./MenuIcon";
import FaRegMoon from "./MoonIcon";
import FiSun from "./SunIcon";
import FaRegWindowClose from "./CloseIcon";
import { motion } from "framer-motion";

const animateIcon = {
  first: { x: 25, opacity: 0 },
  final: { x: 0, opacity: 1, transition: { duration: 0.75, type: "spring" } },
};

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  // Theme state is changing Headers, also the Icon
  const [theme, setTheme] = useState(false);
  const themeToggle = () => {
    setTheme(!theme);
    let m = document.getElementsByTagName("html")[0];
    m.classList.toggle("dark");
  };

  return (
    <>
      <nav className="navbar sticky z-10 top-0 w-full md:max-w-[1200px] md:mx-auto bg-apna-dark dark:bg-[#FBDF07] h-[8vh] flex justify-between px-4 items-center">
        <div className="logo text-apna-lime dark:text-apna-main font-labell font-bold text-[40px]">
          Sopan.
        </div>
        {/*Toggle Buttons */}
        <motion.div
          layout
          className="text-apna-light dark:text-apna-dark flex gap-6"
        >
          {/* Theme Changer Buttons */}
          <motion.div
            className="theme-btn"
            onClick={themeToggle}
            variants={animateIcon}
            initial="first"
            animate="final"
          >
            {!theme && <FaRegMoon />}
            {theme && <FiSun />}
          </motion.div>
          {/* Mobile Menu Toggle */}
          {!navOpen && (
            <motion.div
              className="menu"
              onClick={() => setNavOpen(!navOpen)}
              variants={animateIcon}
              initial="first"
              animate="final"
              exit="exit"
            >
              <HiMenuAlt3 />
            </motion.div>
          )}
          {navOpen && (
            <div
              className="close"
              onClick={() => setNavOpen(!navOpen)}
              variants={animateIcon}
              initial="first"
              animate="final"
              exit="exit"
            >
              <FaRegWindowClose />
            </div>
          )}
        </motion.div>

        {/* List Items for Mobile */}

        {navOpen && (
          <motion.div
            className="menu-items z-10 bg-apna-dark/90 dark:bg-[#F0E161]/90 absolute top-[8vh] right-0 h-[92vh] w-[70%]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            tr
          >
            <ul className="text-apna-light/80 dark:text-apna-dark text-center uppercase">
              <motion.li
                className=" w-[80%] mx-auto py-4  font-semibold border-b-2 border-apna-lime/60 dark:border-[#EB1D36]/70"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                home
              </motion.li>
              <motion.li
                className=" w-[80%] mx-auto py-4  font-semibold border-b-2 border-apna-lime/60 dark:border-[#EB1D36]/70"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                projects
              </motion.li>
              <motion.li
                className=" w-[80%] mx-auto py-4  font-semibold border-b-2 border-apna-lime/60 dark:border-[#EB1D36]/70"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                about
              </motion.li>
              <motion.li
                className=" w-[80%] mx-auto py-4  font-semibold "
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                contact
              </motion.li>
            </ul>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
