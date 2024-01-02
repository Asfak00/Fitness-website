// icons
import { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const MobileNav = () => {
  // menu active state
  const [menuActive, setMenuActive] = useState(false);

  // nav item animation
  let navItemAnimation =
    "border-b-[2px] border-primary-100 hover:border-gray-500 transition-all duration-300 cursor-pointer ";

  return (
    <>
      <nav className=" bg-gray-20 py-6 px-6 flex md:hidden items-center justify-between w-full">
        <img src="/Logo.png" alt="logo" className="w-[140px]" />
        <RiMenu3Fill
          className="text-[1.7rem] cursor-pointer"
          onClick={() => setMenuActive(true)}
        />
      </nav>

      {/* side bar */}
      <div
        className={`${
          menuActive && "!translate-x-[0px]"
        } translate-x-[900px] w-[80%] xs:w-[50%] md:hidden py-4 px-8 h-[100vh] transition-all duration-300 fixed top-0 right-0 bg-primary-100 z-50`}>
        <div className="w-full flex items-end justify-end ">
          <RiCloseFill
            className="text-[1.7rem] cursor-pointer "
            onClick={() => setMenuActive(false)}
          />
        </div>

        <ul className="flex flex-col gap-8 mt-8 capitalize text-[1.1rem] font-[400]">
          <li className={navItemAnimation}>
            <a href="#home">home</a>
          </li>
          <li className={navItemAnimation}>
            <a href="#Service">benefits</a>
          </li>
          <li className={navItemAnimation}>
            <a href="#Classes">our classes</a>
          </li>
          <li className={navItemAnimation}>
            <a href="#Testimonial">testimonial</a>
          </li>
          <li className={navItemAnimation}>
            <a href="#Contact">contact us</a>
          </li>
        </ul>

        <div className="flex flex-col gap-5 mt-12">
          <button className={`${navItemAnimation} text-[1.1rem] capitalize`}>
            sign in
          </button>
          <button className="py-2 px-6 bg-secondary-500 capitalize text-gray-500 rounded ">
            become a member
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
