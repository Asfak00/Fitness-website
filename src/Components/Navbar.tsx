const Navbar = () => {
  let navItemAnimation =
    "border-b-[2px] border-gray-20 hover:border-gray-500 transition-all duration-300 cursor-pointer ";
  return (
    <nav className=" bg-gray-20 py-6 px-6 max-w-[1400px] mx-auto flex items-center justify-between w-full">
      <img src="/Logo.png" alt="logo" className="w-[140px]" />

      <ul className="flex items-center gap-8 capitalize text-[1.1rem] font-[400]">
        <li className={navItemAnimation}>home</li>
        <li className={navItemAnimation}>benefits</li>
        <li className={navItemAnimation}>our classes</li>
        <li className={navItemAnimation}>contact us</li>
      </ul>

      <div className="flex items-center gap-5">
        <button className={`${navItemAnimation} text-[1.1rem] capitalize`}>
          sign in
        </button>
        <button className="py-2 px-6 bg-secondary-500 capitalize text-gray-500 rounded ">
          become a member
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
