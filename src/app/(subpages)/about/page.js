"use client";
import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import AboutDetails from "@/app/components/about";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />


      <div className="relative w-full min-h-[60vh] flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/3 sm:top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2">

          <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl lg:text-8xl text-accent">
            Aditya Bisht
          </h1>
          <p className="font-light text-foreground text-lg sm:text-xl md:text-2xl leading-relaxed mt-6 sm:mt-8">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>

      <div className="relative w-full flex justify-center -mt-10 sm:-mt-20">
        <AboutDetails />
      </div>
    </>
  );
}
