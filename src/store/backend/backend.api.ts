import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhotos } from "../../models/models";


export const backendApi = createApi({
    reducerPath: 'backend/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://04e1-95-189-186-88.ngrok-free.app/',
    }),  
    endpoints: build => ({
        searchProducts: build.query<IPhotos[],string>({
            query: (count: string) => ({
                url: ``,
            })
        })
    })
})



export const {useSearchProductsQuery} = backendApi