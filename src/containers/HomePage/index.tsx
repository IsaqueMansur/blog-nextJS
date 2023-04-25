import { PostData } from '@/domain/posts/posts';
import { Container } from './styled';
import { PostCard } from '@/components/PostCard';

export type HomePageProps = {
  posts: PostData[];
};
export default function HomePage({ posts }: HomePageProps) {
  return (
    <Container>
      {posts.map((post) => (
        <PostCard
          key={post.attributes.slug}
          cover={post.attributes.cover.data.attributes.formats.small.url}
          title={post.attributes.title}
          slug={post.attributes.slug}
        ></PostCard>
      ))}
    </Container>
  );
}
