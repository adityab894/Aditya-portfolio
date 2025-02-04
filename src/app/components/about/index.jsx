"use client"
import React from "react";
import clsx from "clsx";
import ItemLayout from "./ItemLayout";



const AboutDetails = () => {
  return (
    <section className="w-full flex justify-center">
      <ItemLayout>
        <div className="grid grid-cols-12 gap-4 w-full">
          <h2 className="text-xl md:text-2xl text-left md:text-center capitalize whitespace-nowrap col-span-12">
            About Me
          </h2>
          <p className="col-span-12 text-center text-lg md:text-xl leading-relaxed break-words px-4">
            My journey in web development is powered by an array of mystical tools and languages, with JavaScript casting the core of my enchantments. I wield frameworks like React.js and Next.js with precision, crafting seamless portals (websites) that connect realms (users) across the digital universe. The ancient arts of the Jamstack empower me to create fast, secure, and dynamic experiences, while my design skills ensure every creation is not only functional but visually captivating. Join me as I continue to explore new spells and technologies to shape the future of the web.
          </p>
        </div>
      </ItemLayout>
    </section>
  );
};

export default AboutDetails;
