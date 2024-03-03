import { base_url } from "../firebase/dataBase";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//Define a service using a base URL and expected end points.
export const shopApi = createApi({
    reducerPath: "shopApi" ,
    baseQuery: fetchBaseQuery({ baseUrl: base_url}),
    endpoints: (builder) => ({
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`
        }),
        getCategories: builder.query({
            query: () => 'categories.json'
        }),
        postOrder: builder.mutation({
            query: ({...order}) => ({
                url: 'orders.json',
                method: 'POST',
                body: order
            })
        }),
    }),
});

export const { useGetProductsByCategoryQuery, useGetCategoriesQuery, usePostOrderMutation } = shopApi;