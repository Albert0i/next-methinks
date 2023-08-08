"use client"
import { getPostById, updatePostById, deletePostById } from '@/server-actions/postServerAction'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const EditPost = (props) => {
  const [post, setPost] = useState({
    title: '',
    subtitle: '',
    author: '',
    content: ''
  })
  const router = useRouter()
  
  useEffect(()=>{
    getPostById(props.id)
    .then(res => setPost(res.post))
  }, [props.id])

  const handleSubmit = (e) => {
    e.preventDefault()
    updatePostById(post._id, post.title, post.subtitle, post.author, post.content)
    .then(res => { 
      //console.log(res) 
      toast.success('Saved')      
      setTimeout(()=>{router.push(`/posts/${props.id}`)}, 1000)
    })
    .catch(e => {
      console.log(e.message)
      toast.error(e.message)
     })
  }

  const handleDelete = () => {
    deletePostById(props.id)
    .then(res => { 
      //console.log(res) 
      toast.success('Deleted')      
      setTimeout(()=>{router.push('/posts')}, 1000)
    })
    .catch(e => {
      console.log(e.message)
      toast.error(e.message)
     })
  }
  return (
    <form onSubmit={ handleSubmit }>
      <div className='grid grid-flow-col justify-stretch'>
        <div className='flex flex-col my-2'>                
          <input className='p-2 border rounded border-slate-400' type='text' placeholder='title'
          value={post.title} onChange={e => setPost({...post, title: e.target.value}) } autoFocus />
        </div>

        <div className='flex flex-col my-2 '>
          <input className='p-2 border rounded border-slate-400' type='text' placeholder='subtitle'
          value={post.subtitle} onChange={e => setPost({...post, subtitle: e.target.value}) } />
        </div>

        <div className='flex flex-col my-2 '>
          <input className='p-2 border rounded border-slate-400' type='text' placeholder='author'
          value={post.author} onChange={e => setPost({...post, author: e.target.value}) } />
        </div>
      </div>

      <div className='flex flex-col my-2 mx-auto'>
        <textarea rows={12} cols={120} className='p-2 border rounded border-slate-500' placeholder='content'
        defaultValue={post.content} onChange={e => setPost({...post, content: e.target.value})} autoFocus >
        </textarea>
      </div>  

      <div className='flex flex-row justify-between mt-2'>
        <div>
          <button type='submit' className='px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded'>Save</button>
          <Link className='px-4 py-2 ml-2 font-bold text-white bg-green-500 rounded' href={`/posts/${props.id}`}>Back</Link>
        </div>
        <div>
          <button type='button' className='px-4 py-2 font-bold text-white bg-red-500 rounded' onClick={ handleDelete }>Delete</button>
        </div>        
      </div>
      <div>
        <Toaster position="bottom-center" reverseOrder={true} />
      </div>
    </form>
  )
}

export default EditPost