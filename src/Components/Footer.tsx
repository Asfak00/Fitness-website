const Footer = () => {
  return (
    <footer className="w-full max-w-[1400px] mx-auto px-10 bg-primary-100 flex justify-between py-8 mt-12">
      <div className="w-[40%] flex gap-4 flex-col">
        <img src="/Logo.png" alt="logo/image" className="w-[150px]" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, at.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
          incidunt.
        </p>
        <p className=" capitalize">&copy; Evogym all right reserved</p>
      </div>

      {/* links */}
      <div className="flex flex-col gap-2">
        <h2 className="font-[700] text-[20px] text-gray-500 uppercase">Link</h2>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
      </div>

      {/* contact */}
      <div className="flex gap-2 flex-col">
        <h2 className="font-[700] text-[20px] text-gray-500 uppercase">
          Contact
        </h2>
        <p className="">Tempus metus mattis risus volutpat egestas.</p>
        <p>(333)425-6825</p>
      </div>
    </footer>
  );
};

export default Footer;
