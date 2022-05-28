import Document, { Html, Head, Main, NextScript } from 'next/document'

/**
 * This custom document is used to load fonts
 */
export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
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
