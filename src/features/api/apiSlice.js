import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/"}),
    tagTypes:['Posts'],
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query:() => "posts",
            providesTags:['Posts'],
        }),
        addPosts: builder.mutation({
            query:(posts) =>({
                url: "posts",
                method:"POST",
                body: posts,
            }),
            invalidatesTags:['Posts']
        })
    })
});

export const {
    useGetAllPostsQuery,
    useAddPostsMutation
} = apiSlice