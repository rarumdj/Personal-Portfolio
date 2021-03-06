import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "../client";


const Skills = () => {
  const [stacks, setStacks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "stacks"]';

    client.fetch(query).then((data) => setStacks(data));
  }, []);

  return (
    <div className="w-full flex justify-center flex-wrap">
      {stacks.map((stack, i) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          key={i}
          className="p-4 sm:w-1/3"
        >
          <div
            className="flex h-20 w-20 rounded-full"
            style={{ background: `${stack.bgColor}` }}
          >
            <img src={urlFor(stack.icon)} alt="html" className="m-auto" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
