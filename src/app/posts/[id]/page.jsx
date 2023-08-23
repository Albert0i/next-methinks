import PostDetail from '@/components/PostDetail'

// SSG Test (2023/08/23)
// export const dynamicParams = true // default val = true
// 
// export async function generateStaticParams() {
//   const res = await fetch(`${process.env.API_URL}/posts`);
//   const data = await res.json()
 
//   return data.posts.map((post) => ({
//     id: post._id
//   }))
// }
// SSG Test (2023/08/23)

const PostPage = ( { params, searchParams } ) => {
  return <PostDetail id={ params.id } rebaseimg={ searchParams._rebaseimg } />
}

export default PostPage
