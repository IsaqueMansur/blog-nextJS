import Link from 'next/link';
import { Container } from './styled';
import { SITE_NAME } from '@/config/app-config';

export function Header() {
  return (
    <Container>
      <Link href="/">
        <p>{SITE_NAME}</p>
      </Link>
    </Container>
  );
}
