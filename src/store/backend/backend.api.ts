import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts } from "../../models/models";

export const backendApi = createApi({
  reducerPath: "backend/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/products",
  }),
  endpoints: (build) => ({
    searchProducts: build.query<IProducts[], string>({
      query: (id: string) => ({
        url: `?${id}`,
      }),
    }),
    searchProductPrice: build.query<IProducts[], string>({
      query: (price: string) => ({
        url: `?${price}`,
      }),
    }),
    searchProductDate: build.query<IProducts[], string>({
      query: (date: string) => ({
        url: `?${date}`
      })
    })
  }),
});

export const { useSearchProductsQuery, useSearchProductPriceQuery } = backendApi;


