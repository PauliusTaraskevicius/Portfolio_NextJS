import Footer from "../layout/footer";
import PostItem from "./post-item";
import Meta from "../Meta";

function PostsList({ posts }) {
  return (
    <>
    <Meta title='Projects' />
    <section className="container mx-auto px-6 py-16 pt-28 text-center grid h-screen place-items-center">
      <div className="container mx-auto px-5 py-10">
        <h1 className="textColorChange text-3xl font-bold dark:text-white md:text-4xl ">Projects I've made</h1>
        <div className="my-4 flex flex-wrap justify-center">
          {posts.map((post) => (
            <div className="w-full p-4 sm:w-3/5 md:w-1/2 lg:w-1/4" key={post.id}>
              <PostItem
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                url={post.url}
                thumbnail={post.thumbnail}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
    </>
  );
}

export default PostsList;
