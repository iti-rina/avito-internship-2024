import { makeAutoObservable, runInAction } from 'mobx';
import { AdvertisementType, AdvertisementToSendType } from '@shared/types';

class AdvertisementsStore {
  advertisements: AdvertisementType[] = [];
  currentPage = 1;
  elementsPerPage = 10;
  loading: boolean = false;
  error: string | null = null;
  totalCount = 0;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchAdvertisements(page: number, pageSize: number) {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch(`http://localhost:3000/advertisements?_page=${page}&_limit=${pageSize}`);
      if (!response.ok) {
        throw new Error('Error while getting a list of advertisements');
      }

      const data = await response.json();
      this.totalCount = Number(response.headers.get('X-Total-Count'));

      runInAction(() => {
        this.advertisements = [...data];
        this.currentPage = page;
        this.elementsPerPage = pageSize;
        this.loading = false;

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
      this.fetchAdvertisements(this.currentPage, this.elementsPerPage);
    } catch {
    }
  }

  async searchAvertisementsByName(searchQuery: string) {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch(`http://localhost:3000/advertisements?name_like=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Error while getting a list of advertisements');
      }

      const data = await response.json();
      this.totalCount = data.length;

      runInAction(() => {
        this.advertisements = [...data];
        this.currentPage = 1;
        this.loading = false;

      });
    } catch (error: any) {
      runInAction(() => {
        this.error = error.message;
        this.loading = false;
      });
    }
  }

  async editAdvertisement(id: number, payload: AdvertisementToSendType) {
    try {
      const response = await fetch(`http://localhost:3000/advertisements/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error('Error while updating the advertisement on the server');
      }
  
      const data = await response.json();
  
      this.fetchAdvertisements(this.currentPage, this.elementsPerPage);
    } catch (error) {
      console.error('Error updating advertisement:', error);
    }
  }
  

  setPage(page: number) {
    this.currentPage = page;
    this.fetchAdvertisements(page, this.elementsPerPage);
  }

  setPageSize(pageSize: number) {
    this.elementsPerPage = pageSize;
    this.currentPage = 1
    this.fetchAdvertisements(this.currentPage, this.elementsPerPage);
  }
}

export const advertisementsStore = new AdvertisementsStore();
