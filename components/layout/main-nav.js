import { useState } from "react";
import Image from "next/image";

function MainNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-screen lg:px-40 sm:px-10 px-2 sm:flex justify-center items-center border-b-1  border-gray-600 z-10">
      <div
        className="flex px-4 justify-between sm:py-0 pb-1"
        onClick={() => setOpen(!open)}
      >
        <button
          className="text-blue-300 text-3xl sm:hidden block focus:outline-none"
          id="navIcon"
        >
          &#9776;
        </button>
      </div>

      <Image className="hidden absolute left-0 my-2 mx-12 md:block"  src="/images/logo.png" alt="youtube" width={42} height={42} />

      <ul
        className={` sm:flex cursor-pointer ${open ? "" : "hidden "}`}
        id="navContent"
      >
        <li className="lg:text-xl py-4 px-6 sm:border-b-2 border-transparent sm:hover:text-orange-600  sm:hover:underline underline-offset-4 transition duration-100 transform hover:scale-110 hover">
          Home
        </li>
        <li className="lg:text-xl py-4 px-6 sm:border-b-2 border-transparent  sm:hover:text-orange-600 sm:hover:underline underline-offset-4 transition duration-100 transform hover:scale-110 hover">
          About
        </li>
        <li className="lg:text-xl py-4 px-6 sm:border-b-2 border-transparent  sm:hover:text-orange-600 sm:hover:underline underline-offset-4 transition duration-100 transform hover:scale-110 hover">
          Projects
        </li>
        <li className="lg:text-xl py-4 px-6 sm:border-b-2 border-transparent  sm:hover:text-orange-600 sm:hover:underline underline-offset-4 transition duration-100 transform hover:scale-110 hover">
          Services
        </li>
        <li className="block md:hidden lg:hidden lg:text-xl py-4 px-6 sm:border-b-2 border-transparent  sm:hover:text-blue-300 transition duration-100 transform hover:scale-110 hover">
          Contact
        </li>
      </ul>

      <button className="hidden absolute right-0 my-2 mx-12 md:block bg-white font-semibold py-2 px-4 hover:text-orange-600 ">
        Contact Me
      </button>
    </nav>
  );
}

export default MainNavigation;
