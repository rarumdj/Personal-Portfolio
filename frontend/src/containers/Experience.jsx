import React, { useEffect, useState } from "react";
import { client } from "../client";
import ExperienceHistory from "../components/ExperienceHistory";
import Skills from "../components/Skills";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => setExperiences(data));
  }, []);

  let workHistory = [];
  experiences.forEach((experience) => (workHistory = experience.works));
  return (
    <section
      id="skill"
      className="px-8 py-12 md:py-24 md:px-24 lg:px-44 xl:min-h-full min-h-screen section-gradient"
    >
      {experiences.map((title) => (
        <h1
          key={title.section}
          className="mb-12 text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-white"
        >
          {title.section}
        </h1>
      ))}

      <div className="grid sm:grid-cols-2 lg:gap-40 gap-10">
        <Skills />
        <div className="w-full space-y-4">
        {workHistory.map((work, i) => (
          <ExperienceHistory key={i} year={work.year} role={work.role} company={work.company} desc={work.desc}  />

        ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
