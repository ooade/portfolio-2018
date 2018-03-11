import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta name="viewport" content="width=device-width,initial-scale=1" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta property="og:title" content="Ademola Adegbuyi" />
					<meta
						property="og:site_name"
						content="Ademola Adegbuyi's Portfolio"
					/>
					<meta property="og:type" content="website" />
					<meta property="og:image" content="/static/icons/icon-512x512.png" />
					<meta
						property="og:description"
						name="description"
						content="I'm a Freelance Full Stack Developer. Connect with me, ask me about progressive web apps, building apps for the next billion users, web performance and generally anything JavaScript"
					/>
					<meta
						name="keywords"
						content="Full Stack, Developer, Web, PWA, Ademola, Adegbuyi, Anime, Nigeria"
					/>
					<meta name="robots" content="index, follow" />
					<title>Ademola Adegbuyi's Portfolio</title>
					<link rel="manifest" href="static/manifest.json" />
					<link rel="icon" href="/static/favicon.ico" />
					<link rel="stylesheet" href="/static/index.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<script
						defer
						src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
					/>
				</body>
			</html>
		);
	}
}
