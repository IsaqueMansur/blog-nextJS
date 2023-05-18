import Link from 'next/link';
import { Container } from './styled';
import { SITE_NAME } from '@/config/app-config';

export function Header() {
  return (
    <Container>
      <Link href="/">
        <p>{SITE_NAME}</p>
      </Link>
      <Link href="/definitions">
        <p style={{ color: 'red', marginLeft: '60px' }}>
          Nossa sinfonia (clica)
        </p>
      </Link>
    </Container>
  );
}
