import React from "react";

const Working = () => {
  return (
    <section id="working" className="w-full ">
      <div
        className="w-[90%] !m-auto
       lg:w-[80%] mx-auto flex flex-col items-center text-center gap-4 !pt-5 !pb-5 "
      >
        <h2 className="text-yellow-500 text-xl lg:text-2xl uppercase font-medium">
          Step by Step
        </h2>

        <h1 className="text-black text-3xl lg:text-5xl uppercase font-bold">
          How it's Working
        </h1>

        <div className="w-20 h-1 bg-yellow-500 mt-2"></div>
      </div>
    </section>
  );
};

export default Working;
