import Image from "next/image";

function Skills() {
  return (
    <section id="skills" className="bg-red-100 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-row justify-center">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 justify-center">
          <div className="w-full sm:p-4 px-4 mb-6 text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 underline underline-offset-8 decoration-red-500">
              Skills
            </h1>
          </div>
          <div className="p-4">
            <Image
              className="object-cover object-center rounded"
              src="/images/skills_icons/js.png"
              alt="profile"
              width={48}
              height={48}
            />
          </div>
          <div className="p-4">
            <Image
              className="object-cover object-center rounded"
              src="/images/skills_icons/next.png"
              alt="profile"
              width={48}
              height={48}
            />
          </div>
          <div className="p-4">
            <Image
              className="object-cover object-center rounded"
              src="/images/skills_icons/react.png"
              alt="profile"
              width={48}
              height={48}
            />
          </div>
          <div className="p-4">
            <Image
              className="object-cover object-center rounded"
              src="/images/skills_icons/django.png"
              alt="profile"
              width={48}
              height={48}
            />
          </div>
          <div className="p-4">
            <Image
              className="object-cover object-center rounded"
              src="/images/skills_icons/tailwind.png"
              alt="profile"
              width={48}
              height={48}
            />
          </div>
          <div className="p-4">
            <Image
              className="object-cover object-center rounded"
              src="/images/skills_icons/html.png"
              alt="profile"
              width={48}
              height={48}
            />
          </div>
          <div className="p-4">
            <Image
              className="object-cover object-center rounded"
              src="/images/skills_icons/css.png"
              alt="profile"
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
