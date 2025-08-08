// import React, { useState } from "react";
// import { Header } from ".components/Header";

// const Header = () => {
//   const [isMenuopen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuopen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };
// };

// const Header = () => {
//   const navItems = [
//     {
//       link: "Home",
//       path: "home",
//     },
//     {
//       link: "About",
//       path: "about",
//     },
//     {
//       link: "Services",
//       path: "services",
//     },
//     {
//       link: "Projects",
//       path: "projects",
//     },
//     {
//       link: "Contact",
//       path: "contact",
//     },
//   ];

//   return (
//     <nav className="w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
//       <h1 className="text-black md:text-4xl text-3xl font-rubik">
//         Prime <span className="text-yellow-500 italic">Structures</span>
//       </h1>

//       <ul className="lg:flex justify-center items-center gap-6 hidden">
//         {navItems.map(({ link, path }) => (
//           <Link
//             key={path}
//             className="text-black uppercase forn-bold cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]"
//             target={path}
//             spy={true}
//             offset={-100}
//             smooth={true}
//           >
//             {link}
//           </Link>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Projects", path: "projects" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className="w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <h1 className="text-black md:text-4xl text-3xl font-bold font-rubik">
        Prime <span className="text-yellow-500 italic">Structures</span>
      </h1>
      <ul className="lg:flex justify-center items-center gap-6 hidden ">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-black uppercase font-bold cursor-pointer !py-2 !px-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]"
            tos={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      <button className="bg-yellow-500 hover:bg-black hover:text-white text-black  !px-10 !py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden uppercase">
        reach us
      </button>

      {/* mobile menu starts here*/}

      <div
        className="flex justify-between items-center lg:hidden mt-3"
        onClick={toggleMenu}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-yellow-500 text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-yellow-500 text-3xl cursor-pointer" />
          )}
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-yellow-500 p-4 absolute top-[72px] left-0`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-semibold cursor-pointer p-2  rounded-lg hover:text-white hover:bg-black w-full text-center "
              to={path}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
