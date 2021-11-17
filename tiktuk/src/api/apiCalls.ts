/* eslint-disable import/no-named-default */
import {
  TrendingFeedItem,
  UserInfoResponse,
  UserFeedItem,
} from '../common/types';

import { default as posts } from './getTrendingFeed.json';
import { default as userInfo } from './userInfo.json';
import { default as userFeed } from './userFeed.json';
import { instance as axios } from './axiosConfig';

const GET_DATA_FROM_API = false;

const getTrendingFeedAPI = async (): Promise<TrendingFeedItem[]> => {
  try {
    const response = await axios.get('/trending/feed');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getUserFeedAPI = async (username: string): Promise<UserFeedItem[]> => {
  try {
    const response = await axios.get(`/user/feed/${username}`);
    console.log(response.data.itemList);
    return response.data.itemList;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getUserInfoAPI = async (username: string): Promise<UserInfoResponse> => {
  try {
    const response = await axios.get(`/user/info/${username}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return {} as UserInfoResponse;
  }
};

export const getTrendingFeed = async (): Promise<TrendingFeedItem[]> => (
  GET_DATA_FROM_API ? getTrendingFeedAPI() : posts
);

export const getUserFeed = async (
  username:string,
): Promise<UserFeedItem[]> => (
  GET_DATA_FROM_API ? getUserFeedAPI(username) : userFeed.itemList
);

export const getUserInfo = async (
  username:string,
): Promise<UserInfoResponse> => (
  GET_DATA_FROM_API ? getUserInfoAPI(username) : userInfo
);
