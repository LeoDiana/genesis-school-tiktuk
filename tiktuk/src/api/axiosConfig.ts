/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_API_KEY as string,
  },
});
