import Filter from "@/components/Filter"
import PostsList from "@/components/PostsList"

const AllPostsPage = async ({searchParams}) => {  
  const searchText = searchParams._st 
  const page = searchParams._page || 0
  const perPage = searchParams._limit || process.env.PAGE_SIZE

  return (<>
            <Filter page={page} perPage={perPage} />
            <PostsList page={page} perPage={perPage}
                       searchText={searchText}  />
          </>)
}

export default AllPostsPage