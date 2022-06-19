import { ChakraProvider } from '@chakra-ui/react'
import 'aos/dist/aos.css'
import { AnimatePresence, motion } from 'framer-motion'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { createContext, useEffect, useState } from 'react'
import { fetchAPI, getMediaURL } from '../lib/api'
import Hydrate from '../components/Hydrate'
import Preloader from '../components/Preloader'
import '../styles/global.css'
import theme from '../theme'
import type { Footer, Navigation, Seo } from '../types/payload-types'

export type GlobalContextType = {
	seo: Seo
	nav: Navigation
	footer: Footer
}

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType)

export default function MyApp({ Component, pageProps }: AppProps) {
	const {
		seo: { favicon, ...seo },
		nav,
		footer,
	} = pageProps
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setLoading(false), 2e3)
	}, [])

	return (
		<ChakraProvider theme={theme}>
			<Hydrate>
				<Head>
					{favicon && <link rel="shortcut icon" href={getMediaURL(favicon)} />}
					{/* Prevent mobile from zooming in with pinch - not to be used in _document.js */}
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
					/>
				</Head>
				<GlobalContext.Provider value={{ seo, nav, footer }}>
					<AnimatePresence>
						<motion.div
							key={loading ? 'preloader' : 'page'}
							initial={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							{loading ? <Preloader /> : <Component {...pageProps} />}
						</motion.div>
					</AnimatePresence>
				</GlobalContext.Provider>
			</Hydrate>
		</ChakraProvider>
	)
}

// Using `getInitialProps` to customize the App will turn off the automatic
// static optimization feature for all pages that aren't SSG (must use `getStaticProps`)
MyApp.getInitialProps = async function () {
	const seo = await fetchAPI<Seo>('/globals/seo')
	const nav = await fetchAPI<Navigation>('/globals/nav')
	const footer = await fetchAPI<Footer>('/globals/footer')

	return {
		pageProps: { seo, nav, footer },
	}
}
