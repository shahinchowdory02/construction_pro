import React from "react";

const Contact = () => {
  return (
    <section className=" ">
      <div id="contact" className="bg-white w-full !pt-12 !pb-12 ">
        <div className="container !m-auto flex flex-col lg:flex-row items-center justify-between gap-12 pb-48">
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
            <h2 className="text-yellow-500 text-xl lg:text-2xl font-medium">
              CONTACT US
            </h2>
            <h1 className="text-black text-3xl lg:text-5xl font-bold uppercase">
              Reach us for any query
            </h1>
            <div className="w-[120px] h-[6px] bg-yellow-500"></div>

            <p className="text-3xl italic text-gray-600 mt-[60px] ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
              quasi? Illum architecto, temporibus minus ipsum quod facere
              exercitationem dicta neque!
            </p>
          </div>

          <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
            <form
              className="flex flex-col justify-center items-center gap-4 w-full
           "
            >
              <input
                type="text"
                placeholder="Enter fullname"
                className="!px-2 py-3 border-[2px] border-black text-black rounded-lg w-full"
              />
              <input
                type="email"
                placeholder="Enter Email "
                className="!px-2 py-3 border-[2px] border-black text-black rounded-lg w-full"
              />
              <input
                type=""
                placeholder="Enter Mobile Number"
                className="!px-2 py-3 border-[2px] border-black text-black rounded-lg w-full"
              />

              <textarea
                name=""
                placeholder="Enter Your message"
                id=""
                rows="4"
                className="!px-2 py-3 border-[2px] border-black text-black rounded-lg w-full"
              ></textarea>
              <button className="bg-yellow-500 hover:bg-black !px-10 !py-4 text-black hover:text-white  font-bold rounded-lg w-full transition-all">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
