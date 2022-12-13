import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function MainNavigation() {
  const [open, setOpen] = useState(false);

  return (
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
          <hr class="h-px bg-gray-200"></hr>
          <Link href="/">
            <li className="sm:hidden text-pink-600 text-lg tracking-wider py-4 px-3 sm:border-b-2 border-transparent  sm:hover:text-blue-500 transition hover:bg-white sm:hover:bg-transparent">
              Home
            </li>
          </Link>
          <Link href="/projects">
            <li className="text-pink-600 text-lg tracking-wider py-4 px-3 sm:border-b-2 border-transparent  sm:hover:text-blue-500 transition hover:bg-white sm:hover:bg-transparent">
              Projects
            </li>
          </Link>
          
          <Link href="/skills">
            <li className="text-pink-600 text-lg tracking-wider py-4 px-3 sm:border-b-2 border-transparent  sm:hover:text-blue-500 transition hover:bg-white sm:hover:bg-transparent">
              Skills
            </li>
          </Link>
          <Link href="/about">
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
