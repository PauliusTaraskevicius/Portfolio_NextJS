import { motion } from "framer-motion";
import Transition from "../components/ui/transition";
import Image from "next/image";
import Meta from "../components/Meta";
import Footer from "../components/layout/footer";

function About() {
  return (
    <Transition>
      <Meta title="About" />
      <section class="container mx-auto px-6 pt-15 text-center grid h-screen place-items-center">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="inline-flex items-center justify-center">
                  <Image
                    src="/images/profile.png"
                    alt="profile"
                    width={300}
                    height={300}
                  />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg tracking-wider">
                    Paulius Taraškevičius
                  </h2>
                  <div class="w-12 h-1 bg-pink-600 rounded mt-2 mb-4"></div>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-pink-600 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">
                  Hi! I'm Paulius and I love creating helpful tools and apps for
                  everyone to enjoy.
                </p>
                <br />
                <p class="leading-relaxed text-lg mb-4">
                  Creating web applications as my hobby and full time job.I
                  create custom websites, complex systems to help businesses do
                  better online.Worry not, I will make the process as easy and
                  quick as possible.
                </p>
                <br />
                <p class="leading-relaxed text-lg mb-4">
                  Currently, I'm learning about design principles and software
                  architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </Transition>
  );
}

export default About;