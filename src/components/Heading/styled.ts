import styled, { css } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.superLarge};
    margin: ${theme.spacings.large} 0;
    text-align: center;
  `};

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.font.sizes.large};
  }
`;
