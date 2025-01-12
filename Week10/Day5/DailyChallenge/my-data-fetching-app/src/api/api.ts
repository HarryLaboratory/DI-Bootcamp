import axios from 'axios';

const API_URL = '';  // Didn't know if we were supposed to pay for the API

export const fetchData = async <T>(): Promise<T> => {
  const response = await axios.get<T>(API_URL);
  return response.data;
};
