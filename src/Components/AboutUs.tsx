import { useEffect } from "react";

// aos animation
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section
      id="About"
      className="w-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between mt-28 xs:items-start md:items-center xs:flex-row flex-col-reverse">
      <div
        data-aos="fade-right"
        className="w-full flex items-center justify-center md:w-[40%] md:mt-0 mt-24">
        <img
          src="/AboutUs/BenefitsPageGraphic.png"
          alt="about/image"
          className="w-[300px] xs:w-[400px] md:w-[500px]"
        />
      </div>

      <div data-aos="fade-left" className="w-full md:w-[50%] relative">
        <img
          data-aos="fade-down"
          data-aos-duration="1600"
          src="/AbstractWaves.png"
          alt="abstruck image"
          className="w-[80px] md:w-[100px] absolute top-[-10%] md:top-[-15%] left-[-10%]"
        />
        <h2 className="font-[700] text-[32px] md:text-[35px]">
          MILLIONS OF HAPPY MEMBERS GETTING{" "}
          <span className="text-primary-500">FIT</span>
        </h2>
        <p className="my-5 text-justify">
          Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
          ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
          vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
          sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
          pretium sapien proin integer nisl. Felis orci diam odio.
        </p>
        <p className="mb-5 text-justify">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>

        <button className="py-2 px-6 bg-secondary-500 capitalize text-gray-500 rounded hover:bg-white hover:border-secondary-500 duration-300 transition-all border mt-8">
          join now
        </button>
        <img
          data-aos="fade-up"
          data-aos-duration="1600"
          src="/Sparkles.png"
          alt="spark image"
          className="w-[70px] md:w-[100px] absolute bottom-[-4%] md:bottom-[-12%] right-[20%] md:right-[40%]"
        />
      </div>
    </section>
  );
};

export default AboutUs;
