import axios from 'axios';

console.log(process.env.NEXT_PUBLIC_API_URL);

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})
