import { httpClient } from '../utils';
import { FormData } from '../types/form-data';

export async function createShortUrl(data: FormData) {
  const response = await httpClient.post('/urls', data)
  return response.data;
}

export async function getShortUrl(key: string) {
  const response = await httpClient.get(`/urls/${key}`)
  return response.data;
}
