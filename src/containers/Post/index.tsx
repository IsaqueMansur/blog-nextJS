import Comments from '@/components/Comments';
import { Heading } from '@/components/Heading';
import { PostContainer } from '@/components/PostContainer';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { SITE_NAME } from '@/config/app-config';
import { PostData } from '@/domain/posts/posts';
import { removeHtml } from '@/utils/remove-html';
import Head from 'next/head';

export type PostProps = {
  post: PostData;
};

export const Post = function ({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>
          {post.attributes.title} - {SITE_NAME}
          <meta
            name="description"
            content={removeHtml(post.attributes.content).slice(0, 150)}
          />
        </title>
      </Head>
      <Heading>{post.attributes.title}</Heading>
      <PostCover
        coverUrl={post.attributes.cover.data.attributes.url}
        alt={post.attributes.title}
      />
      <PostDetails
        author={post.attributes.author.data.attributes.name}
        category={post.attributes.categorie.data.attributes.name}
        date={post.attributes.createdAt}
      />
      <PostContainer content={post.attributes.content} />
      <Comments title={post.attributes.title} slug={post.attributes.slug} />
    </>
  );
};
