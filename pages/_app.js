import '../styles/globals.css'
import { LangProvider } from '../components/context/langContext'
import Head from 'next/head'

export default function App ({Component, pageProps}) {
    return(
        <LangProvider>
            <Head>
            <link rel="icon" href="../components/images/logo.png" />
            <script src="https://kit.fontawesome.com/baf7279d2c.js" crossorigin="anonymous"></script>
            <title>Ulises Montenegro</title>
            </Head>
            <Component {...pageProps} />
        </LangProvider>
    )
}