// icons
import { ClassType } from "@/Shared/Types";
import { FaQuoteLeft } from "react-icons/fa";

// images
import image1 from "/testimonial1.jpg";
import image3 from "/testimonial3.jpg";
import image4 from "/testimonial4.jpg";

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
  return (
    <section className="w-full max-w-[1400px] mx-auto px-10 mb-24">
      <div>
        <h2 className="font-[700] text-[35px] text-gray-500 uppercase">
          testimonials
        </h2>
        <p className="w-[55%]">
          At EVO GYM, we take pride in delivering exceptional GYM accessories
          that resonate with our clients. Here is a collection of testimonials
          from individuals who have experienced the GYM products that defines
          EVO GYM:
        </p>
      </div>

      <div className="w-full grid grid-cols-3 gap-8 mt-16">
        {TestimonialArray?.map((item: ClassType, index) => (
          <div
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
