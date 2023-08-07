import EditPost from '@/components/EditPost'

const EditPage = ( { params } ) => {
  return <EditPost id={ params.id} />
}

export default EditPage