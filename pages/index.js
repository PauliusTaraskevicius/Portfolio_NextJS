import { useEffect, useState } from "react";

import { getAllPosts } from "../helpers/api-util";
import PostsList from "../components/posts/posts-list";

export default function Home({posts}) {
  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <PostsList posts={posts}/>
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
