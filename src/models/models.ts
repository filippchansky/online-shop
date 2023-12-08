export interface IResponse {
  content: IProducts[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort2;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface IProducts {
  productId?: number;
  productName: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  createDate?: number;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageSize: number;
  pageNumber: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export interface Sort2 {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export type Iinventory = Root2[]

export interface Root2 {
  inventoryId: number
  productId: number
  quantity: number
  size: number
}


export interface IProductImages {
  productImageId: number
  productId: number
  picture: string
}
