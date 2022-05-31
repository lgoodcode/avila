import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import App, { type AppContext, AppProps } from 'next/app'
import Hydrate from '../components/Hydrate'
import theme from '../theme'
import 'aos/dist/aos.css'
import '../styles/global.css'

import { fetchAPI } from '../lib/api'
import { createContext } from 'react'
import getMedia from '../lib/getMedia'
import { GlobalContextProps } from '../types'

// export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps)

export default function MyApp({ Component, pageProps }: AppProps) {
	// const { favicon, ...global } = pageProps.global.attributes

	return (
		<ChakraProvider theme={theme}>
			<Hydrate>
				<Head>
					{/* <link rel="shortcut icon" href={getMedia(favicon)} /> */}
					{/* Prevent mobile from zooming in with pinch - not to be used in _document.js */}
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
					/>
				</Head>
				{/* <GlobalContext.Provider value={global}> */}
				<Component {...pageProps} />
				{/* </GlobalContext.Provider> */}
			</Hydrate>
		</ChakraProvider>
	)
}

// MyApp.getInitialProps = async function (ctx: AppContext) {
// 	// Calls page's `getInitialProps` and fills `appProps.pageProps`
// 	const appProps = await App.getInitialProps(ctx)
// 	const global = await fetchAPI('/global', {
// 		populate: ['favicon', 'defaultSeo', 'defaultSeo.metaImage'],
// 	})

// 	// Pass data to page via props
// 	return {
// 		...appProps,
// 		pageProps: { global },
// 	}
// }
