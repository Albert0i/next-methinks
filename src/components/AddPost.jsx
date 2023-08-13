"use client"
import { addPost } from '@/server-actions/postServerAction'
import Link from 'next/link'
import React, {useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const AddPost = (props) => {
  const [post, setPost] = useState({
    title: '',
    subtitle: '',
    author: '',
    content: ''
  })
  const [disabled, setDisabled] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    setDisabled('disabled')
    e.preventDefault()
    addPost(post.title, post.subtitle, post.author, post.content)
    .then(res => { 
      //console.log(res) 
      toast.success('Created')      
      setTimeout(()=>{router.push(`/posts/${res.id}?_rebaseimg=true`)}, 1000)
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

        <div className='flex flex-col my-2'>
          <input className='p-2 border rounded border-slate-400' type='text' placeholder='subtitle'
          value={post.subtitle} onChange={e => setPost({...post, subtitle: e.target.value}) } />
        </div>

        <div className='flex flex-col my-2'>
          <input className='p-2 border rounded border-slate-400' type='text' placeholder='author'
          value={post.author} onChange={e => setPost({...post, author: e.target.value}) } />
        </div>
      </div>
      
      <div className='flex flex-col mx-auto my-2'>
        <textarea rows={12} cols={120} className='p-2 border rounded border-slate-500' placeholder='Write your own content or paste url of md file here...'
        defaultValue={post.content} onChange={e => setPost({...post, content: e.target.value})} >
        </textarea>
      </div>  

      <div className='flex flex-row justify-between mt-2'>
        <div>
          <button className='px-4 py-2 mr-2 font-bold text-white bg-blue-600 hover:bg-blue-400 rounded disabled:bg-gray-400 disabled:cursor-not-allowed' type='submit' disabled={disabled}>Create</button>

          <Link className='px-4 py-2 ml-2 font-bold text-white bg-green-600 hover:bg-green-400 rounded disabled:bg-gray-400 disabled:cursor-not-allowed' href={'/posts'} disabled={disabled}>Back</Link>
        </div>      
      </div>
      <div>
        <Toaster position="bottom-center" reverseOrder={true} />
      </div>
    </form>
  )
}

export default AddPost
/*
  <Link className='px-4 py-2 ml-2 font-bold text-white bg-green-600 hover:bg-green-400 rounded disabled:bg-gray-400 disabled:cursor-not-allowed' href={'/posts'} disabled={disabled}>Back</Link>

  <Link className={`px-4 py-2 ml-2 font-bold text-white rounded (${disabled}==='disabled'?'bg-gray-400 cursor-not-allowed':'bg-green-600 hover:bg-green-400')`} href={'/posts'} disabled={disabled}>Back</Link>

  <Link className={ 'px-4 py-2 ml-2 font-bold text-white rounded bg-green-600 hover:bg-green-400' + 
                            disabled===''?'bg-green-600 hover:bg-green-400':'bg-gray-400 cursor-not-allowed' } href={'/posts'}>Back</Link>
*/