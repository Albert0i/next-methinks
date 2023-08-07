"use client"
import { getPostById, updatePostById } from '@/server-actions/postServerAction'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'

const EditPost = (props) => {
  //const { post } = await getPostById(props.id)
  const [post, setPost] = useState({})
  
  useEffect(()=>{
    getPostById(props.id)
    .then(res => setPost(res.post))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('post=', post)
    updatePostById(post._id, post.title, post.subtitle, post.author, post.content)
    .then(res => console.log(res))
  }
  return (
    <form onSubmit={ handleSubmit }>
      <div className='flex flex-col my-2'>                
        <input className='border rounded border-slate-400' type='text' value={post.title} 
        onChange={e => setPost({...post, title: e.target.value}) } />
      </div>
      <div className='flex flex-col my-2 '>
        <input className='border rounded border-slate-400' type='text' value={post.subtitle} 
        onChange={e => setPost({...post, subtitle: e.target.value}) } />
      </div>
      <div className='flex flex-col my-2'>
        <textarea rows="4" cols="50" className='h-screen border rounded border-slate-500' 
        onChange={e => setPost({...post, content: e.target.value})} 
        value={post.content} >
        </textarea>
      </div>     
      <div className='mt-2'>
        {/* <Link className='px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded text-bold' href='/posts'>Save</Link> */}
        <button className='px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded text-bold' type='submit'>Save</button>
        <Link className='px-4 py-2 ml-2 font-bold text-white bg-green-500 rounded text-bold' href={`/posts/${props.id}`}>Back</Link>
      </div>   
    </form>
  )
}

export default EditPost