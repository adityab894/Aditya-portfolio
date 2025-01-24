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
}




// import Image from "next/image";
// import bg from "../../../../public/background/home-background.png";
// import RenderModel from "../../components/rendermodel";
// import Staff from "../../components/models/staff";

// {/* Staff Animation */}
// <div className="absolute bottom-10 right-10 z-50">
// <RenderModel>
//   <Staff />
// </RenderModel>
// </div>