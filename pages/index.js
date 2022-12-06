import { getAllPosts } from "../helpers/api-util";

import PostsList from "../components/posts/posts-list";
import Banner from "../components/ui/banner";

export default function Home({ posts }) {
  return <div>{/* <PostsList posts={posts} /> */}<Banner /></div>;
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
