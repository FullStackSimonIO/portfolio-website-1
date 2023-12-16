import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make anything possible with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Web Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            The future of building fullstack webapplications using the
            MERN-Stack has never been brighter!
          </p>
          <div className="flex-col md:flex-row hidden md:flex">
            <Link
              href="/my-skills"
              className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-5 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-skills"
              className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-5 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
