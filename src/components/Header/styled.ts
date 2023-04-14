import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    text-align: start;
    padding: ${theme.spacings.medium};
    position: fixed;
    top: 0;
    width: 100%;
    height: 20px;
    align-items: center;
  `}

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
