import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'y1NBlBqkmuSWodQmUhQVUbOoDSfZYN6jiFj9kKHG2e8';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Accept-Version'] = 'v1';
axios.defaults.headers.common['Authorization'] = `Client-ID ${ACCESS_KEY}`;

export async function getImages(search, page) {
  const params = { query: search, page, orientation: 'landscape' };
  const response = await axios.get('search/photos', { params });

  return response.data;
}
