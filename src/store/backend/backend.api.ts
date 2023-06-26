import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { QueryArgs } from "@testing-library/react";
import { IProducts, IResponse } from "../../models/models";

export const backendApi = createApi({
  reducerPath: "backend/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/products",
  }),
  endpoints: (build) => ({
    searchProducts: build.query<IResponse, {page: string, params: string}>({
      query: (arg) => {
        const {page, params} = arg
        return {
          url: `?page_size=1&page=${page}&${params}`,
        }
      }}),
    searchProductPrice: build.query<IResponse, {page: string, sortMethod: string}>({
      query: (arg) => {
        const {page, sortMethod } = arg
        return {
        url: `?page_size=1`,
        params: ({
          page: `${page}` || '0',
          sortBy: 'price',
          sortOrder: `${sortMethod}`
        })
      }
      },
    }),
    searchProductById: build.query<IProducts, string>({
      query: (id: string) => ({
        url: `/${id}`
      })
    }),
    getProduct: build.query<IResponse, {page: string, sortBy: string, sortOrder: string}>({
      query: (arg) => {
        const {page, sortBy, sortOrder } = arg
        return {
        url: `?page_size=1`,
        params: ({
          page: `${page}` || '0',
          sortBy: `${sortBy}`,
          sortOrder: `${sortOrder}`
        })
      }
      },
    }),
    getProductsBrand: build.query<string[], string>({
      query: () => ({
        url: `/brands`
      })
    }),
  }),
});

export const { useSearchProductsQuery, useSearchProductPriceQuery, useSearchProductByIdQuery, useGetProductQuery, useGetProductsBrandQuery } = backendApi;


