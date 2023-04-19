import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  overflow: hidden;
  height: 200px;
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;

  img {
    width: 100%;
    display: block;
    overflow-y: hidden;
  }

  @media (max-width: 630px) {
    height: auto;
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
