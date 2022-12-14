import Link from "next/link";

function PostItem(props) {
  const { title, description, url, id } = props;

  return (
    <div>
      <Link
        href={`/projects/${id}`}
        className="relative block h-48 overflow-hidden rounded-lg shadow-xl"
      >
        <img
          alt="ecommerce"
          className="block h-full w-full object-cover object-center cursor-pointer"
          src="https://dummyimage.com/420x260"
        />
      </Link>
    </div>
  );
}

export default PostItem;
