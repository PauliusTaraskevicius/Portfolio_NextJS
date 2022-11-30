import { useEffect, useState } from "react";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

function MainNavigation() {
  const [open, setOpen] = useState(false);
  const [navColor, setNavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 5
      ? setNavColor("rgb(254, 226, 226)")
      : setNavColor("transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <nav
      style={{ backgroundColor: navColor }}
      className="fixed top-0 items-center justify-center w-screen px-2 lg:px-40 sm:px-10 sm:flex"
    >
      <div
        className="flex justify-between px-4 pb-1 sm:py-0"
        onClick={() => setOpen(!open)}
      >
        <button
          className="block text-3xl text-blue-300 sm:hidden focus:outline-none"
          id="navIcon"
        >
          &#9776;
        </button>
      </div>

      <Image
        className="absolute left-0 hidden mx-12 my-2 md:block"
        src="/images/logo.png"
        alt="youtube"
        width={42}
        height={42}
      />

      <ul
        className={` sm:flex cursor-pointer ${open ? "" : "hidden "}`}
        id="navContent"
      >
        {" "}
        <Link
          href="/"
          activeClass="active"
          onClick={scrollToTop}
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          delay={0}
        >
          <li className="px-6 py-4 transition duration-100 transform border-transparent lg:text-xl sm:border-b-2 sm:hover:text-red-500 sm:hover:underline underline-offset-4 hover:scale-110 hover">
            Home
          </li>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          delay={0}
        >
          <li className="px-6 py-4 transition duration-100 transform border-transparent lg:text-xl sm:border-b-2 sm:hover:text-red-500 sm:hover:underline underline-offset-4 hover:scale-110 hover">
            Skills
          </li>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={10}
          duration={1000}
          delay={0}
        >
          <li className="px-6 py-4 transition duration-100 transform border-transparent lg:text-xl sm:border-b-2 sm:hover:text-red-500 sm:hover:underline underline-offset-4 hover:scale-110 hover">
            Projects
          </li>
        </Link>
        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          delay={0}
        >
          <li className="px-6 py-4 transition duration-100 transform border-transparent lg:text-xl sm:border-b-2 sm:hover:text-red-500 sm:hover:underline underline-offset-4 hover:scale-110 hover">
            Services
          </li>
        </Link>
        <li className="block px-6 py-4 transition duration-100 transform border-transparent md:hidden lg:hidden lg:text-xl sm:border-b-2 hover:scale-110 hover">
          Contact
        </li>
      </ul>

      <button className="absolute right-0 hidden px-4 py-2 mx-12 my-2 bg-white border rounded-md md:block lg:text-xl hover:text-red-500">
        Contact Me
      </button>
    </nav>
  );
}

export default MainNavigation;
