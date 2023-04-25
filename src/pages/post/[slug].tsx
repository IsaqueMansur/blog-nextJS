import { Post } from '@/containers/Post';
import { CountAllPosts } from '@/data/count-all-posts';
import { getAllPosts } from '@/data/get-all-posts';
import { getPost } from '@/data/get-post';
import { PostData } from '@/domain/posts/posts';
import { GetStaticPaths, GetStaticProps } from 'next';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return <Post post={post} />;
};

export default DynamicPost;

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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params?.slug as string | string[]);
  return {
    props: { post: posts[0] },
  };
};
