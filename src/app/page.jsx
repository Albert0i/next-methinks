import Link from "next/link";

export default function Home() {    
  return (
    <div className='flex flex-col items-center justify-center h-screen wx-container bg-slate-100'>
      <Link href='https://nextjs.org/'>
        <h1 className='p-4 m-4 text-4xl font-bold text-white bg-black hover:bg-gray-600'>Welcome to Next.js!</h1>
      </Link>      

       <div className='text-black hover:text-gray-600'>
           <Link href='/posts' className='px-4 py-2 mx-auto text-white bg-blue-600 rounded hover:bg-blue-400'>view all posts</Link>
       </div>
    </div>
    );
}
