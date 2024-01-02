import { useEffect } from "react";

// aos animation
import "aos/dist/aos.css";
import AOS from "aos";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section
      id="Contact"
      className="w-full  max-w-[1400px] mx-auto px-6 md:px-10 ">
      <div data-aos="fade-down">
        <h2 className="font-[700] text-[32px] md:text-[35px] text-gray-500 uppercase leading-[2.3rem]">
          <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
        </h2>
        <p className="w-full md:w-[55%] text-[0.9rem]">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
          leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </p>
      </div>

      {/* form and image */}
      <div className="w-full flex flex-col md:gap-0 gap-12 xs:flex-row justify-between mt-16 relative pb-12 md:pb-24">
        <form className="w-full md:w-[55%]">
          <div className="flex flex-col gap-4">
            <input
              data-aos="fade-up"
              data-aos-duration="1000"
              type="text"
              placeholder="Name"
              className="border text-gray-500 border-primary-300 outline-primary-300 rounded-lg p-4"
            />
            <input
              data-aos="fade-up"
              data-aos-duration="1500"
              type="email"
              placeholder="Email"
              className="border text-gray-500 border-primary-300 outline-primary-300 rounded-lg p-4"
            />

            <textarea
              data-aos="fade-up"
              data-aos-duration="2000"
              name="message"
              id="message"
              cols={20}
              rows={5}
              placeholder="Message"
              className="border text-gray-500 border-primary-300 outline-primary-300 rounded-lg p-4"></textarea>
            <button
              data-aos="fade-up"
              data-aos-duration="2500"
              className="bg-secondary-500 text-gray-500 mt-6 py-3 px-6 rounded w-[50%] md:w-[25%]">
              Send Message
            </button>
          </div>
        </form>

        {/* image */}
        <div data-aos="fade-left" className="w-full md:w-[40%] z-20">
          <img
            src="/ContactUs/ContactUsPageGraphic.png"
            alt="contact/image"
            className="w-full"
          />
        </div>

        <img
          data-aos="fade-left"
          src="/EvolveText.png"
          alt="image"
          className=" xs:w-[500px] md:w-auto absolute bottom-0 right-[-2%] md:right-[-2%] z-10"
        />
      </div>
    </section>
  );
};

export default ContactUs;
