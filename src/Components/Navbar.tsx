const Navbar = () => {
  let navItemAnimation =
    "border-b-[2px] border-gray-20 hover:border-gray-500 transition-all duration-300 cursor-pointer ";
  return (
    <nav className=" bg-gray-20 py-6 px-10 max-w-[1400px] mx-auto md:flex hidden items-center justify-between w-full">
      <img src="/Logo.png" alt="logo" className="w-[140px]" />

      <ul className="flex items-center gap-8 capitalize text-[1.1rem] font-[400]">
        <li className={navItemAnimation}>
          <a href="#home">home</a>
        </li>
        <li className={navItemAnimation}>
          <a href="#Service">benefits</a>
        </li>
        <li className={navItemAnimation}>
          <a href="#Classes">our classes</a>
        </li>
        <li className={navItemAnimation}>
          <a href="#Testimonial">testimonial</a>
        </li>
        <li className={navItemAnimation}>
          <a href="#Contact">contact us</a>
        </li>
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
