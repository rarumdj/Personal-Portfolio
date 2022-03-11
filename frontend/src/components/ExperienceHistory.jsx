import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import React from "react";

const ExperienceHistory = ({ role, company, year, desc }) => {
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-start items-start"
        data-tip
        data-for={role}
      >
        <div className="mr-4 font-bold lg:text-lg md:text-base text-white">
          {year}
        </div>
        <div className="flex-1">
          <div className="flex flex-col justify-start items-start mr-4">
            <h1 className="font-bold lg:text-lg md:text-base text-white">
              {role}
            </h1>
            <p className="font-medium lg:text-base text-sm text-white">
              {company}
            </p>
          </div>
        </div>
      </motion.div>
      <ReactTooltip
        id={role}
        effect="solid"
        arrowColor="#fff"
        className="skills-tooltip"
      >
        {desc}
      </ReactTooltip>
    </>
  );
};

export default ExperienceHistory;
