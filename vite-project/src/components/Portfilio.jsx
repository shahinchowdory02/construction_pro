import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";

const Portfilio = () => {
  return (
    <div>
      <div
        className="w-[90%] !m-auto
       lg:w-[80%] mx-auto flex flex-col items-center text-center gap-4 !pt-5 !pb-5 "
      >
        <h2 className="text-yellow-500 text-xl lg:text-2xl uppercase font-medium">
          Portfilio
        </h2>

        <h1 className="text-white text-3xl lg:text-5xl uppercase font-bold">
          Our Best Portfilios
        </h1>

        <div className="w-20 h-1 bg-yellow-500 mt-2"></div>
      </div>

      <div className="w-full m-auto grid lg:grid-cols-4 grid-cols-1">
        <img
          src={project1}
          alt=" project image "
          className="h-[250px] w-full"
        />

        <img
          src={project2}
          alt=" project image "
          className="h-[250px] w-full"
        />

        <img
          src={project3}
          alt=" project image "
          className="h-[250px] w-full"
        />
        <img
          src={project4}
          alt=" project image "
          className="h-[250px] w-full"
        />
        <img
          src={project5}
          alt=" project image "
          className="h-[250px] w-full"
        />
        <img
          src={project6}
          alt=" project image "
          className="h-[250px] w-full"
        />
        <img
          src={project7}
          alt=" project image "
          className="h-[250px] w-full"
        />
        <img
          src={project8}
          alt=" project image "
          className="h-[250px] w-full"
        />
      </div>
    </div>
  );
};

export default Portfilio;
