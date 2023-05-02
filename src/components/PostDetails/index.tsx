import { Container } from './styled';
import { Date } from '../Date';
import Link from 'next/link';

export type postDetailsProps = {
  date: string;
  author: string;
  category: string;
};
export const PostDetails = function ({
  author,
  category,
  date,
}: postDetailsProps) {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} (
      <Link as={`/post/page/1/${category}`} href="/post/page/[...param]">
        Categoria: {category}
      </Link>
      )
    </Container>
  );
};
