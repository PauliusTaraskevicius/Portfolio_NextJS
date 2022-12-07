import { getAllPosts } from "../../helpers/api-util";

import PostsList from "../../components/posts/posts-list";

function Posts({ posts }) {
  return <PostsList posts={posts}/>
}

export default Posts;

export async function getStaticProps() {
    const posts = await getAllPosts();
  
    return {
      props: {
        posts: posts,
      },
      revalidate: 60,
    };
  }
