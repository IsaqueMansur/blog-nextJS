import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/get-all-posts';
import { PostData } from '@/domain/posts/posts';
import { GetStaticProps } from 'next';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  console.log(posts);
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('&sort=id:desc');
  return {
    props: { posts },
  };
};
