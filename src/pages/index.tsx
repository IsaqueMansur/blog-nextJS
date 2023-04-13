import { PostData } from '@/domain/posts/posts';
import axios from 'axios';
import { GetStaticProps } from 'next';

const getPosts = async (): Promise<PostData[]> => {
  const { data } = await axios.get(
    'http://127.0.0.1:1337/api/posts?populate=*',
  );
  return data.data;
};
export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <h3 key={post.id}>{post.attributes.title}</h3>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};
