import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhotos } from "../../models/models";


export const backendApi = createApi({
    reducerPath: 'backend/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: build => ({
        searchUsers: build.query<IPhotos[],string>({
            query: (count: string) => ({
                url: `photos/?_limit=${count}`,
            })
        })
    })
})



export const {useSearchUsersQuery} = backendApi