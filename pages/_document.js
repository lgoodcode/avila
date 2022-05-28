import Document, { Html, Head, Main, NextScript } from 'next/document'

/**
 * This custom document is used to load fonts
 */
export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* Prevent mobile from zooming in with pinch */}
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Roboto|Inter&display=optional"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
