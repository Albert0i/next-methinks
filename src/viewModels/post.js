import { z } from 'zod'

export const postSchema = z.object({
    title: z.string().
            nonempty({ message: 'title is required'}).
            min(3, { message: 'title must be 3 characters or more' }).
            trim(),
    subtitle: z.string().trim(), 
    author: z.string().
            nonempty({ message: 'author is required'}).
            trim(),
    content: z.string().
              nonempty({ message: 'content is required'}).
              min(12, { message: 'content must be 12 characters or more' }).
              trim(),
  })

/*
   Zod | Strings
   https://zod.dev/?id=strings
*/  