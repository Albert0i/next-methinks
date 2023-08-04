import React from 'react'

const EditPost = ({ params, searchParams }) => {
  console.log('params=', params)
  console.log('searchParams=', searchParams)

  return (
    <div>EditPost, id={params.id}, bldcod={searchParams.bldcod}, blocod={searchParams.blocod}</div>
  )
}

export default EditPost

/*
    http://localhost:3000/posts/123456/edit?bldcod=LK&blocod=01

    ( { params, searchParams } ) => 
    req= {
      params: { id: '123456' },
      searchParams: { bldcod: 'LK', blocod: '01' }
    }

    params.id
    searchParams.bldcod
    searchParams.blocod
*/