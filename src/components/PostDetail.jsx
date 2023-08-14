import { getPostById } from '@/server-actions/postServerAction'
import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import { validURL, removeLineBreak, reBaseImageUrl } from '@/lib/helper' 

const PostDetail = async (props) => {
    let { post } = await getPostById(props.id) 

    if (validURL(removeLineBreak(post.content))) {
      const res = await fetch(post.content)

      try {        
        const md = await res.json()

        if (md?.payload?.blob?.richText) {
          //console.log('md.payload=', md.payload)
          //console.log('md.payload.blob.topBannersInfo.repoOwner=', md.payload.blob.topBannersInfo.repoOwner)
          //console.log('md.payload.repo.ownerLogin=', md.payload.repo.ownerLogin)
          post.content = md.payload.blob.richText

          // Rebase image !!!
          if (Boolean(props.rebaseimg==='true')) {
            const gitUsername = md.payload.blob.topBannersInfo.repoOwner
            post.content = reBaseImageUrl(post.content, gitUsername)
          }
        }
      } catch (e) {
        console.log(e)
      }    
    }

  return (
    <div>
      <div className="my-2 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.title}</h1>
        { post.subtitle!==''? (
        <p className="text-slate-900">－{post.subtitle}</p>
        ) : '' }
        <p className="text-slate-400">{post.author}@{post.createdAt}</p>
      </div>
      <article className="max-w-4xl prose">
        <Markdown>{post.content}</Markdown>
      </article>

      <div className='mt-2'>
        <Link className='px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-400 text-bold' href={`/posts/${props.id}/edit`}>Edit</Link>        
      </div>      
    </div>
  )
}

export default PostDetail