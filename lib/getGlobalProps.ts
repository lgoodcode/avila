import { Seo, Navigation, Footer } from '../types/payload-types'
import { fetchAPI } from './api'

export type GlobalProps = {
	globalSeo: Seo
	nav: Navigation
	footer: Footer
}

/**
 * Because NextJs doesn't allow the `getStaticProps` to be used on the _app
 * and `getInitialProps` runs on every page and disables automatic static
 * optimization, we are just going to use a helper function to request it
 * for every page.
 */
export const getGlobalProps = async () => {
	const globalSeo = await fetchAPI<Seo>('/globals/seo')
	const nav = await fetchAPI<Navigation>('/globals/nav')
	const footer = await fetchAPI<Footer>('/globals/footer')

	return { globalSeo, nav, footer }
}
