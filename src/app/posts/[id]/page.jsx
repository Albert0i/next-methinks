import PostDetail from '@/components/PostDetail'

const PostPage = ( { params, searchParams } ) => {
  return <PostDetail id={ params.id } rebaseimg={ searchParams._rebaseimg } />
}

export default PostPage
