import PostItem from "./post-item";

function PostsList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          url={post.url}
        />
      ))}
    </ul>
  );
}

export default PostsList;
