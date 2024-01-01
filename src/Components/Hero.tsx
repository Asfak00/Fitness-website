const Hero = () => {
  return (
    <main className="bg-white flex relative items-center justify-between w-full max-w-[1400px] mx-auto px-10">
      <img
        src="/EvolveText.png"
        alt="evotext/image"
        className=" absolute top-6 left-6 z-10"
      />
      <div className="w-[50%] flex flex-col gap-6 ">
        <h1 className="font-[700] z-30 text-[6.5rem] text-gray-500 uppercase leading-[1rem]">
          evogym
        </h1>
        <p className="text-[3rem] font-[400]">evolutionary fitness</p>
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
      <div>
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
