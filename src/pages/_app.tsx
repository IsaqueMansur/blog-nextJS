import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Container } from '@/components/MainContainer/styled';
import { GlobalStyles } from '@/styles/global-styles';
import { theme } from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}
