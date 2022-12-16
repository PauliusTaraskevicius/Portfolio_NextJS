import Image from "next/image";

import Footer from "../layout/footer";

function Skills() {
  return (
    <section className="container mx-auto px-6 pt-15 text-center grid h-screen place-items-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-10">
          <h1 className="textColorChange text-3xl font-bold dark:text-white md:text-4xl">
            Technologies
          </h1>
          <p className="mt-6 text-3xl font-semibold text-zinc-500 dark:text-gray-300">
            I use to build web applications.
          </p>
        </div>
        <div className="textColorChange flex flex-wrap justify-center text-center">
          <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
            <Image
              className=" mb-3 inline-block"
              src="/images/skills/javascript.png"
              alt="profile"
              width={50}
              height={50}
            />
            <p className="leading-relaxed tracking-wider">Javascript</p>
          </div>
          <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
            <Image
              className=" mb-3 inline-block"
              src="/images/skills/next.png"
              alt="profile"
              width={50}
              height={50}
            />
            <p className="leading-relaxed tracking-wider">React/Next.js</p>
          </div>
          <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
            <Image
              className=" mb-3 inline-block"
              src="/images/skills/express.png"
              alt="profile"
              width={50}
              height={50}
            />
            <p className="leading-relaxed tracking-wider">Express.js</p>
          </div>
          <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
            <Image
              className=" mb-3 inline-block"
              src="/images/skills/django.png"
              alt="profile"
              width={50}
              height={50}
            />
            <p className="leading-relaxed tracking-wider">Django</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Skills;
