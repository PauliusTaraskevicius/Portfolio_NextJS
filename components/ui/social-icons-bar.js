import Image from "next/image";
import Link from "next/link";

function SocialIconsBar() {
  return (
    <div className="absolute left-0 hidden mx-12 my-2 2xl:block ">
      <ul className="flex flex-col ">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <li className="px-2 py-2 my-4 transition duration-200 transform border border-red-200 rounded-full cursor-pointer hover:scale-110 hover">
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
          <li className="px-2 py-2 my-4 transition duration-200 transform border border-red-200 rounded-full cursor-pointer hover:scale-110 hover">
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
          <li className="px-2 py-2 my-4 transition duration-200 transform border border-red-200 rounded-full cursor-pointer hover:scale-110 hover">
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
