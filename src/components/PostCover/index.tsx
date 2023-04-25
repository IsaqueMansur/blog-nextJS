import { Container } from './styled';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export const PostCover = function ({ coverUrl, alt }: PostCoverProps) {
  return <Container src={coverUrl} alt={alt} crossOrigin="anonymous" />;
};
