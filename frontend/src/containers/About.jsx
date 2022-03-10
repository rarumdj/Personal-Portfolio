import React, { useEffect, useState } from "react";
import { client, urlFor } from "../client";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => setAbout(data));
  }, []);
  return (
    <section
      id="about"
      className="py-12 px-12 md:py-24 md:px-24 lg:px-44 xl:min-h-full min-h-screen"
    >
      {about.map((items, i) => (
        <div key={i} className="flex md:flex-row flex-col items-center gap-16">
          <div className="basis-2/4">
            <h1 className="mb-12 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-blue-600">
              {items.section}
            </h1>
            <p className="lg:text-base text-sm text-purple-900">
              {items.description}
            </p>
            <p className="mt-5 lg:text-base text-sm font-medium text-purple-900">
              {items.listTitle}
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-1 lg:text-base text-sm text-purple-900 ">
               {items.lists.map((list, i) => (
                <li key={i} className="flex flex-nowrap">
                <span>
                  <i className="gg-play-button text-purple-900"></i>
                </span>
                {list}
              </li>
               ))}
              
            </ul>
          </div>
          <div className="basis-2/4 flex">
            <div className="group relative">
              <img
                src={urlFor(items.greyImage)}
                alt=""
                className="group-hover:opacity-0 group-hover:hidden block opacity-100 transition-all ease-in-out durarion-500 object-contain"
              />
              <img
                src={urlFor(items.image)}
                alt=""
                className="opacity-0 hidden group-hover:block group-hover:opacity-100 transition-all ease-in-out durarion-500 object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
