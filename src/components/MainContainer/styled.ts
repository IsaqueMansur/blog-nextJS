import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 110rem;
    font-size: ${theme.font.sizes.medium};
    margin: 60px auto;
    padding: ${theme.spacings.medium};
  `}
`;
