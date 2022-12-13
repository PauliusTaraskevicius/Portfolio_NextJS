import { getAllPosts } from "../../helpers/api-util";
import Transition from "../../components/ui/transition";

import PostsList from "../../components/posts/posts-list";

function Posts({ posts }) {
  return <Transition><PostsList posts={posts}/></Transition>
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
