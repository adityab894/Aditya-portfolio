import React from "react";
import clsx from "clsx";

const ItemLayout = ({ children }) => {
  return (
    <div className={clsx("custom-bg p-8 rounded-xl flex items-center justify-center")}>
      {children}
    </div>
  );
};

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <ItemLayout>
        <div className="grid grid-cols-12 gap-8 w-full">
          <p className="col-span-12 text-center text-xl">About Us Section</p>
        </div>
      </ItemLayout>
    </section>
  );
};

export default AboutDetails;
