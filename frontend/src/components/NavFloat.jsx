import React from "react";
import { Assign } from "../assests";

const NavFloat = () => {
  return (
    <div className="absolute top-1/2 right-8">
      <div className="flex flex-col w-10 items-center space-y-2">
        <ul className="flex flex-col space-y-2">
          <li>
            <Assign fill="#000" />
          </li>
          <li>
            <Assign fill="#000" />
          </li>
          <li>
            <Assign fill="#000" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavFloat;
