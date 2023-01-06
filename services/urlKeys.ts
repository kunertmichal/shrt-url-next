import { httpClient } from '../utils';
import { FormData } from '../types/form-data';

export async function createUrlKey(data: FormData) {
  const response = await httpClient.post('/urls', data)
  return response.data;
}

export async function getUrlKey(key: string) {
  const response = await httpClient.get(`/urls/${key}`)
  return response.data;
}
