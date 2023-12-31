"use server"

const apiUrl = process.env.API_URL

export const getAllPosts = async (searchText, page, perPage) => {    
    try {
      let res = null
      if (searchText)
        res = await fetch(`${apiUrl}/posts?_st=${searchText}`, 
                    { cache: "no-store" });
      else 
        // http://localhost:3000/posts?_page=1&_limit=5
        res = await fetch(`${apiUrl}/posts?_page=${page}&_limit=${perPage}`, 
                    { cache: "no-store" }); 
      if (!res.ok) {
        throw new Error("Failed in 'getAllPosts'");
      }
      return res.json();
    } 
    catch (error) {
      console.log("Error in 'getAllPosts': ", error);
    }
  };

  export const getPostById = async (id) => {
    try {
      const res = await fetch(`${apiUrl}/posts/${id}`, {
        cache: "no-store",
      });  
      if (!res.ok) {
        throw new Error("Failed in 'getPostById'");
      }  
      return res.json();
    } 
    catch (error) {
      console.log("Error in 'getPostById': ", error);
    }
  };

export const addPost = async (title, subtitle, author, content) => {
    try {
        const res = await fetch(`${apiUrl}/posts`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, subtitle, author, content }),
        });
        if (!res.ok) {
          throw new Error("Failed in 'addPost'");
        } 
        return res.json()
      } 
      catch (error) {
        console.log("Error in 'addPost': ", error);
      }
}

export const updatePostById = async (id, title, subtitle, author, content) => {
    try {
      const res = await fetch(`${apiUrl}/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, subtitle, author, content }),
      });
      if (!res.ok) {
        throw new Error("Failed in 'updatePostById'");
      }  
      return res.json();
    } 
    catch (error) {
      console.log("Error in 'updatePostById': ", error);
    }
}

export const deletePostById = async (id) => {
    try {
      const res = await fetch(`${apiUrl}/posts/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed in 'deletePostById'");
      } 
      return res.json()
    } 
    catch (error) {
      console.log("Error in 'deletePostById': ", error);
    }      
}

export const getNumberOfPosts = async (filterValue) => {
  try {
    const res = await fetch(`${apiUrl}/posts?_st=${filterValue}`, {
      method: "OPTIONS",
      next: { 
        revalidate: 0  // use 0 to opt out of using cache
      }
    });
    if (!res.ok) {
      throw new Error("Failed in 'getNumberOfPosts'");
    } 
    return res.json()
  } 
  catch (error) {
    console.log("Error in 'getNumberOfPosts': ", error);
  }
}

/*
   NextRequest and NextResponse
   https://nextjs.org/docs/pages/api-reference/functions/next-server

   Response
   https://developer.mozilla.org/en-US/docs/Web/API/Response
*/