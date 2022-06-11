import Head from 'next/head'
import { useContext } from 'react'
import { GlobalContext } from '../pages/_app'
import type { Media, Page } from '../types/payload-types'

export type PageSeo = {
	pageSeo: Page['meta']
}

export default function Seo({ pageSeo }: PageSeo) {
	const {
		seo: { siteName, description, image },
	} = useContext(GlobalContext)

	const seo = {
		title: pageSeo?.title ? `${pageSeo.title} | ${siteName}` : siteName,
		description: pageSeo?.description || description,
		image: pageSeo?.image || image,
	}

	return (
		<Head>
			<title>{seo.title}</title>

			<>
				<meta property="og:title" content={seo.title} />
				<meta name="twitter:title" content={seo.title} />
			</>

			<>
				<meta name="description" content={seo.description} />
				<meta property="og:description" content={seo.description} />
				<meta name="twitter:description" content={seo.description} />
			</>

			{seo.image && (
				<>
					<meta property="og:image" content={(seo.image as Media).url} />
					<meta name="twitter:image" content={(seo.image as Media).url} />
					<meta name="image" content={(seo.image as Media).url} />
				</>
			)}

			<meta name="twitter:card" content="summary_large_image" />
		</Head>
	)
}
