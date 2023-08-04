import React from 'react'

const ViewPost = ( { params, searchParams } ) => {
  console.log('params=', params)
  console.log('searchParams=', searchParams)

  return (
    <div>ViewPost, id={params.id}, bldcod={searchParams.bldcod}, blocod={searchParams.blocod}</div>
  )
}

export default ViewPost

/*
    http://localhost:3000/posts/123456?bldcod=LK&blocod=01

    ( { params, searchParams } ) => 
    req= {
      params: { id: '123456' },
      searchParams: { bldcod: 'LK', blocod: '01' }
    }

    params.id
    searchParams.bldcod
    searchParams.blocod
*/