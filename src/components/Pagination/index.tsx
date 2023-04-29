import { PaginationProtocol } from '@/domain/posts/pagination';
import { Container, NextLink, PreviousLink } from './styled';
import Link from 'next/link';

export type PaginationProps = PaginationProtocol;

export const Pagination = ({
  previusPage,
  nextPage,
  numberOfPosts,
  category,
  postsPerPage,
}: PaginationProps) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previusLink = `/post/page/${previusPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviusPage = previusPage > 0;
  return (
    <Container>
      {hasPreviusPage && (
        <PreviousLink>
          <Link href={previusLink}>
            <h5>Previous</h5>
          </Link>
        </PreviousLink>
      )}
      {hasNextPage && (
        <NextLink>
          <Link href={nextLink}>
            <h5>Next</h5>
          </Link>
        </NextLink>
      )}
    </Container>
  );
};
