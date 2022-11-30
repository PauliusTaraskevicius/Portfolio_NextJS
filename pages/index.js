import { getAllPosts } from "../helpers/api-util";

import Banner from "../components/ui/banner";
import Services from "../components/ui/services";
import Skills from "../components/ui/skills";
import PostsList from "../components/posts/posts-list";


export default function Home({ posts }) {
  return (
    <div>
      <Banner />
      <Services />
      <Skills />
      <PostsList posts={posts} />
    </div>
  );
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
