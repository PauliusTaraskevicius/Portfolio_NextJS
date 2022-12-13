import Image from "next/image";
import Link from "next/link";
import Footer from "../layout/footer";
import SocialIconsBar from "./social-icons-bar";

function Banner() {
  return (
    <div className="container mx-auto px-6 pt-28 text-center grid h-screen place-items-center z-20">
      <div className="mx-auto max-w-lg">
        <p className="my-4 text-lg  text-pink-600  md:text-xl text-left">
          Hello! My name is
        </p>
        <h1 className="text-3xl font-bold  md:text-4xl text-left">
          Paulius Taraškevičius.
        </h1>
        <p className="mt-6 text-3xl font-semibold text-zinc-500 text-left">
          Web developer from Lithuania
        </p>

        <p className="mt-6 text-lg text-left tracking-wider">
          Creating <span className="text-pink-600">web applications</span> as my
          hobby and full time job.I create custom websites, complex systems to
          help businesses do better online.
        </p>
        <SocialIconsBar />

        <div className="mx-auto mt-6 w-full max-w-sm rounded-md flex justify-center">
          <div className="flex flex-col md:flex-row">
            <Link href="/projects">
              <button
                type="button"
                className="h-20 px-7 m-2 rounded-lg shadow-xl py-2 bg-white text-2xl text-center text-pink-600 transition-colors hover:text-blue-500 focus:text-blue-500 focus:outline-none"
              >
                Projects
              </button>
            </Link>
            <Link href="/skills">
              <button
                type="button"
                className="h-20 px-7 m-2 rounded-lg shadow-xl py-2 bg-white text-2xl text-center text-pink-600 transition-colors hover:text-blue-500 focus:text-blue-500 focus:outline-none"
              >
                Skills
              </button>
            </Link>
            <Link href="/about">
              <button
                type="button"
                className="h-20 px-7 m-2  rounded-lg shadow-xl py-2 bg-white text-2xl text-center text-pink-600 transition-colors hover:text-blue-500 focus:text-blue-500 focus:outline-none"
              >
                About
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Banner;
