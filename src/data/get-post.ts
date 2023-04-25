import { ALL_POSTS_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/posts';
import markdownToHtml from '@/utils/markdown-to-html';
import axios from 'axios';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${ALL_POSTS_URL}&filters[slug]=${slugString}`;
  const { data } = await axios.get(url);
  const content = await markdownToHtml(data.data[0].attributes.content);
  const finalPost = {
    ...data.data[0],
    attributes: { ...data.data[0].attributes, content },
  };
  return [finalPost];
};
