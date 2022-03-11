import React from "react";
import NavLinks from "./NavLinks";

const NavFloat = ({ active }) => {
  return (
    <div className="absolute top-1/2 right-8 hidden md:block">
      <div className="flex flex-col w-10 items-center space-y-2">
        <div className="flex flex-col space-y-4 ">
          {NavLinks.map((links, i) => (
            <a
              key={links + i}
              href={`#${links.url}`}
              style={active === links.url ? { backgroundColor: "#313BAC" } : {}}
              className={`w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-500 transition-all ease-in-out duration-200`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavFloat;
