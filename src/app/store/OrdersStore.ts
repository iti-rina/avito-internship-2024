import { makeAutoObservable, runInAction } from 'mobx';
import { OrderType } from '@shared/types';

class OrdersStore {
  orders: OrderType[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async getOrders() {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch('http://localhost:3000/orders');
      if (!response.ok) {
        throw new Error('Error while getting a list of orders');
      }
      const data = await response.json();

      runInAction(() => {
        this.orders = data;
        this.loading = false;
      });

    } catch (error: any) {
      runInAction(() => {
        this.error = error.message;
        this.loading = false;
      });
    }
  }
}

export const ordersStore = new OrdersStore();