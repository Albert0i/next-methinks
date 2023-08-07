import { getPostById } from '@/server-actions/postServerAction'
import Markdown from 'markdown-to-jsx'
import Link from 'next/link'

const PostDetail = async (props) => {
  const { post } = await getPostById(props.id)

  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.title}</h1>
        <p className="mt-2 text-slate-400">{post.createdAt}</p>
      </div>
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>

      <div className='mt-2'>
        <Link className='px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded text-bold' href={`/posts/${props.id}/edit`}>Edit</Link>
        <Link className='px-4 py-2 ml-2 font-bold text-white bg-red-500 rounded text-bold' href='/posts'>Delete</Link>
      </div>      
    </div>
  )
}

export default PostDetail