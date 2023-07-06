import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { QueryArgs } from "@testing-library/react";
import { IProducts, IResponse } from "../../models/models";

export const backendApi = createApi({
  reducerPath: "backend/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://159.89.20.124:8080/",
  }),
  endpoints: (build) => ({
    searchProducts: build.query<IResponse, {page: string, params: string}>({
      query: (arg) => {
        const {page, params} = arg
        return {
          url: `products?page_size=3&page=${page}&${params}`,
        }
      }}),
    getProductsSize: build.query<string[], string>({
      query: () => ({
        url: `products/sizes`
      })
      // query: (arg) => {
      //   const {page, sortMethod } = arg
      //   return {
      //   url: `products/sizes`,
      // }
      // },
    }),
    searchProductById: build.query<IProducts, string>({
      query: (id: string) => ({
        url: `products/${id}`
      })
    }),
    getProduct: build.query<IResponse, {page: string, sortBy: string, sortOrder: string}>({
      query: (arg) => {
        const {page, sortBy, sortOrder } = arg
        return {
        url: `products?page_size=1`,
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
        url: `products/brands`
      })
    }),
    addProduct: build.mutation<IProducts, IProducts>({
      query: (product) => ({
        url: 'product',
        method: 'POST',
        body: product
      })
    })
  }),
});

export const { useSearchProductsQuery, useSearchProductByIdQuery, useGetProductQuery, useGetProductsBrandQuery, useAddProductMutation, useGetProductsSizeQuery } = backendApi;


