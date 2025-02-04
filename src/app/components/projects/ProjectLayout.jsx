"use client"
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
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.005 }} // Keeps the image visible
      transition={{ duration: 2 }}
      variants={slideVariants}
    >
      {/* Background Image Container with 16:9 aspect ratio */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={img}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 -z-10"
            priority={id === 1} // Prioritize the first project
          />
        </div>
      </div>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center text-center px-8 max-w-2xl z-10">
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
