/* eslint-disable import/no-named-default */
import axios, { Method } from 'axios';
import {
  TrendingFeedItem,
  UserInfoResponse,
  UserFeedItem,
} from '../common/types';
import { default as posts } from './getTrendingFeed.json';
import { default as userInfo } from './userInfo.json';
import { default as userFeed } from './userFeed.json';

const GET_DATA_FROM_API = false;

const getTrendingFeedAPI = async (): Promise<TrendingFeedItem[]> => {
  const options = {
    method: 'GET' as Method,
    url: 'https://tiktok33.p.rapidapi.com/trending/feed',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY as string,
    },
  };

  axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
  return [];
};

const getUserFeedAPI = async (username: string): Promise<UserFeedItem[]> => {
  const options = {
    method: 'GET' as Method,
    url: `https://tiktok33.p.rapidapi.com/user/feed/${username}`,
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY as string,
    },
  };

  axios
    .request(options)
    .then((response) => response.data.itemList)
    .catch((error) => {
      console.error(error);
    });
  return [];
};

const getUserInfoAPI = async (username: string): Promise<UserInfoResponse> => {
  const options = {
    method: 'GET' as Method,
    url: `https://tiktok33.p.rapidapi.com/user/info/${username}`,
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY as string,
    },
  };

  axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
  return {} as UserInfoResponse;
};

export const getTrendingFeed = async (): Promise<TrendingFeedItem[]> => (
  GET_DATA_FROM_API ? getTrendingFeedAPI() : posts
);

export const getUserFeed = async (
  username = 'oleg_sheff',
): Promise<UserFeedItem[]> => (
  GET_DATA_FROM_API ? getUserFeedAPI(username) : userFeed.itemList
);

export const getUserInfo = async (
  username = 'oleg_sheff',
): Promise<UserInfoResponse> => (
  GET_DATA_FROM_API ? getUserInfoAPI(username) : userInfo
);
