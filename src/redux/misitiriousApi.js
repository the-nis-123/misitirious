// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// defining our service using a base URL and expected endpoints
export const misitiriousApi = createApi({
  reducerPath: 'misitiriousApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: ( builder ) => ({
    getAllProducts: builder.query({ query: () => "store" }),
    getAllProductById: builder.query({ query: ( id ) => `store/${id}` }),
    getAllProductByCategory: builder.query({ query: ( category ) => `store/${category}` }),
    getAllEvents: builder.query({ query: () => "events" }),
    getAllEventById: builder.query({ query: ( id ) => `events/${id}` }),
    getAllPosts: builder.query({ query: () => "posts" }),
    getGallery: builder.query({ query: () => "gallery" }),
    getAllPosters: builder.query({ query: () => "posters" }),
  }),
})

//exporting auto-generated hooks
export const {
  useGetAllProductsQuery,
  useGetAllProductByIdQuery,
  useGetAllProductByCategoryQuery,
  useGetAllEventsQuery,
  useGetAllEventByIdQuery,
  useGetAllPostsQuery,
  useGetGalleryQuery,
  useGetAllPostersQuery
} = misitiriousApi;