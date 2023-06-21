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
        url: `?product_id=${id}`,
      }),
    }),
    searchProductPrice: build.query<IProducts[], string>({
      query: (price: string) => ({
        url: `?sortBy=price&sortOrder=${price}`,
      }),
    }),
  }),
});

export const { useSearchProductsQuery, useSearchProductPriceQuery } = backendApi;


