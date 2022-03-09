import React from "react";
import { dave, me } from "../assests";

const About = () => {
  return (
    <section id="about" className="py-12 px-12 md:py-24 md:px-24 lg:px-44 min-h-screen">
      <div className="flex lg:flex-row flex-col gap-16">
        <div className="basis-1/2">
          <h1 className="mb-12 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-blue-600">
            The Creative Me
          </h1>
          <p className="md:text-base text-sm text-purple-900">
            A multidisciplinary software engineer with 3 years of progressive
            experience in designing, crafting and testing enterprise software
            solutions which help businesses leverage the power of technology to
            massively multiply their productivity, efficiency and sales.
          </p>
          <p className="mt-5 md:text-base text-sm font-medium text-purple-900">
            Here are few of my abilities:
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-1 md:text-base text-sm text-purple-900 ">
            <li className="flex flex-nowrap">
              <span>
                <i className="gg-play-button text-purple-900"></i>
              </span>
              Frontend
            </li>
            <li className="flex flex-nowrap">
              <span>
                <i className="gg-play-button text-purple-900"></i>
              </span>
              Backend
            </li>
            <li className="flex flex-nowrap">
              <span>
                <i className="gg-play-button text-purple-900"></i>
              </span>
              Database Management
            </li>
            <li className="flex flex-nowrap">
              <span>
                <i className="gg-play-button text-purple-900"></i>
              </span>
              UI/UX Design
            </li>
          </ul>
        </div>
        <div className="basis-1/2 h-full flex">
          <div className="group relative">
            <img
              src={me}
              alt=""
              className="group-hover:opacity-0 group-hover:hidden block opacity-100 transition-all ease-in-out durarion-500 object-contain"
            />
            <img
              src={dave}
              alt=""
              className="opacity-0 hidden group-hover:block group-hover:opacity-100 transition-all ease-in-out durarion-500 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
