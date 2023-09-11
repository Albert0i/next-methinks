import { getAllPosts } from '@/server-actions/postServerAction'
import PostPreview from "./PostPreview";

export default async function PostsList({searchText, page, perPage}) {  
  const { posts } = await getAllPosts(searchText, page, perPage);

  if (posts.length===0)
  return (
          <h1 className='mt-20 text-2xl text-center'>No posts found</h1>    
    )

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
      { posts.map(post => <PostPreview key={post._id} {...post} />  ) }
    </div>
  );
}