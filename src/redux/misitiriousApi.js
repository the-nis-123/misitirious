// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// defining our service using a base URL and expected endpoints
export const misitiriousApi = createApi({
  reducerPath: 'misitiriousApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://the-nis-123.github.io/fake-api/api/" }),
  endpoints: ( builder ) => ({
    getAllProducts: builder.query({ query: () => "store.json" }),
    getAllCategories: builder.query({ query: () => "categories.json" }),
    getGallery: builder.query({ query: () => "gallery.json" }),
    getAllPosters: builder.query({ query: () => "posters" }),
    getAllSearchResults: builder.query({ query: (searchQuery) => `store?q=${searchQuery}` }),
  }),
})

//exporting auto-generated hooks
export const {
  useGetAllProductsQuery,
  useGetGalleryQuery,
  useGetAllPostersQuery,
  useGetAllCategoriesQuery,
  useGetAllSearchResultsQuery
} = misitiriousApi;
