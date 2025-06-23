// import React from "react";
// import heroimg from "../assets/heroimg.png";
// import backgroundImage from "../assets/homeimg.webp";

// const Hero = () => {
//   return (
//     <>
//       <div
//         className="bg-black w-full lg:h-[700px] h-fit m-auto pt-[600px] lg:pt-[0px] lg:px-[150px] px-[20px] inline-block items-center lg:flex-row  lg:gap-5 gap-[50px] bg-cover bg-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div>
//           <h1 className="text-white uppercase text-[50px] font-bold">
//             we will build your dream
//           </h1>
//         </div>

//         <div className="w-[120px] h-[6px] bg-yellow-500 "></div>

//         <p className="text-white mb-10">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
//           eaque sit aut, corporis ex facere officiis eveniet repellendus ducimus
//           earum?
//         </p>

//         <button className="bg-yellow-500 hover:bg-white  hover:text-black rounded-lg text-black font-bold ">
//           READ MORE
//         </button>

//         <button
//           className="border-white hover:border-yellow-500 hover:text-yellow-500 border-2
//        px-10 py-3 rounded-lg text-white font-bold"
//         >
//           READ MORE
//         </button>

//         <div className="w-[40%] flex flex-col justify-end items-end ">
//           <img src={heroimg} alt="" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

// Above code is My Orginal code

import React from "react";
import heroimg from "../assets/heroimg.png";
import backgroundImage from "../assets/homeimg.webp";

const Hero = () => {
  return (
    <div
      className="w-full bg-cover bg-center min-h-screen flex items-center justify-center px-5 lg:px-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl py-20">
        {/* Left Content */}
        <div className="text-white flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
            We Will Build Your Dream
          </h1>
          <div className="w-24 h-1 bg-yellow-500"></div>
          <p className="text-lg max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            eaque sit aut, corporis ex facere officiis eveniet repellendus
            ducimus earum?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-500 hover:bg-white hover:text-black text-black font-bold !py-3 !px-6 rounded-lg transition  !mt-10">
              READ MORE
            </button>
            <button className="border-2 border-white hover:border-yellow-500 hover:text-yellow-500 text-white font-bold !py-3 !px-6 rounded-lg transition !mt-10">
              READ MORE
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mb-10 lg:mb-0">
          <img
            src={heroimg}
            alt="Hero"
            className="w-full max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
