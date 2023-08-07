import Link from "next/link";
import { getAllPosts } from '@/server-actions/postServerAction'
import PostPreview from "./PostPreview";

export default async function PostsList() {
  const { posts } = await getAllPosts();

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
      { posts.map(post => <PostPreview key={post._id} {...post} />  ) }
    </div>
  );
}