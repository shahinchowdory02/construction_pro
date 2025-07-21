import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-white w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
          <h2 className="text-yellow-500 text-xl lg:text-2xl font-medium">
            CONTACT US
          </h2>
          <h1 className="text-black text-3xl lg:text-5xl font-bold uppercase">
            Reach us for any query
          </h1>
          <div className="w-[120px] h-[6px] bg-yellow-500"></div>

          <p className="text-3xl italic text-gray-200 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quasi?
            Illum architecto, temporibus minus ipsum quod facere exercitationem
            dicta neque!
          </p>
        </div>

        <div className="lg:w-[40%]  w-full flex flex-col justify-center items-start gap-6">
          <form
            className="flex flex-col justify-center items-center gap-4 w-full
           "
          >
            <input
              type="text"
              placeholder="Enter fullname"
              className="px-6  py-3 border-[2px] border-black rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Enter fullname"
              className="px-6  py-3 border-[2px] border-black rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Enter fullname"
              className="px-6  py-3 border-[2px] border-black rounded-lg w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
