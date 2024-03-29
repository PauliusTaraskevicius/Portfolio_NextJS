import Link from "next/link";
import Image from "next/image";

function PostItem(props) {
  const { id, thumbnail } = props;

  return (
    <div>
      <Link
        href={`/projects/${id}`}
        className=" relative block h-48 overflow-hidden rounded-lg shadow-xl"
      >
        <div className="container max-w-screen-lg mx-auto pb-10 flex justify-center">
          <Image
            src={thumbnail}
            alt="ecommerce"
            width={160}
            height={160}
            priority
          />
          {/* <img
            alt="ecommerce"
            className="block object-cover object-center cursor-pointer"
            src={thumbnail}
          /> */}
        </div>
      </Link>
    </div>
  );
}

export default PostItem;
