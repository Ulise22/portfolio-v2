import '../styles/globals.css'
import { LangProvider } from '../components/context/langContext'
import Head from 'next/head'
import Script from 'next/script'

export default function App ({ Component, pageProps }) {
  return (
    <LangProvider>
      <Script src='https://kit.fontawesome.com/baf7279d2c.js' crossOrigin='anonymous' />
      <Head>
        <link rel='icon' href='../public/favicon.ico'/>
        <title>Ulises Montenegro</title>
      </Head>
      <Component {...pageProps} />
    </LangProvider>
  )
}
