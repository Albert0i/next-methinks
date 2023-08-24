import Link from "next/link";

const PostPreview = (props) => {
  const rebaseImg = process.env.REBASE_IMAGE

  return (
    <div 
      className="p-4 bg-white border rounded-md shadow-sm border-slate-300">     
      <Link href={`/posts/${props._id}?_rebaseimg=${rebaseImg}`}>
        <h2 className="m2-4 text-violet-900 hover:underline hover:bg-slate-100">{props.title}</h2>
      </Link>
      { props.subtitle!==''? (
        <p className="text-slate-900">－{props.subtitle}</p>
      ) : '' }      
      <p className="text-sm text-slate-900">{props.author}@{props.createdAt}</p>
    </div>
  );
};

export default PostPreview;
