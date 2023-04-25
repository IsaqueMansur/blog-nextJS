import { Heading } from '@/components/Heading';
import { PostContainer } from '@/components/PostContainer';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { PostData } from '@/domain/posts/posts';

export type PostProps = {
  post: PostData;
};

export const Post = function ({ post }: PostProps) {
  return (
    <>
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
    </>
  );
};
