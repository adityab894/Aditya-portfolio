import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectLayout = ({ id, title, des, img, link, direction }) => {
  const slideVariants = {
    hidden: { opacity: 0, x: direction === "left" ? -200 : 200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="relative w-full h-screen flex items-center justify-center text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8 }}
      variants={slideVariants}
    >
      {/* Background Image */}
      <Image
        src={img}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute -z-10"
        priority={id === 1} // Prioritize the first project
      />

      {/* Content */}
      <div className="text-center px-8 max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-6">{des}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg"
        >
          Check Live Site
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectLayout;
