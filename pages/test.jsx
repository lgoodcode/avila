import Head from 'next/head'
import { attributes, react as HomeContent } from '../content/home.md'

export default function HomePage() {
	const { title, date } = attributes

	return (
		<>
			<Head>
				<title>Index</title>
			</Head>
			<h1>{title}</h1>
			<h3>{date}</h3>
			<HomeContent />
		</>
	)
}
