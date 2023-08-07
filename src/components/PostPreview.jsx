import Link from "next/link";

const PostPreview = (props) => {
  return (
    <div 
      className="p-4 bg-white border rounded-md shadow-sm border-slate-300">
      <p className="text-sm text-slate-400">{props.createdAt}</p>

      <Link href={`/posts/${props._id}`}>
        <h2 className="mb-4 text-violet-600 hover:underline">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
