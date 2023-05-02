import { PostData } from '@/domain/posts/posts';
import { Container, Category, AllPostsLink } from './styled';
import { PostCard } from '@/components/PostCard';
import Head from 'next/head';
import { PaginationProtocol } from '@/domain/posts/pagination';
import { Pagination } from '@/components/Pagination';
import Link from 'next/link';

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
          {category
            ? `${posts[0].attributes.categorie.data.attributes.name} - Antediguemon`
            : 'Antediguemon'}
          {pagination?.nextPage && ` - Página ${pagination.nextPage - 1}`}
        </title>
        <meta name="description" content="Blog sobre tecnologia"></meta>
      </Head>
      {category && (
        <Category>
          Categoria: {posts[0].attributes.categorie.data.attributes.name}
        </Category>
      )}
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
      {!pagination?.nextPage && (
        <Link href="/post/page/[...param]" as="/post/page/1" passHref>
          <AllPostsLink>Ver todos os posts</AllPostsLink>
        </Link>
      )}
    </>
  );
}
