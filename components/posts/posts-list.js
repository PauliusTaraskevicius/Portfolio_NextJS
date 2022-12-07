import PostItem from "./post-item";

function PostsList({ posts }) {
  return (
    <section className="container mx-auto px-6 py-16 pt-28 text-center grid h-screen place-items-center">
      <div className="container mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold md:text-5xl">Projects I've made</h1>
        <div className="my-4 flex flex-wrap justify-center">
          {posts.map((post) => (
            <div className="w-full p-4 sm:w-3/5 md:w-1/2 lg:w-1/4">
              <PostItem
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                url={post.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PostsList;
