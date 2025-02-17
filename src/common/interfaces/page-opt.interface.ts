import { Order } from '../constants/page-order';

export interface PageOptions {
  skip: number;
  size: number;
  order: Order;
}
