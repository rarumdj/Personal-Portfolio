import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { logo } from "../assests";
import NavLinks from "./NavLinks";

// open: {
//     clipPath: `circle(1000px at 40px 40px)`,
//     transition: {
//       duration: 0.4,
//     },
//   },
//   closed: {
//     clipPath: `circle(30px at 40px 40px)`,
//     transition: {
//       duration: 0.4,
//       delay: 0.4,
//     },
//   },

const NavBar = () => {
  const ref = useRef();

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const variants = {
    open: {
      scale: 1,
      opacity: 1,
      x: 0,
    },
    closed: {
      scale: 0,
      opacity: 0,
      x: "-100%",
    },
  };

  if (click) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (click && ref.current && !ref.current.contains(e.target)) {
        setClick(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [click]);

  return (
    <nav ref={ref} className="top-0 left-0 right-0 md:fixed z-50">
      <div className="lg:px-28 px-12 md:pt-16 pt-10 relative z-10 flex justify-between">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <button onClick={handleClick}>
          <i className={click ? "gg-close" : "gg-menu-left"}></i>
        </button>
      </div>
      <motion.nav
        initial={false}
        animate={click ? "open" : "closed"}
        variants={variants}
        className={`px-12 absolute md:ml-auto md:right-16 md:top-12 md:w-80 md:h-96 w-screen h-screen top-0  bg-white shadow-lg flex justify-around flex-col`}
      >
        <ul className="md:text-xl md:leading-loose text-2xl leading-loose md:mt-12 mt-20 text-blue-600">
          {NavLinks.map((items, i) => (
            <li key={i}>
              <a href={items.url} onClick={() => setClick(false)}>
                {items.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="m-0">
          <span className="md:text-xl text-2xl text-gray-400 uppercase">
            Say Hello
          </span>
          <ul className="md:text-xl md:leading-loose text-2xl text-blue-600 leading-loose">
            <li>hello@davidj.dev</li>
          </ul>
        </div>
      </motion.nav>
    </nav>
  );
};

export default NavBar;
