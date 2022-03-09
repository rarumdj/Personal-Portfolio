import React from "react";
import Assign from "../assests/assign.js";
import { arrowUp, Fazako, gbwa, gitFork, nuthoop } from "../assests/index.js";

const WorkContainer = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
      <div className="group relative overflow-hidden min-w-full h-96 bg-red-900 rounded-md shadow-sm shadow-purple-400">
        <img
          src={nuthoop}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition-all ease-in-out duration-1000"
        />
        <div className="absolute bottom-0 p-6 -mb-32 group-hover:-mb-0 duration-500 transition-all ease-in-out w-full h-64 bg-purple-900 bg-opacity-80 flex flex-col space-y-7 rounded-md shadow-sm shadow-purple-400">
          <div className="flex flex-row justify-between">
            <div>
              <Assign fill="#fff" />
            </div>
            <div className="flex space-x-6">
              <a href="/">
                <img src={gitFork} alt="" className="w-6" />
              </a>
              <a href="/">
                <img src={arrowUp} alt="" className="w-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div className="space-y-4">
              <h1 className="font-bold text-3xl text-white">Nuthoop</h1>
              <p className="md:text-sm text-xs text-white">
                An Ecommerce platform to serve the nation
              </p>
            </div>
            <ul className="mt-auto flex space-x-2 text-xs text-purple-200 flex-wrap">
              <li>Figma</li>
              <li>React JS</li>
              <li>Laravel</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden min-w-full h-96 bg-red-900 rounded-md shadow-sm shadow-purple-400">
        <img
          src={gbwa}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition-all ease-in-out duration-1000"
        />
        <div className="absolute bottom-0 p-6 -mb-32 group-hover:-mb-0 duration-500 transition-all ease-in-out w-full h-64 bg-purple-900 bg-opacity-80 flex flex-col space-y-7 rounded-md shadow-sm shadow-purple-400">
          <div className="flex flex-row justify-between">
            <div>
              <Assign fill="#fff" />
            </div>
            <div className="flex space-x-6">
              <a href="/">
                <img src={gitFork} alt="" className="w-6" />
              </a>
              <a href="/">
                <img src={arrowUp} alt="" className="w-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div className="space-y-4">
              <h1 className="font-bold text-3xl text-white">GBWA</h1>
              <p className="md:text-sm text-xs text-white">
                Blockchain community platform built for empowering women
              </p>
            </div>
            <ul className="mt-auto flex space-x-2 text-xs text-purple-200 flex-wrap">
              <li>React JS</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden min-w-full h-96 bg-red-900 rounded-md shadow-sm shadow-purple-400">
        <img
          src={Fazako}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition-all ease-in-out duration-1000"
        />
        <div className="absolute bottom-0 p-6 -mb-32 group-hover:-mb-0 duration-500 transition-all ease-in-out w-full h-64 bg-purple-900 bg-opacity-80 flex flex-col space-y-7 rounded-md shadow-sm shadow-purple-400">
          <div className="flex flex-row justify-between">
            <div>
              <Assign fill="#fff" />
            </div>
            <div className="flex space-x-6">
              <a href="/">
                <img src={gitFork} alt="" className="w-6" />
              </a>
              <a href="/">
                <img src={arrowUp} alt="" className="w-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div className="space-y-4">
              <h1 className="font-bold text-3xl text-white">SpaceX</h1>
              <p className="md:text-sm text-xs text-white">
                A multidisciplinary software engineer with 3 years of
                progressive experience in designing, crafting and testing enterp
              </p>
            </div>
            <ul className="mt-auto flex space-x-2 text-xs text-purple-200 flex-wrap">
              <li>React JS</li>
              <li>Tailwind</li>
              <li>Laravel</li>
              <li>Tailwind</li>
              <li>Laravel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkContainer;
