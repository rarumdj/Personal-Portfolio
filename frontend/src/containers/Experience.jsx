import React from "react";
import ExperienceHistory from "../components/ExperienceHistory";
import Skills from "../components/Skills";

const Experience = () => {
  return (
    <section id="skill" className="px-8 py-12 md:py-24 md:px-24 lg:px-44 min-h-screen section-gradient">
      <h1 className="mb-12 text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-white">
        Skills & Experiences
      </h1>
      <div className="grid sm:grid-cols-2 lg:gap-40 gap-10">
        <Skills />
        <ExperienceHistory />
      </div>
    </section>
  );
};

export default Experience;
