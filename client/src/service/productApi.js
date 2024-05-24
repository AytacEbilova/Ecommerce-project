import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    getOneProducts: builder.query({
        query: (id) => `products/${id}`,
      }),
      deleteProduct: builder.mutation({
        query: (id) => ({
            url:`products/${id}`,
            method:'DELETE'
        }),
      }),
      postProduct: builder.mutation({
        query: (newProduct) => ({
            url:`products`,
            method:'POST',
            body:newProduct,
            headers:{
                "Content-type":'application/json'
            }
        }),
      }),
  }),
})


export const { useGetProductsQuery,useGetOneProductsQuery,useDeleteProductMutation,usePostProductMutation } = productApi