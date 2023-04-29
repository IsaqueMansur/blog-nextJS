import { PostData } from '@/domain/posts/posts';
import { Container, Category } from './styled';
import { PostCard } from '@/components/PostCard';
import Head from 'next/head';
import { PaginationProtocol } from '@/domain/posts/pagination';
import { Pagination } from '@/components/Pagination';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationProtocol;
};
export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>
          {category ? `${category} - Antediguemon` : 'Antediguemon'}
        </title>
        <meta name="description" content="Blog sobre tecnologia"></meta>
      </Head>
      {category && <Category>Categoria: {category}</Category>}
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
      {pagination && <Pagination {...pagination} />}
    </>
  );
}
