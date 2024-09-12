import { AdvertisementToSendType, AdvertisementType } from "@shared/types";

const BASE_URL = 'http://localhost:3000';

export const fetchAdvertisements = async (): Promise<AdvertisementType[]> => {
  const response = await fetch(`${BASE_URL}/advertisements`);
  if (!response.ok) {
    throw new Error('Error while fetching a list of advertisements');
  }
  return response.json();
};

export const fetchAdvertisementById = async (id: string): Promise<AdvertisementType> => {
  if (!id) {
    throw new Error('Error while fetching an advertisement by id');
  }
  const response = await fetch(`${BASE_URL}/advertisements/${id}`);
  if (!response.ok) {
    throw new Error('Error while fetching an advertisement by id');
  }
  return response.json();
};

export const searchAdvertisementByName = async (searchQuery: string) => {
  if (!searchQuery) {
    throw new Error('Error while fetching an advertisement by id');
  }
  const response = await fetch(`${BASE_URL}/advertisements?name_like=${searchQuery}`);
  if (!response.ok) {
    throw new Error('Error while fetching an advertisement by id');
  }
  return response;
};

export const updateAdvertisementById = async (id: string, payload: AdvertisementToSendType): Promise<AdvertisementType> => {
  if (!id) {
    throw new Error('Error while updating an advertisement by id');
  }
  const response = await fetch(`${BASE_URL}/advertisements/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    throw new Error('Error while updating an advertisement by id');
  }
  return response.json();
};

