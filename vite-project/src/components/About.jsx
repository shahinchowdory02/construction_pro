import React from "react";

const About = () => {
  return (
    <section className="container w-[90%] lg:w-[80%] !m-auto py-16 !mt-6 !mb-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
          <h2 className="text-yellow-500 text-xl lg:text-2xl font-medium">
            WELCOME TO
          </h2>
          <h1 className="text-white text-3xl lg:text-5xl font-bold uppercase">
            Prime Construction
          </h1>
          <div className="w-[80px] h-[4px] bg-yellow-500 mx-auto lg:mx-0 mt-4"></div>

          <p className="text-lg lg:text-2xl italic text-gray-200 leading-relaxed text-center lg:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quasi?
            Illum architecto, temporibus minus ipsum quod facere exercitationem
            dicta neque!
          </p>
        </div>
        <div>
          <p className="text-white text-lg text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            tempore delectus, quo aut tenetur quia et voluptas qui, a
            praesentium excepturi eligendi quae pariatur. Amet, accusamus aut.
            Illum culpa tempore eaque suscipit earum magnam labore assumenda ad
            harum, voluptatibus veniam possimus esse eos vero totam! Expedita
            vero earum facilis odio! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dignissimos, vitae?
          </p>
          <button className="bg-yellow-500 hover:bg-white hover:text-black text-black font-bold !py-3 !px-6 rounded-lg transition  !mt-10">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
