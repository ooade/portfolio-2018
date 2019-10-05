import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Head>
					<title>Ademola Adegbuyi's Portfolio</title>
				</Head>
				<Component {...pageProps} />
			</Container>
		);
	}
}
