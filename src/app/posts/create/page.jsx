import AddPost from '@/components/AddPost'

const CreatePost = () => {
  const rebaseImg = process.env.REBASE_IMAGE

  return (
    <AddPost rebaseImg={rebaseImg}/>
  )
}

export default CreatePost