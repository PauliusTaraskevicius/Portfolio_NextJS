import Link from "next/link";

function PostItem(props) {
  const { id, thumbnail } = props;

  return (
    <div>
      <Link
        href={`/projects/${id}`}
        className=" relative block h-48 overflow-hidden rounded-lg shadow-xl"
      >
        <div className="container max-w-screen-lg mx-auto pb-10 flex justify-center">
          <img
            alt="ecommerce"
            className="block object-cover object-center cursor-pointer"
            src={thumbnail}
          />
        </div>
      </Link>
    </div>
  );
}

export default PostItem;
