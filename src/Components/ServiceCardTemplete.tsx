type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const ServiceCardTemplete = (props: Props) => {
  return (
    <div className="w-full border border-gray-100 rounded flex items-center justify-center text-center flex-col p-10 gap-4">
      <p className="text-[30px] bg-primary-100 rounded-full p-4 border border-gray-100">
        {props.icon}
      </p>
      <h2 className="font-[700] text-[20px] capitalize">{props.title}</h2>
      <p className="text-[0.9rem] text-justify">{props.description}</p>
      <button className="py-1 px-4 border border-primary-500 capitalize text-primary-500 rounded cursor-pointer ">
        learn more
      </button>
    </div>
  );
};

export default ServiceCardTemplete;
