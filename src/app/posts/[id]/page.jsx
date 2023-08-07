import PostDetail from '@/components/PostDetail'

const PostPage = ( { params } ) => {
  return <PostDetail id={ params.id} />
}

export default PostPage
