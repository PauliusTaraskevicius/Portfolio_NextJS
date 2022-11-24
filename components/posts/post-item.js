import Link from "next/link";

function PostItem(props) {
  const { title, description, url, id } = props;

  return (
    <li>
      
      <Link href={`/posts/${id}`}>
        <h1>{title}</h1>
      </Link>
      <p>{description}</p>
      <p>{url}</p>
      <br />
    </li>
  );
}

export default PostItem;
