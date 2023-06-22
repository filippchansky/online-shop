import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { QueryArgs } from "@testing-library/react";
import { IProducts, IResponse } from "../../models/models";

export const backendApi = createApi({
  reducerPath: "backend/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/products",
  }),
  endpoints: (build) => ({
    searchProducts: build.query<IResponse, string>({
      query: (page: string) => ({
        url: `?page_size=1`,
        params : {
          page: `${page}` || '0'
        }
      }),
    }),
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
    })
  }),
});

export const { useSearchProductsQuery, useSearchProductPriceQuery, useSearchProductByIdQuery } = backendApi;


