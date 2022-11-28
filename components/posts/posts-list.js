import PostItem from "./post-item";

function PostsList({ posts }) {
  return (
    <section id="posts" className="body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap w-full mb-10 justify-center text-center">
          <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
            <h1 className="mb-2 text-2xl font-medium sm:text-3xl title-font underline underline-offset-8 decoration-red-500">
              Projects
            </h1>

          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {posts.map((post) => (
            <div className="p-4 xl:w-1/4 md:w-1/2">
              <div className="p-6 bg-gray-100 rounded-lg">
                <PostItem
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  description={post.description}
                  url={post.url}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PostsList;
