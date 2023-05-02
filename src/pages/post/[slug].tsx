import { Post } from '@/containers/Post';
import { CountAllPosts } from '@/data/count-all-posts';
import { getAllPosts } from '@/data/get-all-posts';
import { getPost } from '@/data/get-post';
import { PostData } from '@/domain/posts/posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';

export type DynamicPostProps = {
  post: PostData;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await CountAllPosts();
  const posts = await getAllPosts(
    `pagination[start]=0&pagination[limit]=${numberOfPosts}`,
  );
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params?.slug as string | string[]);
  if (posts.length) {
    return {
      props: { post: posts[0] },
      revalidate: 300,
    };
  } else {
    return { props: { data: null } };
  }
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div>
        <h2>Carregando conteúdo...</h2>
      </div>
    );
  }
  if (!post) {
    return <Error statusCode={404} title="Nenhum post foi encontrado" />;
  }
  return <Post post={post} />;
};

export default DynamicPost;
