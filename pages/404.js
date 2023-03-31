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
    </main>
  );
}

export default NotFound;
