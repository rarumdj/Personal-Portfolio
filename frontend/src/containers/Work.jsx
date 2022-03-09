import React from "react";
import WorkContainer from "../components/WorkContainer";

const Work = () => {
  return (
    <section id="projects" className="px-4 py-12 md:py-24 md:px-24 lg:px-44 min-h-screen bg-purple-50">
      <h1 className="sm:px-0 px-4 mb-12 text-left lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-blue-600">
        Some Things I’ve Built
      </h1>
      <WorkContainer />
    </section>
  );
};

export default Work;
