import React from "react";

// import {
//   FaTools,
//   FaBuilding,
//   FaDraftingCompass,
//   FaFileAlt,
//   FaCouch,
//   FaHeadset,
// }
// from "react-icons/fa";

// const services = [
//   {
//     icon: <FaBuilding />,
//     title: "Building Renovation",
//     description: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <FaTools />,
//     title: "Construction Services",
//     description: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <FaDraftingCompass />,
//     title: "Design & Planning",
//     description: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <FaFileAlt />,
//     title: "Documentation",
//     description: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <FaCouch />,
//     title: "Interior Design",
//     description: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <FaHeadset />,
//     title: "Customer Support",
//     description: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="w-full bg-white">
//       <div
//         className="w-[90%] !m-auto
//        lg:w-[80%] mx-auto flex flex-col items-center text-center gap-4 !pt-5 !pb-5 "
//       >
//         <h2 className="text-yellow-500 text-xl lg:text-2xl uppercase font-medium">
//           Special Offer
//         </h2>

//         <h1 className="text-black text-3xl lg:text-5xl uppercase font-bold">
//           Our Best Services
//         </h1>

//         <div className="w-20 h-1 bg-yellow-500 mt-2"></div>

//       </div>

// const Services = () => {
//   return (
//     <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-500">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//           OUR BEST SERVICES
//         </h2>
//         <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2"></div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group"
//           >
//             <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-500 text-white text-2xl mb-4 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
//               {service.icon}
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
//               {service.title}
//             </h3>
//             <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

//     </section>
//   );
// };

// export default Services;

import {
  FaTools,
  FaBuilding,
  FaDraftingCompass,
  FaFileAlt,
  FaCouch,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBuilding />,
    title: "Building Renovation",
    description:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaTools />,
    title: "Construction Services",
    description:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Design & Planning",
    description:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaFileAlt />,
    title: "Documentation",
    description:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaCouch />,
    title: "Interior Design",
    description:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    description:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 bg-white !pt-12 !pb-12">
      {/* Section Title */}
      <div className="text-center !mb-4 ">
        <h2 className="text-yellow-500 text-2xl lg:text-2xl uppercase font-medium ">
          special offer
        </h2>
        <h1 className="text-black text-3xl lg:text-5xl uppercase font-bold text-center ">
          our best services
        </h1>
        <div className="w-20 h-1 bg-yellow-500 !m-auto text-center !mt-3"></div>
      </div>

      {/* Services */}
      <div className="max-w-11/12 grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-[20px] !m-auto ">
        {services.map((service, index) => (
          <div
            className="flex justify-center items-start gap-5 p-8  !mb-10"
            key={index}
          >
            <div className="w-[80px] border-2 border-yellow-500 hover:bg-yellow-500 rounded-lg flex items-center justify-center h-14 text-black text-3xl mb-4 transition-all duration-300">
              {service.icon}
            </div>
            <div className="flex flex-col justify-center items-start gap-3 !-mt-1 ">
              <h3 className="text-xl font-bold mb-2 text-black ">
                {service.title}
              </h3>
              <p className="text-[18px] ">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
