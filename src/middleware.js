/*
   Convention
   Use the file middleware.ts (or .js) in the root of your project to define Middleware. 
   For example, at the same level as pages or app, or inside src if applicable.
*/
import { nextResponse } from 'next/server'

export async function middleware(req) {
   const response = nextResponse.next()   
   const token=req.cookies.get(process.env.AUTH_COOKIE_NAME)?.value
      //const token=req.cookies.getAll()
   console.log('token=', token)

   if (token)
      return response
   else 
      return nextResponse.redirect(new URL('/posts/login', req.url))
}

export const config = {
  matcher: ['/posts/create', '/posts/[id]/edit'],  
}
  
/*
   How to enable cors in Nextjs 13 Route Handlers
   https://github.com/vercel/next.js/discussions/47933

   NextJS middleware does not seem to be triggered
   https://stackoverflow.com/questions/73040090/nextjs-middleware-does-not-seem-to-be-triggered
  
   NextJS | Middleware
   https://nextjs.org/docs/app/building-your-application/routing/middleware/
*/
  