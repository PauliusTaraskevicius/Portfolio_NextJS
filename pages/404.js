
import { useRouter } from "next/router";
import { useEffect } from "react";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 1300);
    return () => clearTimeout(timer);
  });

  return (
    <main className="w-full h-screen bg-center bg-cover  flex flex-col justify-center items-center">
      <h1 className="font-extrabold tracking-widest text-pink-600 text-9xl">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute ">
        Page Not Found
      </div>
      {/* <button className="mt-5">
        <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current text-pink-600">
            <Link href="/">Return Home</Link>
          </span>
        </div>
      </button> */}
    </main>
  );
}

export default NotFound;
