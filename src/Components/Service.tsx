import ServiceCardTemplete from "./ServiceCardTemplete";

// icons
import { FaGraduationCap } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { TbBuildingEstate } from "react-icons/tb";

const Service = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-10 my-12">
      <div>
        <h2 className="font-[700] text-[35px] text-gray-500 uppercase">
          more than just gym
        </h2>
        <p className="w-[55%]">
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-10">
        <ServiceCardTemplete
          icon={<FaGraduationCap />}
          title="State of the Art Facilities"
          description="Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
        />

        <ServiceCardTemplete
          icon={<RiTeamFill />}
          title="100's of Diverse Classes"
          description="Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id."
        />

        <ServiceCardTemplete
          icon={<TbBuildingEstate />}
          title="Expert and Pro Trainers"
          description="Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient."
        />
      </div>
    </section>
  );
};

export default Service;
