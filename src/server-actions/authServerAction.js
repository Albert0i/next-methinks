"use server"
import { cookies } from 'next/headers'

export const login = async (username, password) => {  
  const cookieStore = cookies()

  if ((username===process.env.ADMIN_USERNAME) && 
      (password===process.env.ADMIN_PASSWORD)) {
      cookieStore.set({
                    name: process.env.AUTH_COOKIE_NAME,
                    value: true,
                    httpOnly: true,
                    secure: true
                    })
      return { "success": true, message: 'cookie set' } 
  }
  else 
  {
    return { "success": false, message: 'username or password not correct'} 
  }
};

export const logout = async () => {
  const cookieStore = cookies()

  if (cookieStore.get(process.env.AUTH_COOKIE_NAME)) {
    cookieStore.delete(process.env.AUTH_COOKIE_NAME)
    return { "success": true, message: 'cookie cleared'} 
  }    
  else 
  return { "success": true, "message": 'cookie not found'} 
};

/*
   NextRequest and NextResponse
   https://nextjs.org/docs/pages/api-reference/functions/next-server

   Response
   https://developer.mozilla.org/en-US/docs/Web/API/Response

   cookies
   https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options

   Next.js: How to Get and Set Cookies (2023)
   https://maxschmitt.me/posts/next-js-cookies
*/