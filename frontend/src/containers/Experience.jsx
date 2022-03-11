import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client } from "../client";
import ExperienceHistory from "../components/ExperienceHistory";
import Skills from "../components/Skills";
import { AppWrap, MotionWrap } from "../wrapper";

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
      className="px-8 py-12 md:py-24 md:px-24 lg:px-44 xl:h-full lg:min-h-full min-h-screen section-gradient"
    >
      {experiences.map((title) => (
        <motion.h1
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          key={title.section}
          className="mb-12 text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-white"
        >
          {title.section}
        </motion.h1>
      ))}

      <div className="grid sm:grid-cols-2 lg:gap-40 gap-10">
        <Skills />
        <div className="w-full space-y-4">
          {workHistory.map((work, i) => (
            <ExperienceHistory
              key={i}
              year={work.year}
              role={work.role}
              company={work.company}
              desc={work.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Experience, ""),
  "skill",
  "relative",
  "hidden"
);
