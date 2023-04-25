import { Container } from './styled';

export type PostContainerProps = {
  content: string;
};
export const PostContainer = function ({ content }: PostContainerProps) {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};
