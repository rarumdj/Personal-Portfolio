import React, { useEffect, useState } from "react";
import WorkContainer from "../components/WorkContainer";
import { client, urlFor } from "../client";

const Work = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => setWorks(data));
  }, []);

  let portfolio = [];
  works.forEach((work) => portfolio = (work.works));

  return (
    <section
      id="projects"
      className="px-4 py-12 md:py-24 md:px-24 lg:px-44 xl:min-h-full min-h-screen bg-purple-50"
    >
      {works.map((title) => (
        <h1
          key={title}
          className="sm:px-0 px-4 mb-12 text-left lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-blue-600"
        >
          {title.section}
        </h1>
      ))}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
};

export default Work;
