import Head from 'next/head'
import { useContext } from 'react'
// import { GlobalContext } from '../pages/_app'
import getMedia from '../lib/getMedia'
import type { PageSeo } from '../types'

// export default function Seo({ pageSeo }: { pageSeo: PageSeo }) {
export default function Seo({ pageSeo }: { pageSeo: PageSeo }) {
	return <></>
	// const { defaultSeo, siteName } = useContext(GlobalContext)

	// const seo = {
	// 	...defaultSeo,
	// 	...pageSeo,
	// 	metaTitle: !pageSeo.metaTitle ? siteName : `${pageSeo.metaTitle} | ${siteName}`,
	// 	metaImage: getMedia(pageSeo?.metaImage?.data ? pageSeo.metaImage : defaultSeo.metaImage),
	// }

	// return (
	// 	<Head>
	// 		<title>{seo.metaTitle || siteName}</title>

	// 		{seo.metaTitle && (
	// 			<>
	// 				<meta property="og:title" content={seo.metaTitle} />
	// 				<meta name="twitter:title" content={seo.metaTitle} />
	// 			</>
	// 		)}

	// 		{seo.metaDescription && (
	// 			<>
	// 				<meta name="description" content={seo.metaDescription} />
	// 				<meta property="og:description" content={seo.metaDescription} />
	// 				<meta name="twitter:description" content={seo.metaDescription} />
	// 			</>
	// 		)}

	// 		{seo.metaImage && (
	// 			<>
	// 				<meta property="og:image" content={seo.metaImage} />
	// 				<meta name="twitter:image" content={seo.metaImage} />
	// 				<meta name="image" content={seo.metaImage} />
	// 			</>
	// 		)}

	// 		<meta name="twitter:card" content="summary_large_image" />
	// 	</Head>
	// )
}
