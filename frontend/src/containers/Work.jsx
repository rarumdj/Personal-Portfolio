import React, { useEffect, useState } from "react";
import WorkContainer from "../components/WorkContainer";
import { client, urlFor } from "../client";
import { AppWrap, MotionWrap } from "../wrapper";
import { motion } from "framer-motion";

const Work = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => setWorks(data));
  }, []);

  let portfolio = [];
  works.forEach((work) => (portfolio = work.works));

  return (
    <section
      id="projects"
      className="px-4 py-12 md:py-24 md:px-24 lg:px-44 xl:h-full lg:h-screen sm:h-full h-screen bg-purple-50"
    >
      {works.map((title) => (
        <motion.h1
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          key={title}
          className="sm:px-0 px-4 mb-12 text-left lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-blue-600"
        >
          {title.section}
        </motion.h1>
      ))}

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-6"
      >
        {portfolio?.map((work, i) => (
          <WorkContainer
            key={i}
            image={urlFor(work.image)}
            title={work.title}
            desc={work.description}
            workLogo={urlFor(work.icon)}
            stacks={work.tags}
            link={work.viewLink}
            gitlink={work.gitLink}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(MotionWrap(Work, ""), "projects", "relative", "hidden");
