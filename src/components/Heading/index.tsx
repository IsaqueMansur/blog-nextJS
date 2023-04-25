import { Container } from './styled';

export type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = function ({ children }: HeadingProps) {
  return <Container>{children}</Container>;
};
