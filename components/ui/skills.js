import Image from "next/image";

function Skills() {
  return (
    <section class="bg-red-100 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-row justify-center">
        <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 justify-center">
          <div class="w-full sm:p-4 px-4 mb-6 text-center">
            <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
              Skills
            </h1>
            <div class="leading-relaxed">
              Frameworks and libraries that I use for development
            </div>
          </div>
          <div class="p-4 items-center">
            <Image
              className="object-cover object-center rounded"
              src="/images/skills_icons/js.png"
              alt="profile"
              width={48}
              height={48}
            />
          </div>
          <div class="p-4 ">
            <Image
              className="object-cover object-center rounded"
              src="/images/skills_icons/next.png"
              alt="profile"
              width={48}
              height={48}
            />
          </div>
          <div class="p-4 ">
            <Image
              className="object-cover object-center rounded"
              src="/images/skills_icons/react.png"
              alt="profile"
              width={48}
              height={48}
            />
          </div>
          <div class="p-4 ">
            <Image
              className="object-cover object-center rounded"
              src="/images/skills_icons/django.png"
              alt="profile"
              width={48}
              height={48}
            />
          </div>
          <div class="p-4 ">
            <Image
              className="object-cover object-center rounded"
              src="/images/skills_icons/tailwind.png"
              alt="profile"
              width={48}
              height={48}
            />
          </div>
          <div class="p-4 ">
            <Image
              className="object-cover object-center rounded"
              src="/images/skills_icons/html.png"
              alt="profile"
              width={48}
              height={48}
            />
          </div>
          <div class="p-4 ">
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
