import React from 'react'

const TestPage = ( props ) => {  
  //console.log('props=', props)
  const { params, searchParams } = props   

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
   http://localhost:3000/test/12345?bldcod=LK&blocod=01
*/