import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: none;
 }

 html {
  font-size: 62.5%;
 }

 body {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: ${({ theme }) => theme.font.sizes.medium};
}

a {
   color: ${({ theme }) => theme.colors.secondary};
   text-decoration: none;
   transition: opacity 300ms ease-in-out;

   &:hover {
    opacity: .6;
   }
 }
`;
