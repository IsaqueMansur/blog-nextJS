import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/get-all-posts';
import { PostData } from '@/domain/posts/posts';
import { GetServerSideProps } from 'next';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts }: CategoryProps) {
  return (
    <HomePage
      posts={posts}
      category={posts[0].attributes.categorie.data.attributes.name}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx);
  const urlQuery = `&sort=id:desc&pagination[start]=0&pagination[limit]=30&filters[categorie][name][$contains]=${ctx.query.category}`;
  const posts = await getAllPosts(urlQuery);
  return {
    props: { posts },
  };
};
