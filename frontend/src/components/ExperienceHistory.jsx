import React from "react";

const ExperienceHistory = ({ role, company, year, desc }) => {
  return (
    <div className="flex justify-start items-start">
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
    </div>
  );
};

export default ExperienceHistory;
