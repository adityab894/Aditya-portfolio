import Image from "next/image";
import bg from "../../../public/background/home-background.png"
// import Rendermodel from '@rendermodel'; 
// import Staff from "@staff";
import ProjectList from "../components/projects/Index";
import { projectsd } from "../data";
import RenderModel from "../components/rendermodel";
import Staff from "../components/models/staff";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative ">
    <Image src={bg} alt ="background-image" fill className="-z-50 w-full h-full object-cover object-center opacity-30"/>
  
    <ProjectList projects={projectsd}/>
    
    <div className="flex items-center justify-center fixed top-20 left-0 h-screen">
    <RenderModel>
      <Staff/>
    </RenderModel>
    </div>
  
    </main>
  );
}
