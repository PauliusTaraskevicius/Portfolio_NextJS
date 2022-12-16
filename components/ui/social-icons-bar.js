import Image from "next/image";
import Link from "next/link";

function SocialIconsBar() {
  return (
    <div className="flex">
      <ul className="flex flex-row">
        <a href="#" target="_blank" rel="noopener noreferrer" className="px-1">
          <li className=" my-4 transition duration-200 transform  rounded-full cursor-pointer ">
            <Image
              className="object-cover object-center rounded"
              src="/images/social_icons/facebook.png"
              alt="profile"
              width={32}
              height={32}
            />
          </li>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="px-1">
          <li className=" my-4 transition duration-200 transform  rounded-full cursor-pointer ">
            <Image
              className="object-cover object-center rounded"
              src="/images/social_icons/instagram.png"
              alt="profile"
              width={32}
              height={32}
            />
          </li>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="px-1">
          <li className=" my-4 transition duration-200 transform  rounded-full cursor-pointer">
            <Image
              className="object-cover object-center rounded"
              src="/images/social_icons/linkedin.png"
              alt="profile"
              width={32}
              height={32}
            />
          </li>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="px-1">
          <li className=" my-4 transition duration-200 transform  rounded-full cursor-pointer">
            <Image
              className="object-cover object-center rounded"
              src="/images/social_icons/github.png"
              alt="profile"
              width={32}
              height={32}
            />
          </li>
        </a>
      </ul>
    </div>
  );
}

export default SocialIconsBar;
