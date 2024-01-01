const Navbar = () => {
  return (
    <nav className=" bg-gray-20 py-6 px-6 max-w-[1400px] mx-auto flex items-center justify-between w-full">
      <img src="/Logo.png" alt="logo" className="w-[140px]" />

      <ul className="flex items-center gap-8 capitalize text-[1.1rem] font-[400]">
        <li>home</li>
        <li>benefits</li>
        <li>our classes</li>
        <li>contact us</li>
      </ul>

      <div className="flex items-center gap-5">
        <button className="text-[1.1rem] capitalize">sign in</button>
        <button className="py-2 px-6 bg-secondary-500 capitalize text-gray-500 rounded ">
          become a member
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
