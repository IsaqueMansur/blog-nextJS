import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  overflow: hidden;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    display: block;
    overflow-y: hidden;
  }
`;

export const PostCardHeading = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    p {
      color: ${theme.colors.darkDray};
    }
  `}
`;
