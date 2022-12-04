import { ProductModel } from './product.model';

export interface CartModel {
  readonly id: number;
  readonly userid: number;
  readonly date: string;
  readonly products: ProductModel[];
}
