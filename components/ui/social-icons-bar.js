import Image from "next/image";
import Link from "next/link";

function SocialIconsBar() {
  return (
    <div className="hidden absolute left-0 my-2 mx-12 2xl:block ">
      <ul className="flex flex-col ">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <li className="my-4 py-2 px-2 border rounded-full border-red-200 transition duration-200 transform hover:scale-110 hover cursor-pointer">
            <Image
              className="object-cover object-center rounded"
              src="/images/social_icons/fb.png"
              alt="profile"
              width={24}
              height={24}
            />
          </li>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <li className="my-4 py-2 px-2 border rounded-full border-red-200 transition duration-200 transform hover:scale-110 hover cursor-pointer">
            <Image
              className="object-cover object-center rounded"
              src="/images/social_icons/instagram.png"
              alt="profile"
              width={24}
              height={24}
            />
          </li>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <li className="my-4 py-2 px-2 border rounded-full border-red-200 transition duration-200 transform hover:scale-110 hover cursor-pointer">
            <Image
              className="object-cover object-center rounded"
              src="/images/social_icons/linkedin.png"
              alt="profile"
              width={24}
              height={24}
            />
          </li>
        </a>
      </ul>
    </div>
  );
}

export default SocialIconsBar;
