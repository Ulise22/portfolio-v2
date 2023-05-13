import '../styles/globals.css'
import { LangProvider } from '../components/context/langContext'
import Head from 'next/head'
import Script from 'next/script'

export default function App ({ Component, pageProps }) {
  return (
    <LangProvider>
      <Script src='https://kit.fontawesome.com/baf7279d2c.js' crossOrigin='anonymous' />
      <Head>
        <title>Ulises Montenegro</title>
        <meta name="description" content="Portafolio del desarrollador frontend Ulises Montenegro con todos sus proyectos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </LangProvider>
  )
}
