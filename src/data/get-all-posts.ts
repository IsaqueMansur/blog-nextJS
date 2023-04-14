import { ALL_POSTS_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/posts';
import axios from 'axios';

export const getAllPosts = async (): Promise<PostData[]> => {
  const { data } = await axios.get(ALL_POSTS_URL);
  return data.data;
};
