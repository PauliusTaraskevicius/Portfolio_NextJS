import Link from "next/link";

function PostItem(props) {
  const { title, description, url, id } = props;

  return (
    <div>
      <Link href={`/posts/${id}`}>
        <img
          className="object-cover object-center w-full h-40 mb-6 rounded transition duration-200 transform hover:scale-110 hover"
          src="https://dummyimage.com/720x400"
          alt="content"
        />
      </Link>
      <h3 className="text-xs font-medium tracking-widest text-indigo-500 title-font">
        {title}
      </h3>

      <h1 className="mb-4 text-lg font-medium text-gray-900 title-font">
        {title}
      </h1>
      <p className="text-base leading-relaxed">{title}</p>
    </div>
  );
}

export default PostItem;
