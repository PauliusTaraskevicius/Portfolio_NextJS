import Image from "next/image";
import Footer from "../layout/footer";

import Meta from "../Meta";

function PostDetails({ post }) {
  return (
    <>
      <Meta title={post.title} description={post.description} />
      <section className="container mx-auto px-6 xl:py-16 xl:pt-28 text-center grid h-screen place-items-center">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="textColorChange mb-4 text-3xl font-bold dark:text-white md:text-4xl">
              {post.title}
            </h1>
            <p className="textColorChange mb-8 mt-6 text-lg tracking-wider">{post.description}</p>
            <div className="flex justify-center">
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <button className="inline-flex border-0 py-2 px-6">
                  <Image
                    src="/images/social_icons/githubPink.png"
                    alt="profile"
                    width={50}
                    height={50}
                  />
                </button>
              </a>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <button className="ml-4 inline-flex  py-2 px-6">
                  <Image
                    src="/images/social_icons/internet.png"
                    alt="profile"
                    width={50}
                    height={50}
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default PostDetails;
