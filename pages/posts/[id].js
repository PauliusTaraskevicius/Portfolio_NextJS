import { Fragment } from "react";
import { getPostById, getAllPosts } from "../../helpers/api-util";
import NotFound from "../404";
import Meta from "../../components/Meta";

function PostDetailPage(props) {
  const post = props.selectedPost;

  if(post === null) {
    return (
      <NotFound />
    )
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
      <Meta title={post.title} description={post.description}/>
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
      selectedPost: post || null
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
