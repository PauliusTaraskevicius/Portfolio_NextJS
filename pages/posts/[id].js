import { Fragment } from "react";

import { getPostById, getAllPosts } from "../../helpers/api-util";

import NotFound from "../404";

import PostDetails from "../../components/posts/post-details";

function PostDetailPage(props) {
  const post = props.selectedPost;

  if (post === null) {
    return <NotFound />;
  }

  if (!post) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <PostDetails post={post} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const postId = context.params.id;

  const post = await getPostById(postId);

  return {
    props: {
      selectedPost: post || null,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const paths = posts.map((post) => ({ params: { id: post.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default PostDetailPage;
