import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styled';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export function PostCard({ slug, title, cover }: PostCardProps) {
  return (
    <Container>
      <PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          {/* <img src={cover} alt={title} crossOrigin="anonymous" /> */}
        </Link>
      </PostCardCover>

      <PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <p>{title}</p>
        </Link>
      </PostCardHeading>
    </Container>
  );
}
