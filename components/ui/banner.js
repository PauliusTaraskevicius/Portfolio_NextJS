import Image from 'next/image'
import SocialIconsBar from './social-icons-bar';

function Banner() {
  return (
    <section class="bg-red-100 text-gray-800 font-serif">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <SocialIconsBar />
        <div class="2xl:ml-24 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hello I'm Paulius a{" "}
            <span class="text-red-600 font-semibold">Web Developer</span>
          </h1>
          <p class="mb-8 leading-relaxed">
            Web developer from Kaunas, Lithuania. Creating web applications as
            my hobby and full time job.I create custom websites, complex systems
            to help businesses do better online.Worry not, I will make the
            process as easy and quick as possible.
          </p>
          <div class="flex justify-center">
            <button class="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Browse Projects
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-purple-500">
        <Image
            className="object-cover object-center rounded"
            src="/images/profile.png"
            alt="profile"
            width={600}
            height={600}
        />  
        </div>
      </div>
    </section>
  );
}

export default Banner;
