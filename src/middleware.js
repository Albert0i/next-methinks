/*
   Convention
   Use the file middleware.ts (or .js) in the root of your project to define Middleware. 
   For example, at the same level as pages or app, or inside src if applicable.
*/
import { nextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'

export async function middleware(req) {
   //const response = nextResponse.next()   
   const token=req.cookies.get(process.env.AUTH_COOKIE_NAME)?.value

   //console.log('middleware> req.nextUrl.href=', req.nextUrl.href)
   if (token && bcryptjs.compareSync(process.env.ADMIN_PASSWORD, token))
   {
      const res = nextResponse.next()   
      return res
   }
   else 
   {
      /*
         Unable to set cookie before redirect #32424
         https://github.com/vercel/next.js/issues/32424
      */
      // return nextResponse.redirect(new URL('/posts/login', req.url), 
      //       { headers: { 'Set-Cookie': `req-url=${req.nextUrl.href}` }} )
      const res = nextResponse.redirect(new URL('/auth/login', req.url)) // creates an actual instance
      res.cookies.set("req-url", req.nextUrl.href) // can be called on an instsance
      return res
   }      
}

export const config = {
  matcher: ['/posts/create', '/posts/:id/edit'],  
}
  
/*
   How to enable cors in Nextjs 13 Route Handlers
   https://github.com/vercel/next.js/discussions/47933

   NextJS middleware does not seem to be triggered
   https://stackoverflow.com/questions/73040090/nextjs-middleware-does-not-seem-to-be-triggered
  
   NextJS | Middleware
   https://nextjs.org/docs/app/building-your-application/routing/middleware/

   How to set cookie using NextResponse at server side?
   https://stackoverflow.com/questions/76546264/how-to-set-cookie-using-nextresponse-at-server-side
*/
  