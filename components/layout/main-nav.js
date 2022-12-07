import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function MainNavigation() {
  const [open, setOpen] = useState(false);

  return (
    // <nav className="fixed top-0 items-center justify-center w-screen px-2 lg:px-40 sm:px-10 sm:flex z-30">
    //   <div
    //     className="flex justify-between px-4 pb-1 sm:py-0"
    //     onClick={() => setOpen(!open)}
    //   >
    //     <button
    //       className="block text-3xl text-blue-300 sm:hidden focus:outline-none"
    //       id="navIcon"
    //     >
    //       &#9776;
    //     </button>
    //   </div>
    //   <Link
    //     href="#"
    //     className="absolute left-0 hidden mx-12 my-2 md:block cursor-pointer"
    //   >
    //     <Image src="/images/logo.png" alt="youtube" width={42} height={42} />
    //   </Link>

    //   <ul
    //     className={` sm:flex cursor-pointer ${open ? "" : "hidden "}`}
    //     id="navContent"
    //   >
    //     {" "}
    //     <Link href="#">
    //       <li className="px-6 py-4 transition duration-100 transform border-transparent lg:text-xl sm:border-b-2 sm:hover:text-red-500 sm:hover:underline underline-offset-4 hover:scale-110 hover">
    //         Home
    //       </li>
    //     </Link>
    //     <Link href="/posts">
    //       <li className="px-6 py-4 transition duration-100 transform border-transparent lg:text-xl sm:border-b-2 sm:hover:text-red-500 sm:hover:underline underline-offset-4 hover:scale-110 hover">
    //         Projects
    //       </li>
    //     </Link>
    //     <Link href="#">
    //       <li className="px-6 py-4 transition duration-100 transform border-transparent lg:text-xl sm:border-b-2 sm:hover:text-red-500 sm:hover:underline underline-offset-4 hover:scale-110 hover">
    //         Skills
    //       </li>
    //     </Link>
    //     <Link href="#">
    //       <li className="px-6 py-4 transition duration-100 transform border-transparent lg:text-xl sm:border-b-2 sm:hover:text-red-500 sm:hover:underline underline-offset-4 hover:scale-110 hover">
    //         Services
    //       </li>
    //     </Link>
    //     <li className="block px-6 py-4 transition duration-100 transform border-transparent md:hidden lg:hidden lg:text-xl sm:border-b-2 hover:scale-110 hover">
    //       Contact
    //     </li>
    //   </ul>
    //   <button className="absolute right-0 hidden px-4 py-2 mx-12 my-2 bg-white border rounded-md md:block lg:text-xl hover:text-red-500">
    //     Contact Me
    //   </button>
    // </nav>

    <>
      <nav className="fixed top-0 w-screen sm:px-12 px-2 sm:flex justify-end items-center bg-white z-20">
        <div
          className="flex px-4 justify-between sm:py-0 pb-1"
          onClick={() => setOpen(!open)}
        >
          <Link
            href="/"
            className="absolute top-0 left-0 hidden mx-12 md:block cursor-pointer"
          >
            <Image
              src="/images/logo.png"
              alt="youtube"
              width={48}
              height={48}
            />
          </Link>

          <button
            className="text-blue-300 text-3xl sm:hidden block focus:outline-none"
            id="navIcon"
          >
            &#9776;
          </button>

          <div className="flex float-right sm:absolute right-0 top-0 px-3 py-3">
            {" "}
            <Image
              src="/images/day_light/moon.png"
              alt="youtube"
              width={32}
              height={32}
            />
          </div>

        </div>

        <ul
          className={`sm:flex cursor-pointer ${open ? "" : "hidden "}`}
          id="navContent"
        >
          <Link href="/posts/projects">
            <li className="text-pink-600 text-lg tracking-wider py-4 px-3 sm:border-b-2 border-transparent  sm:hover:text-blue-500 transition hover:bg-white sm:hover:bg-transparent">
              Projects
            </li>
          </Link>
          <Link href="/">
            <li className="text-pink-600 text-lg tracking-wider py-4 px-3 sm:border-b-2 border-transparent  sm:hover:text-blue-500 transition hover:bg-white sm:hover:bg-transparent">
              Experience
            </li>
          </Link>
          <Link href="/">
            <li className="text-pink-600 text-lg tracking-wider py-4 px-3 sm:border-b-2 border-transparent  sm:hover:text-blue-500 transition hover:bg-white sm:hover:bg-transparent">
              About
            </li>
          </Link>
          <Link href="/">
            <li className="text-pink-600 text-lg tracking-wider py-4 px-3 sm:border-b-2 border-transparent  sm:hover:text-blue-500 transition hover:bg-white duration-200 sm:hover:bg-transparent">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default MainNavigation;
