import Image from "next/image";
import SocialIconsBar from "./social-icons-bar";

function Banner() {
  return (
    // <section className="">
    //   <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
    //     <SocialIconsBar />
    //     <div className="flex flex-col items-center mb-16 text-center 2xl:ml-24 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
    //       <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
    //         Hello I'm Paulius a{" "}
    //         <span className="font-semibold text-red-600">Web Developer</span>
    //       </h1>
    //       <p className="mb-8 leading-relaxed">
    //         Web developer from Kaunas, Lithuania. Creating web applications as
    //         my hobby and full time job.I create custom websites, complex systems
    //         to help businesses do better online.Worry not, I will make the
    //         process as easy and quick as possible.
    //       </p>
    //       <div className="flex justify-center">
    //         <button className="inline-flex px-6 py-2 ml-4 text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">
    //           Browse Projects
    //         </button>
    //       </div>
    //     </div>
    //     <div className="w-5/6 bg-purple-500 lg:max-w-lg lg:w-full md:w-1/2">
    //       <Image
    //         className="object-cover object-center rounded"
    //         src="/images/profile.png"
    //         alt="profile"
    //         width={600}
    //         height={600}
    //       />
    //     </div>
    //   </div>
    // </section>
    <div className="container mx-auto px-6 py-16 pt-28 text-center grid h-screen place-items-center">
      <div className="mx-auto max-w-lg">
        <p className="my-4 text-lg  text-pink-600 dark:text-white md:text-xl text-left">
          Hello! My name is
        </p>
        <h1 className="text-3xl font-bold dark:text-white md:text-4xl text-left">
          Paulius Taraškevičius.
        </h1>
        <p className="mt-6 text-3xl font-semibold text-zinc-500 dark:text-gray-300 text-left">
          Web developer from Lithuania
        </p>

        <p className="mt-6 text-lg text-left tracking-wider">
          Creating <span className="text-pink-600">web applications</span> as my
          hobby and full time job.I create custom websites, complex systems to
          help businesses do better online.
        </p>
        <SocialIconsBar />

        <div className="mx-auto mt-6 w-full max-w-sm rounded-md flex justify-center bg-transparent">
          <div className="flex flex-col md:flex-row">
            <button
              type="button"
              className="h-20 px-7 m-2  transform rounded-lg shadow-xl py-2 text-2xl text-center text-pink-600 transition-colors duration-300 hover:text-blue-500 focus:text-blue-500 focus:outline-none"
            >
              Projects
            </button>
            <button
              type="button"
              className="h-20 px-7 m-2 transform rounded-lg shadow-xl py-2 text-2xl text-center text-pink-600 transition-colors duration-300 hover:text-blue-500 focus:text-blue-500 focus:outline-none"
            >
              Experience
            </button>

            <button
              type="button"
              className="h-20 px-7 m-2 transdiv rounded-lg shadow-xl py-2 text-2xl text-center text-pink-600 transition-colors duration-300 hover:text-blue-500 focus:text-blue-500 focus:outline-none"
            >
              About
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
