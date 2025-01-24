"use client";
import React from "react";
import ProjectLayout from "./ProjectLayout";

const ProjectList = ({ projects }) => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {projects.map((project, index) => (
        <div key={project.id} className="snap-start">
          <ProjectLayout
            {...project}
            direction={index % 2 === 0 ? "left" : "right"} // Alternating directions
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
