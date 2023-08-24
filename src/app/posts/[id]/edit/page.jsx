import EditPost from '@/components/EditPost'
import { getPostById } from '@/server-actions/postServerAction'

const EditPage = async ( { params, searchParams } ) => {
  const res = await getPostById(params.id)
  
  return <EditPost { ...res.post } rebaseImg={ searchParams._rebaseimg }/>
}

export default EditPage