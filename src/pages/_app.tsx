import { ThemeProvider } from 'styled-components';

import { Header } from '@/components/Header/header'

import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
