import Link from "next/link";

function PostItem(props) {
  const { title, description, url, id } = props;

  return (
    <>
      <Link href={`/posts/${id}`}>
        <img
          className="object-cover object-center w-full h-40 mb-6 rounded"
          src="https://dummyimage.com/720x400"
          alt="content"
        />
        <h3 className="text-xs font-medium tracking-widest text-indigo-500 title-font">
          {title}
        </h3>

        <h1 className="mb-4 text-lg font-medium text-gray-900 title-font">
          {title}
        </h1>
      </Link>
      <p className="text-base leading-relaxed">{title}</p>
    </>
  );
}

export default PostItem;
