import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/"}),
    tagTypes:['Posts'],
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query:() => "posts",
            providesTags:['Posts'],
        })
    })
});

export const {
    useGetAllPostsQuery,
    
} = apiSlice