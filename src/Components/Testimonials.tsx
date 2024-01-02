import { useEffect } from "react";

// icons
import { ClassType } from "@/Shared/Types";
import { FaQuoteLeft } from "react-icons/fa";

// images
import image1 from "/Testimonial/testimonial1.jpg";
import image3 from "/Testimonial/testimonial3.jpg";
import image4 from "/Testimonial/testimonial4.jpg";

// aos animaton
import "aos/dist/aos.css";
import AOS from "aos";

const Testimonials = () => {
  let TestimonialArray: Array<ClassType> = [
    {
      name: "Emily Grace Johnson",
      description:
        "Joining Lady Fitness was the best decision of my life! The supportive environment and expert guidance helped me transform not only my body but also my mindset. I've gained strength, confidence, and a whole new level of energy. Thank you, Lady Fitness, for helping me become the best version of myself!",
      image: image1,
    },
    {
      name: "Ava Elizabeth Thompson",
      description:
        "As a busy professional, Lady Fitness has become my sanctuary. The variety of classes not only helps me stay fit but also serves as a stress-reliever. The focus on overall wellness is evident, and the positive atmosphere makes every workout enjoyable. It's not just about the physical benefits; it's a holistic approach to health and happiness.",
      image: image3,
    },
    {
      name: "Isabella Marie Williams",
      description:
        "Lady Fitness isn't just about lifting weights; it's about lifting each other up. The camaraderie among members is heartwarming. The accountability partners and group classes make every workout feel like a team effort. I've made lifelong friends here, and we celebrate each other's victories, big or small. It's a community that truly cares about your success.",
      image: image4,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      id="Testimonial"
      className="w-full max-w-[1400px] mx-auto px-6 md:px-10 mb-12 md:mb-24">
      <div data-aos="fade-down">
        <h2 className="font-[700] text-[32px] md:text-[35px] text-gray-500 uppercase">
          testimonials
        </h2>
        <p className="w-full md:w-[55%] text-[0.9rem]">
          At EVO GYM, we take pride in delivering exceptional GYM accessories
          that resonate with our clients. Here is a collection of testimonials
          from individuals who have experienced the GYM products that defines
          EVO GYM:
        </p>
      </div>

      <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
        {TestimonialArray?.map((item: ClassType, index) => (
          <div
            data-aos="fade-right"
            className="flex items-center border text-center border-gray-100 relative rounded p-8"
            key={index}>
            <FaQuoteLeft className="text-gray-500 text-[40px] absolute top-[-5%] left-[5%]" />
            <div className="flex items-center justify-center flex-col gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-[120px] h-[120px] rounded-full object-cover"
              />
              <h3 className="font-[700] text-[20px]">{item.name}</h3>
              <p className="font-[400] text-[0.9rem] text-justify">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
