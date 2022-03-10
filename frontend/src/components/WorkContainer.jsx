import React from "react";
import { arrowUp, gitFork } from "../assests/index.js";

const WorkContainer = ({
  workLogo,
  image,
  title,
  desc,
  stacks,
  link,
  gitlink,
}) => {
  return (
    <div className="group relative overflow-hidden min-w-full h-80 bg-red-900 rounded-md shadow-sm shadow-purple-400">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition-all ease-in-out duration-1000"
      />
      <div className="absolute bottom-0 p-6 -mb-32 group-hover:-mb-0 duration-500 transition-all ease-in-out w-full h-64 bg-purple-900 bg-opacity-80 flex flex-col space-y-7 rounded-md shadow-sm shadow-purple-400">
        <div className="flex flex-row justify-between">
          <div>
            <img src={workLogo} alt="" className="w-8" />
          </div>
          <div className="flex space-x-6">
            <a href={gitlink} target="_blank" rel="noopener noreferrer">
              <img src={gitFork} alt="" className="w-6" />
            </a>

            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={arrowUp} alt="" className="w-6" />
            </a>
            
          </div>
        </div>
        <div className="flex flex-col h-full">
          <div className="space-y-4">
            <h1 className="font-bold text-3xl text-white">{title}</h1>
            <p className="md:text-sm text-xs text-white">{desc}</p>
          </div>
          <ul className="mt-auto flex space-x-2 text-xs text-purple-200 flex-wrap">
            {stacks?.map((stack, i) => (
              <li key={i}>{stack}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkContainer;
