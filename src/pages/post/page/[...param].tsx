import HomePage from '@/containers/HomePage';
import { CountAllPosts } from '@/data/count-all-posts';
import { getAllPosts } from '@/data/get-all-posts';
import { PaginationProtocol } from '@/domain/posts/pagination';
import { PostData } from '@/domain/posts/posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';

export type PageProps = {
  posts: PostData[];
  pagination: PaginationProtocol;
  category?: string;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <h2>Carregando conteúdo...</h2>;
  if (!posts)
    return <Error statusCode={404} title="Nenhum post foi encontrado" />;
  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx?.params?.param ? ctx.params.param[0] : 1);
  const readCategory = ctx?.params?.param as string[];
  const category = readCategory[1] ? readCategory[1] : null;
  const postsPerPage = 6;
  const startFrom = (page - 1) * postsPerPage;
  const nextPage = page + 1;
  const previusPage = page - 1;
  const categoryQuery = category
    ? `&filters[categorie][name][$contains]=${category}`
    : '';
  const numberOfPosts = Number(await CountAllPosts(categoryQuery));

  const posts = await getAllPosts(
    `&sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`,
  );

  const pagination: PaginationProtocol = {
    nextPage,
    postsPerPage,
    previusPage,
    numberOfPosts,
    category,
  };
  if (posts.length) {
    return {
      props: { posts, category, pagination },
      revalidate: 300,
    };
  } else {
    return {
      props: { data: null },
    };
  }
};
