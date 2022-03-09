import React from "react";

const Header = () => {
  return (
    <header className="px-12 md:py-24 md:px-24 lg:px-44">
      <div className="flex flex-col md:flex-row h-full max-w-screen-xl items-center mt-0 mb-12 mx-0 md:m-0">
        <div className="flex flex-col w-full py-12">
          <h6 className="mb-3 text-2xl text-white font-medium">
            👋 Hello, I am
          </h6>
          <h1 className="mb-3 lg:text-6xl md:text-5xl text-3xl font-extrabold text-blue-400">
            David Johnson
          </h1>
          <h1 className="mb-3 sm:text-4xl md:text-5xl lg:text-6xl text-3xl font-extrabold text-gray-300">
            A Creative Software <br />
            Engineer
          </h1>
          <p className="text-white md:text-base text-sm sm:w-3/5">
            I’m a software engineer specializing in building (and occasionally 
            designing) exceptional digital experiences.{" "}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
