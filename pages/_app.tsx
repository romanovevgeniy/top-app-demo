import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return <>
        <Head>
            <title>My Top - наш лучший топ</title>;
            <link rel="icon" href="/favicon.ico" />
/* подключаем шрифты с Google Fonts */
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp;
