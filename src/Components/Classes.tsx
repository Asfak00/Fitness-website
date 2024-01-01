import { ClassType } from "@/Shared/Types";

// images
import image1 from "/image1.png";
import image2 from "/image2.png";
import image3 from "/image3.png";
import image4 from "/image4.png";
import image5 from "/image5.png";
import image6 from "/image6.png";

const Classes = () => {
  let classes: Array<ClassType> = [
    {
      name: "Weight Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image1,
    },
    {
      name: "Yoga Classes",
      image: image2,
    },
    {
      name: "Ab Core Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image3,
    },
    {
      name: "Adventure Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image4,
    },
    {
      name: "Fitness Classes",
      image: image5,
    },
    {
      name: "Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image6,
    },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-10 my-24 bg-primary-100 py-12">
      <div>
        <h2 className="font-[700] text-[35px] text-gray-500 uppercase">
          our classes
        </h2>
        <p className="w-[55%] text-[0.9rem]">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>
      </div>

      <div className="w-full overflow-x-scroll mt-12 flex items-center gap-6">
        {classes.map((item: ClassType, index) => (
          <div className="w-full h-full relative group" key={index}>
            <div className="w-[400px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full "
              />
            </div>

            <div className=" opacity-0 group-hover:opacity-100 absolute top-0 left-0 bg-primary-300 w-full transition-all flex duration-300 h-full  items-center justify-center flex-col p-6 text-center">
              <h3 className="font-[700] text-[20px] text-gray-500 uppercase mt-4">
                {item.name}
              </h3>
              <p className="mt-4 text-[0.9rem]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
