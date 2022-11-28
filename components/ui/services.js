import Image from "next/image";

function Services() {
  return (
    <section id="services" class="body-font">
      <div class="container px-5 py-10 mx-auto">
        <div class="text-center mb-10">
          <h1 class="sm:text-3xl text-2xl font-medium title-font  mb-4 underline underline-offset-8 decoration-red-500">
            Services
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Specializing in full stack development.Skills in Javascript, Python,
            HTML, CSS.Frameworks/Libraries Django, React, Next.js
          </p>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-indigo-500 mb-5 flex-shrink-0">
              <Image
                className="object-cover object-center rounded"
                src="/images/services_icons/app.png"
                alt="profile"
                width={32}
                height={32}
              />
            </div>
            <div class="flex-grow">
              <h2 class=" text-lg title-font font-medium mb-3">Web apps</h2>
              <p class="leading-relaxed text-base">
                I will build web apps for efficient management of different
                business activities.Web app development services help design,
                build, and evolve web-based software.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-indigo-500 mb-5 flex-shrink-0">
              <Image
                className="object-cover object-center rounded"
                src="/images/services_icons/web.png"
                alt="profile"
                width={32}
                height={32}
              />
            </div>
            <div class="flex-grow">
              <h2 class=" text-lg title-font font-medium mb-3">Websites</h2>
              <p class="leading-relaxed text-base">
                Creating a website from scratch, including requirements
                gathering, design, implementation, quality assurance.Adapting
                your website for mobile phones and tablets of all platforms and
                screen sizes.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-indigo-500 mb-5 flex-shrink-0">
              <Image
                className="object-cover object-center rounded"
                src="/images/services_icons/code.png"
                alt="profile"
                width={32}
                height={32}
              />
            </div>
            <div class="flex-grow">
              <h2 class=" text-lg title-font font-medium mb-3">
                Front/Back end development
              </h2>
              <p class="leading-relaxed text-base">
                Having agreed on the look and feel of a web app with project
                owners, we bring it to life with front-end coding.We will
                accurately implement the business logic of your web app on the
                back end. We rely on proven frameworks to ensure fast and
                quality coding.
              </p>
            </div>
          </div>
        </div>
        <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
    </section>
  );
}

export default Services;
