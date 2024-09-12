import { makeAutoObservable, runInAction } from 'mobx';
import { AdvertisementType, AdvertisementToSendType } from '@shared/types';

class AdvertisementsStore {
  advertisements: AdvertisementType[] = [];
  currentPage = 1;
  elementsPerPage = 10;
  loading: boolean = false;
  error: string | null = null;
  hasMore = true;

  constructor() {
    makeAutoObservable(this);
  }

  async getAdvertisements(page: number) {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch(`http://localhost:3000/advertisements?_start=${page === 1 ? 0 : (this.currentPage - 1) * this.elementsPerPage }&_limit=${this.elementsPerPage}`);
      if (!response.ok) {
        throw new Error('Error while getting a list of advertisements');
      }
      const data = await response.json();

      runInAction(() => {
        this.advertisements = [...this.advertisements, ...data];
        this.currentPage = page;
        this.loading = false;
        if (data.length < this.elementsPerPage) {
          this.hasMore = false;
        }
      });
    } catch (error: any) {
      runInAction(() => {
        this.error = error.message;
        this.loading = false;
      });
    }
  }

  async addNewAdvertisement (payload: AdvertisementToSendType) {
    try {
      const response = await fetch('http://localhost:3000/advertisements', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        throw new Error('Error while sending a new advertisement to the server');
      }
      const data = await response.json();
      this.getAdvertisements(this.currentPage);
    } catch {
    }
  }

  setPage(page: number) {
    if (!this.hasMore || this.loading) return;
    this.currentPage = page;
    this.getAdvertisements(page);
  }

  setPageSize(pageSize: number) {
    this.elementsPerPage = pageSize;
    this.getAdvertisements(this.currentPage);
  }
}

export const advertisementsStore = new AdvertisementsStore();
