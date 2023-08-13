import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className='h-[66px]'>
      <div className="p-2 my-2 text-center rounded-md bg-slate-800 flex flex-row justify-between">

        <Link href='/posts/create'>
          <div className="hover:bg-slate-600 mt-2 text-2xl font-bold text-white border border-white rounded px-2">+</div>
        </Link>

        <Link href="/posts">
          <div className="hover:bg-slate-600 mt-2 text-2xl font-bold text-white">All Posts</div>
        </Link>

        <Link href='/posts/create'>
          <div className="hover:bg-slate-600 mt-2 text-2xl font-bold text-white border border-white rounded px-2">+</div>
        </Link>

      </div>
    </header>
  )
}

export default Header
/*
  <Link href='/posts/create'>
    <h1 className='mt-2 text-2xl font-bold text-white'>Add</h1>
  </Link>
*/