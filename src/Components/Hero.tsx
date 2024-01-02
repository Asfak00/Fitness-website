import { useEffect } from "react";

// import aos animation
import "aos/dist/aos.css";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main
      id="home"
      className="bg-white flex relative md:items-center justify-between w-full max-w-[1400px] mx-auto md:px-10 px-6 xs:flex-row flex-col">
      <img
        data-aos="fade-down"
        src="/EvolveText.png"
        alt="evotext/image"
        className=" w-[350px] md:w-[600px] absolute top-6 left-3 md:left-6 "
      />
      <div
        data-aos="fade-right"
        className="w-full md:w-[50%] flex flex-col gap-5 md:gap-6 pt-24 md:pt-0">
        <h1 className="font-[700] text-[4.5rem] md:text-[6.5rem] text-gray-500 uppercase leading-[0rem] md:leading-[1rem]">
          evogym
        </h1>
        <p className="md:text-[3rem] text-[2.1rem] font-[400]">
          evolutionary fitness
        </p>
        <p className="w-[80%]">
          Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
          Studios to get the Body Shapes That you Dream of.. Get Your Dream Body
          Now.
        </p>
        <div className="flex items-center gap-4 mt-4">
          <button className="py-2 px-6 bg-secondary-500 capitalize text-gray-500 rounded hover:bg-white hover:border-secondary-500 duration-300 transition-all border ">
            join now
          </button>
          <button className="py-2 px-6 border border-secondary-500 capitalize text-gray-500 rounded hover:bg-secondary-500 transition-all duration-300 cursor-pointer ">
            learn more
          </button>
        </div>
      </div>
      <div data-aos="fade-left">
        <img
          src="/HomePageGraphic.png"
          alt="hero/image"
          className="w-[550px]"
        />
      </div>
    </main>
  );
};

export default Hero;
