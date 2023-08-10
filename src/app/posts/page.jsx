import Filter from "@/components/Filter"
import PostsList from "@/components/PostsList"

const AllPostsPage = async ({searchParams}) => {  
  const searchText = searchParams._st 

  return (<>
            <Filter />
            <PostsList searchText={searchText} />
          </>)
}

export default AllPostsPage