import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="p-2 my-2 text-center rounded-md bg-slate-800">
        <Link href="/posts">
          <h1 className="mt-2 text-2xl font-bold text-white">Jack's Blog</h1>
        </Link>
        <p className="text-slate-300">🤟 Welcome to my tech blog. 💻</p>
      </div>
    </header>
  )
}

export default Header