import { ALL_POSTS_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/posts';
import axios from 'axios';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${ALL_POSTS_URL}&slug=${slugString}`;
  const { data } = await axios.get(url);
  return data.data;
};
