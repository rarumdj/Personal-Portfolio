import React, { useEffect, useState } from "react";
import { client } from "../client";
import NavFloat from "./NavFloat";
import Social from "./Social";

const Header = () => {
  const [header, setHeader] = useState([]);

  useEffect(() => {
    const query = '*[_type == "header"]';

    client.fetch(query).then((data) => setHeader(data));
  }, []);
  return (
    
    <header className="px-12 md:py-24 md:px-24 lg:px-44 xl:relative">
      <div className="flex flex-col md:flex-row h-full max-w-screen-xl items-center mt-0 mb-12 mx-0 md:m-0">
       {header.map((items, i) => (
        <div key={i} className="flex flex-col w-full py-12">
          <h6 className="mb-3 text-2xl text-white font-medium">
           {items.greet}
          </h6>
          <h1 className="mb-3 lg:text-6xl md:text-5xl text-3xl font-extrabold text-blue-400">
            {items.name}
          </h1>
          <h1 className="mb-3 sm:text-4xl md:text-5xl lg:text-6xl text-3xl font-extrabold text-gray-300">
            {items.title}
          </h1>
          <p className="text-white md:text-base text-sm sm:w-3/5">
            {items.description}
          </p>
        </div>
       ))}
        
      </div>
      <Social />
      <NavFloat />

    </header>
  );
};

export default Header;
