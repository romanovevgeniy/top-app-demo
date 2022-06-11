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

		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp;
