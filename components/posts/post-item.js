import Link from "next/link";

function PostItem(props) {
  const { title, description, url, id } = props;

  return (
    <div>
      <Link href="/" class="relative block h-48 overflow-hidden rounded">
        <img
          alt="ecommerce"
          class="block h-full w-full object-cover object-center cursor-pointer"
          src="https://dummyimage.com/420x260"
        />
      </Link>
      {/* <div class="mt-4">
  <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
  <h2 class="title-font text-lg font-medium text-gray-900">The Catalyzer</h2>
  <p class="mt-1">01/09/2022</p>
  </div> */}
    </div>
  );
}

export default PostItem;
