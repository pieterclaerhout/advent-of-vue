import { BaseClient } from "./BaseClient";

export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  description: string;
}

export class ProductClient extends BaseClient {
  protected apiHost: string = "https://dummyjson.com/";

  public async search(query: string = ""): Promise<Product[]> {
    const resp = await this.fetch("products/search", { q: query });
    return resp.products as Product[];
  }
}
