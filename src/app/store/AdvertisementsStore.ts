import { makeAutoObservable, runInAction } from 'mobx';
import { AdvertisementType } from '@shared/types';

class AdvertisementsStore {
  advertisements: AdvertisementType[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async getAdvertisements() {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch('http://localhost:3000/advertisements');
      if (!response.ok) {
        throw new Error('Error while getting a list of advertisements');
      }
      const data = await response.json();

      runInAction(() => {
        this.advertisements = data;
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

export const advertisementsStore = new AdvertisementsStore();
