import { addPost, deletePostById, getAllPosts, getPostById, updatePostById } from '@/server-actions/postServerActions'
import React from 'react'

const TestPage = ( props ) => {  
  console.log('props=', props)
  const { params, searchParams } = props   

  // let posts = null; 
  // getAllPosts()
  //   .then(res => { 
  //       posts = res
  //       console.log('posts=', posts)
  //     })

  // let post = null
  // getPostById('64ccb2b9cd7ed9a3915a9482')
  //   .then(res => {
  //     post = res
  //     console.log('post=', post)
  //   })

  // updatePostById('64ccb2b9cd7ed9a3915a9482',
  // "What is Lorem Ipsum?",
  // "What is Lorem Ipsum?",
  // "soandso",
  // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
  // .then(res=> console.log('res=', res)) 

  // deletePostById('64ccb2b9cd7ed9a3915a9482')
  // .then( res => console.log(res))

  // addPost("Stars", 
  // "Stars", 
  // "me",
  // "Stars, staring and shinning on us over centries, can only be seen in dark nights. Those little silvery dots bear memories from the most remote era dating from the very creation of universe. \n\nIn secular and religious belief, there exists two kinds of stars. One that bring much fortune while the other fortell bad lucks, or presentiment of disasters.")
  // .then( res => console.log(res))

  return (
    <>
        <div>TestPage</div>
        <p>params={JSON.stringify(params)}</p>
        <p>searchParams={JSON.stringify(searchParams)}</p>
    </>    
  )
}

export default TestPage

/*
   http://localhost:3000/test?bldcod=LK&blocod=01
*/