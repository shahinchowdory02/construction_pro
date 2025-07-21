import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

const clients = [
  {
    description:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: client1,
    name: "Alex Parker",
    post: "Constructor",
  },
  {
    title: "Construction Services",
    description:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: client2,
    name: "Drew james",
    post: "Architect",
  },
  {
    title: "Design & Planning",
    description:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: client3,
    name: "Drew james",
    post: "Constructor",
  },
  {
    title: "Documentation",
    description:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: client3,
    name: "Drew james",
    post: "Constructor",
  },
  {
    title: "Interior Design",
    description:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: client3,
    name: "Drew james",
    post: "Architect",
  },
  {
    title: "Customer Support",
    description:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: client3,
    name: "Drew james",
    post: "Constructor",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl !m-auto text-center">
      {/* Section Title */}
      <div className="w-full bg-[#2d2a2a]">
        <div className="text-center !mb-4">
          <h2 className="text-yellow-500 text-2xl lg:text-2xl uppercase font-medium ">
            STEP BY STEP
          </h2>
          <h1 className="text-black text-3xl lg:text-5xl uppercase font-bold text-center">
            HOW IT'S WORKING
          </h1>
          <div className="w-20 h-1 bg-yellow-500 !m-auto text-center !mt-3"></div>
        </div>

        <div
          className=" 
        "
        >
          <div className="w-[90%] lg:w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-8 mt-[30px] ">
            {clients.map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="border-2 border-white hover:bg-yellow-500 !pb-[100px] !pt-[30px]">
                  <p className="text-white hover:text-black text-lg text-center">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-[5px] ">
                  <img
                    className="!mt-[-50px]"
                    src={service.image}
                    alt="client-image"
                  />
                  <h2 className=" text-white text-[27px] font-semibold uppercase">
                    {service.name}
                  </h2>
                  <h2 className="text-yellow-500 text-[22px]">
                    {service.post}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
