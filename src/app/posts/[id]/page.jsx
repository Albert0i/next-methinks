import PostDetail from '@/components/PostDetail'
import connectMongoDB from "@/config/mongoDB";
import Post from "@/models/post"

// Use SSG to speed up loading post
export const dynamicParams = false // default val = true

// Return a list of `params` to populate the [id] dynamic segment
// export async function generateStaticParams() {  
//     await connectMongoDB()
//     const posts = await Post.find({deleted: false}).select({_id:1}).lean()
  
//     return posts.map((post) => ({
//       id: post._id.toString()
//     }))
// }
// Use SSG to speed up loading post

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
const PostPage = ( { params, searchParams } ) => {
    return <PostDetail id={ params.id } rebaseimg={ searchParams._rebaseimg } />
}

export default PostPage

/*
Good to know

- You can use the dynamicParams segment config option to control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
- During next dev, generateStaticParams will be called when you navigate to a route.
- During next build, generateStaticParams runs before the corresponding Layouts or Pages are generated.
- During revalidation (ISR), generateStaticParams will not be called again.
- generateStaticParams replaces the getStaticPaths function in the Pages Router.
*/

/*
   Next.js 13 Crash Course Tutorial #8 - Static Rendering
   https://youtu.be/ihmyC4Ei2zY

   NextJS | generateStaticParams
   https://nextjs.org/docs/app/api-reference/functions/generate-static-params
*/
