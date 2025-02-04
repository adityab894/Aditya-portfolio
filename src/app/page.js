"use client"
import Image from "next/image";
import bg from "../../public/background/home-background.png"
import Wizard from "./components/models/wizard";
import Navigation from "./components/navigation";
import RenderModel from "./components/RenderModel";

// import RenderModel from "./components/RenderModel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative ">
    <Image src={bg} alt ="background-image" fill className="-z-50 w-full h-full object-cover object-center opacity-30"/>
  
  <div className="w-full h-screen ">
    { /* Navigation and 3d model */}
    <Navigation />
    <RenderModel>
      <Wizard />
    </RenderModel>
  </div>
    </main>
  );
}
