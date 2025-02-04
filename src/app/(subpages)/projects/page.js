"use client";
import ProjectList from "../../components/projects/Index";
import { projectsd } from "../../data";


export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Project List */}
      <ProjectList projects={projectsd} />
    </div>
  );
};