import Image from "next/image";

function Services() {
  return (
    <section id="services" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="mb-20 text-2xl font-medium text-center text-gray-900 sm:text-3xl title-font">
          Services
          <span className="hidden mt-2 text-sm sm:block">
            Specializing in full stack development.Skills in Javascript, Python,
            HTML, CSS.Frameworks/Libraries Django, React, Next.js
          </span>
        </h1>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0">
          <div className="flex p-4 md:w-1/3">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-indigo-500 bg-red-100 rounded-full">
              <Image
                className="object-cover object-center rounded"
                src="/images/services_icons/app.png"
                alt="profile"
                width={24}
                height={24}
              />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                Web apps
              </h2>
              <p className="text-base leading-relaxed">
                I will build web apps for efficient management of different
                business activities.Web app development services help design,
                build, and evolve web-based software.
              </p>
            </div>
          </div>
          <div className="flex p-4 md:w-1/3">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-indigo-500 bg-red-100 rounded-full">
              <Image
                className="object-cover object-center rounded"
                src="/images/services_icons/web.png"
                alt="profile"
                width={24}
                height={24}
              />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                Websites
              </h2>
              <p className="text-base leading-relaxed">
                Creating a website from scratch, including requirements
                gathering, design, implementation, quality assurance.Adapting
                your website for mobile phones and tablets of all platforms and
                screen sizes.
              </p>
            </div>
          </div>
          <div className="flex p-4 md:w-1/3">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-indigo-500 bg-red-100 rounded-full">
              <Image
                className="object-cover object-center rounded"
                src="/images/services_icons/code.png"
                alt="profile"
                width={24}
                height={24}
              />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                Front/Back end development
              </h2>
              <p className="text-base leading-relaxed">
                Having agreed on the look and feel of a web app with project
                owners, we bring it to life with front-end coding.We will
                accurately implement the business logic of your web app on the
                back end. We rely on proven frameworks to ensure fast and
                quality coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
