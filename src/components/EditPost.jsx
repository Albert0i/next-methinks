"use client"
import { updatePostById, deletePostById } from '@/server-actions/postServerAction'
import Link from 'next/link'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { postSchema } from '@/viewModels/post'

const EditPost = (props) => {  
  const [disabled, setDisabled] = useState('')
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm( { resolver: zodResolver(postSchema) } )
  //const rebaseImg = process.env.REBASE_IMAGE
  const rebaseImg = props.rebaseImg
  
  const onSubmit = (data) => {
    setDisabled('disabled')
    updatePostById(props._id, data.title, data.subtitle, data.author, data.content)
    .then(res => { 
      //console.log(res) 
      toast.success('Saved')
      router.refresh()
      setTimeout(()=>{router.push(`/posts/${props._id}?_rebaseimg=${rebaseImg}`)}, 1000)
    })
    .catch(e => {
      console.log(e.message)
      toast.error(e.message)
     })
  }

  const handleDelete = () => {
    if (confirm('Are you sure?'))
    {
      setDisabled('disabled')
      deletePostById(props._id)
      .then(res => { 
        //console.log(res) 
        toast.success('Deleted')
        router.refresh()   
        setTimeout(()=>{router.push('/posts')}, 1000)
      })
      .catch(e => {
        console.log(e.message)
        toast.error(e.message)
       })
    }    
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <div className='grid grid-flow-col justify-stretch'>
        <div className='flex flex-col my-2'>                
          <input className='p-2 border rounded border-slate-400' type='text' 
          defaultValue={props.title} { ...register('title') } placeholder='title' autoFocus />
          { errors.title && <span className='text-red-500'> { errors.title.message } </span> }
        </div>

        <div className='flex flex-col my-2 '>
          <input className='p-2 border rounded border-slate-400' type='text' 
          defaultValue={props.subtitle} { ...register('subtitle') } placeholder='subtitle' />
          { errors.subtitle && <span className='text-red-500'> { errors.subtitle.message } </span> }
        </div>

        <div className='flex flex-col my-2 '>
          <input className='p-2 border rounded border-slate-400' type='text' 
          defaultValue={props.author} { ...register('author') } placeholder='author' />
          { errors.author && <span className='text-red-500'> { errors.author.message } </span> }
        </div>
      </div>

      <div className='flex flex-col mx-auto my-2'>
        <textarea rows={12} cols={120} className='p-2 border rounded border-slate-500' 
        defaultValue={props.content} { ...register('content') } 
        placeholder='Write your own content or paste url of md file here...' autoFocus >
        </textarea>
        { errors.content && <span className='text-red-500'> { errors.content.message } </span> }
      </div>  

      <div className='flex flex-row justify-between mt-2'>
        <div>
          <button type='submit' className='px-4 py-2 mr-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-400 disabled:bg-gray-400 disabled:cursor-not-allowed' disabled={disabled}>Save</button>

          { 
            disabled !== 'disabled' ? 
            <Link className='px-4 py-2 ml-2 font-bold text-white bg-green-600 rounded hover:bg-green-400' href={`/posts/${props._id}?_rebaseimg=${rebaseImg}`}>Back</Link> 
            : 
            <Link className='px-4 py-2 ml-2 font-bold text-white bg-gray-400 rounded cursor-not-allowed' href={`/posts/${props._id}?_rebaseimg=${rebaseImg}`}>Back</Link> 
          }
        </div>

        <div>
          <button type='button' className='px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-400 disabled:bg-gray-400 disabled:cursor-not-allowed' onClick={ handleDelete } disabled={disabled}>Delete</button>
        </div>        
      </div>
      <div>
        <Toaster position="bottom-center" reverseOrder={true} />
      </div>
    </form>
  )
}

export default EditPost
/*
  <Link className='px-4 py-2 ml-2 font-bold text-white bg-green-600 rounded hover:bg-green-400 disabled:bg-gray-400 disabled:cursor-not-allowed' href={`/posts/${props.id}?_rebaseimg=true`} disabled={disabled}>Back</Link>  
*/
/*
   NextJS | revalidatePath
   https://nextjs.org/docs/app/api-reference/functions/revalidatePath
*/