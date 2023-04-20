import { ALL_POSTS_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/posts';
import axios from 'axios';

export const CountAllPosts = async (query = ''): Promise<number> => {
  const url = `${ALL_POSTS_URL}&${query}`;
  const { data } = await axios.get(url);
  const postsArray = data.data as PostData[];
  return postsArray.length;
};
