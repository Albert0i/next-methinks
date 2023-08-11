'use client'
 
export default function Error({ error, reset }) {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='mt-20 mb-6 text-2xl text-center'>Something went wrong!</h1>
      <button className='px-4 py-2 ml-2 font-bold text-white bg-green-500 rounded w-fit' onClick={() => reset()}>Try again</button>
    </div>
  )
}