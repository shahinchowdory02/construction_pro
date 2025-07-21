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

const Working = () => {
  return (
    <section>
      {/* Section Title */}
      <div className="w-full bg-white">
        <div className="text-center !mb-4 ">
          <h2 className="text-yellow-500 text-2xl lg:text-2xl uppercase font-medium ">
            STEP BY STEP
          </h2>
          <h1 className="text-black text-3xl lg:text-5xl uppercase font-bold text-center ">
            HOW IT'S WORKING
          </h1>
          <div className="w-20 h-1 bg-yellow-500 !m-auto text-center !mt-3"></div>
        </div>

        <div
          className="] 
        "
        >
          <div className="max-w-7xl grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-[20px] !m-auto mt-[30pxs]">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-5 border-2 border-yellow-500 rounded-lg p-6"
              >
                <div className="size-[70px] bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer flex items-center justify-center text-2xl hover:text-white transition-all duration-300 !mt-3">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase">
                  {service.title}
                </h3>
                <p className="text-[16px] text-center text-gray-500 !mb-3">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
