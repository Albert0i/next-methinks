import Link from "next/link";
// import RemoveBtn from "./RemoveBtn";
// import { HiPencilAlt } from "react-icons/hi";
import { getAllPosts } from '@/server-actions/postServerActions'

export default async function PostsList() {
  const { posts } = await getAllPosts();

  return (
    <div>
      {posts.map((t) => (
        <div
          key={t._id}
          className="flex items-start justify-between gap-5 p-4 my-3 border border-slate-300"
        >
          <div>
            <p className="font-bold text-bold">{t.title}</p>
            <p>{t.content}</p>
          </div>

          {/* <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div> */}
        </div>
      ))}
    </div>
  );
}