import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

export const Category = styled.div`
  text-align: start;
  color: ${({ theme }) => theme.colors.darkDray};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacings.medium} 0;
`;

export const AllPostsLink = styled.p`
  display: block;
  text-align: center;
  width: 30%;
  margin: 20px auto;
  border-radius: 3px;
  height: 25px;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacings.medium};
  background-color: ${({ theme }) => theme.colors.darkDray};
  color: ${({ theme }) => theme.colors.white};
`;
