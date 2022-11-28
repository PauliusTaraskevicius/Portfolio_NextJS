import Image from "next/image";

function Services() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Services
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Specializing in full stack development.Skills in Javascript, Python,
            HTML, CSS.Frameworks/Libraries Django, React, Next.js
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
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
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Web apps
              </h2>
              <p class="leading-relaxed text-base">
                I will build web apps for efficient management of different
                business activities.Web app development services help design,
                build, and evolve web-based software.
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
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
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Websites
              </h2>
              <p class="leading-relaxed text-base">
                Creating a website from scratch, including requirements
                gathering, design, implementation, quality assurance.Adapting
                your website for mobile phones and tablets of all platforms and
                screen sizes.
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
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
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Front/Back end development
              </h2>
              <p class="leading-relaxed text-base">
                Having agreed on the look and feel of a web app with project
                owners, we bring it to life with front-end coding.We will
                accurately implement the business logic of your web app on the
                back end. We rely on proven frameworks to ensure fast and
                quality coding.
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
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
