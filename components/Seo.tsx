import Head from 'next/head'
import { getMediaURL } from '../lib/api'
import type { Media, Page, Seo as SeoType } from '../types/payload-types'

export type SeoProps = {
	globalSeo: SeoType
	pageSeo: Page['meta']
}

export default function Seo({ globalSeo, pageSeo }: SeoProps) {
	const { siteName, description, image, favicon } = globalSeo
	const seo = {
		title: pageSeo?.title ? `${pageSeo.title} | ${siteName}` : siteName,
		description: pageSeo?.description || description,
		image: pageSeo?.image || image,
	}

	return (
		<Head>
			<title>{seo.title}</title>
			{favicon && <link rel="shortcut icon" href={getMediaURL(favicon)} />}

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
