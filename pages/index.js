import { getAllPosts } from "../helpers/api-util";

import PostsList from "../components/posts/posts-list";

export default function Home({ posts }) {
  return <div>{/* <PostsList posts={posts} /> */}</div>;
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts,
    },
    revalidate: 60,
  };
}
