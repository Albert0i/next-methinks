import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className='h-[66px]'>
      <div className="flex flex-row justify-between p-2 my-2 text-center rounded-md bg-slate-800">

        <Link href='/posts/create'>
          <div className="px-2 mt-2 text-2xl font-bold text-white border border-white rounded hover:bg-slate-600">+</div>
        </Link>

        <Link href="/posts">
          <div className="mt-2 text-2xl font-bold text-white hover:rounded hover:bg-slate-600">All Posts</div>
        </Link>

        <Link href='/posts/create'>
          <div className="px-2 mt-2 text-2xl font-bold text-white border border-white rounded hover:bg-slate-600">+</div>
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