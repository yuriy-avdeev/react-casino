import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IPost } from '../model/Post'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode/' }),
  endpoints: builder => ({
    getPost: builder.query<IPost[], null>({ query: () => 'posts' }),
  }),
})

export const { useGetPostQuery } = postApi
