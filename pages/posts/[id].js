import { Fragment } from "react";
import { getPostById, getAllPosts } from "../../helpers/api-util";

function PostDetailPage(props) {
  const post = props.selectedPost;

  if (!post) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.url}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const postId = context.params.id;

  const post = await getPostById(postId);

  return {
    props: {
      selectedPost: post,
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
