"use client"
import { getPostById, updatePostById } from '@/server-actions/postServerAction'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const EditPost = (props) => {
  //const { post } = await getPostById(props.id)
  const [post, setPost] = useState({})
  const router = useRouter()
  
  useEffect(()=>{
    getPostById(props.id)
    .then(res => setPost(res.post))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    updatePostById(post._id, post.title, post.subtitle, post.author, post.content)
    .then(res => { 
      console.log(res) 
      toast.success('Saved')
      router.push(`/posts/${props.id}`)
    })
    .catch(e => {
      console.log(e.message)
      toast.error(e.message)
     })
  }
  return (
    <form onSubmit={ handleSubmit }>
      <div className='flex flex-col my-2'>                
        <input className='p-2 border rounded border-slate-400' type='text' placeHolder='title'
        value={post.title} onChange={e => setPost({...post, title: e.target.value}) } />
      </div>

      <div className='flex flex-col my-2 '>
        <input className='p-2 border rounded border-slate-400' type='text' placeHolder='subtitle'
        value={post.subtitle} onChange={e => setPost({...post, subtitle: e.target.value}) } />
      </div>

      <div className='flex flex-col my-2 '>
        <input className='p-2 border rounded border-slate-400' type='text' placeHolder='author'
        value={post.author} onChange={e => setPost({...post, author: e.target.value}) } />
      </div>

      <div className='flex flex-col my-2'>
        <textarea rows="12" cols="120" className='p-2 border rounded border-slate-500' placeHolder='content'
        value={post.content} onChange={e => setPost({...post, content: e.target.value})} >
        </textarea>
      </div>  

      <div className='flex flex-row justify-between mt-2'>
        <div>
          <button className='px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded' type='submit'>Save</button>
          <Link className='px-4 py-2 ml-2 font-bold text-white bg-green-500 rounded' href={`/posts/${props.id}`}>Back</Link>
        </div>
        <div>
          <Link className='px-4 py-2 font-bold text-white bg-red-500 rounded' href='/posts'>Delete</Link>
        </div>        
      </div>
      <div>
        <Toaster position="bottom-center" reverseOrder={true} />
      </div>
    </form>
  )
}

export default EditPost