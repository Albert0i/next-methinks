import EditPost from '@/components/EditPost'
import { getPostById } from '@/server-actions/postServerAction'

const EditPage = async ( { params } ) => {
  const res = await getPostById(params.id)

  return <EditPost { ...res.post } />
}

export default EditPage