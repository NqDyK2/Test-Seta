import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/posts"}),
    tagTypes:['Posts'],
    endpoints: (builder) => ({
        
    })
})