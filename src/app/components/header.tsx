import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export default function Header() {
  return (
    <header className="flex justify-between items-start mb-8">
      <h1 className="text-2xl font-mono text-white">abhishek kumar</h1>
      <div className="flex items-center gap-4">
        <Link
          href="https://www.linkedin.com/in/abhishek-kumar-531512176"
          className="hover:text-white"
        >
          <LuLinkedin className="w-5 h-5" />
        </Link>
        <Link
          href="https://github.com/iamAbhishekkumar"
          className="hover:text-white"
        >
          <LuGithub className="w-5 h-5" />
        </Link>
        <Link href="https://x.com/abhishekkr_says" className="hover:text-white">
          <FaXTwitter className="w-5 h-5" />
        </Link>
        <Link
          href="mailto:imabhishekkumar1002@gmail.com"
          className="text-sm hover:text-white font-mono"
        >
          imabhishekkumar1002@gmail.com
        </Link>
      </div>
    </header>
  );
}
