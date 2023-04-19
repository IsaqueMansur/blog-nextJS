import { ALL_POSTS_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/posts';
import axios from 'axios';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${ALL_POSTS_URL}&${query}`;
  const { data } = await axios.get(url);
  return data.data;
};
