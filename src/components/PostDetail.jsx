import { getPostById } from '@/server-actions/postServerAction'
import Markdown from 'markdown-to-jsx'
import Link from 'next/link'

const PostDetail = async (props) => {
  let { post } = await getPostById(props.id)

  /*
     Check if a JavaScript string is a URL
     https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
  */
  function validURL(str) {
    
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }
  /*
     Remove line breaks from start and end of string
     https://stackoverflow.com/questions/14572413/remove-line-breaks-from-start-and-end-of-string
  */
  function removeLineBreak(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  /*
     Get HTML Content With Javascript Fetch (Simple Example)
     https://code-boxx.com/get-html-content-javascript-fetch/
  */
    if (validURL(removeLineBreak(post.content))) {
      const res = await fetch(post.content)

      try {        
        const md = await res.json()
        if (md?.payload?.blob?.richText)
          post.content = md?.payload?.blob?.richText          
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
        <p className="text-slate-400">{post.createdAt}</p>
      </div>
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>

      <div className='mt-2'>
        <Link className='px-4 py-2 font-bold text-white bg-blue-500 rounded text-bold' href={`/posts/${props.id}/edit`}>Edit</Link>        
      </div>      
    </div>
  )
}

export default PostDetail